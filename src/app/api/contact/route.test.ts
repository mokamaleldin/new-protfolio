import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { POST } from './route';

describe('POST /api/contact', () => {
  const originalEnv = process.env;
  let testIpCounter = 1;

  function nextTestIp() {
    testIpCounter += 1;
    return `192.0.2.${testIpCounter}`;
  }

  beforeEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('returns 400 validation_error for invalid payload', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': nextTestIp(),
      },
      body: JSON.stringify({
        name: 'A',
        email: 'not-an-email',
        message: 'short',
      }),
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json).toEqual({ ok: false, error: 'validation_error' });
  });

  it('returns 503 service_unavailable when RESEND_API_KEY or CONTACT_FROM_EMAIL is missing (never mailto)', async () => {
    delete process.env.RESEND_API_KEY;
    process.env.CONTACT_FROM_EMAIL = 'Portfolio <contact@mokamaleldin.com>';

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': nextTestIp(),
      },
      body: JSON.stringify({
        name: 'Client Name',
        email: 'client@example.com',
        inquiryType: 'Systems analysis & workflow improvement',
        budget: '$1,000–$3,000',
        message: 'We want to streamline our newsroom production workflow.',
      }),
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(503);
    expect(json).toEqual({ ok: false, error: 'service_unavailable' });
    expect(json.mode).toBeUndefined();
  });

  it('sends email via Resend with authorized from and visitor reply_to when configured', async () => {
    process.env.RESEND_API_KEY = 're_test_key_123';
    process.env.CONTACT_FROM_EMAIL = 'Portfolio <contact@mokamaleldin.com>';
    process.env.CONTACT_RECIPIENT_EMAIL = 'mohammed.kamal.eliwa@gmail.com';

    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ id: 'email_123' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': nextTestIp(),
      },
      body: JSON.stringify({
        name: 'Sarah Ahmed',
        email: 'sarah@mediaorg.com',
        inquiryType: 'Media technology & AI automation',
        budget: '$3,000–$5,000',
        message: 'Looking to automate our daily editorial video and graphic publishing.',
      }),
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ ok: true, mode: 'sent' });
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    const sentBody = JSON.parse(String(init?.body));
    expect(sentBody.from).toBe('Portfolio <contact@mokamaleldin.com>');
    expect(sentBody.to).toEqual(['mohammed.kamal.eliwa@gmail.com']);
    expect(sentBody.reply_to).toBe('sarah@mediaorg.com');
  });

  it('returns 502 delivery_failed when Resend rejects the request', async () => {
    process.env.RESEND_API_KEY = 're_test_key_123';
    process.env.CONTACT_FROM_EMAIL = 'Portfolio <contact@mokamaleldin.com>';

    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ message: 'Invalid domain' }), {
        status: 403,
      })
    );

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': nextTestIp(),
      },
      body: JSON.stringify({
        name: 'Client Name',
        email: 'client@example.com',
        message: 'Testing upstream failure handling when provider rejects.',
      }),
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(502);
    expect(json).toEqual({ ok: false, error: 'delivery_failed' });
  });

  it('silently accepts honeypot submissions without calling Resend', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': nextTestIp(),
      },
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'bot@example.com',
        message: 'Automated spam message content here.',
        websiteHoneypot: 'https://spam.example.com',
      }),
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ ok: true, mode: 'honeypot' });
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('enforces rate limiting after 5 requests from the same IP', async () => {
    const ip = nextTestIp();
    for (let i = 0; i < 5; i += 1) {
      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': ip,
        },
        body: JSON.stringify({ name: 'A' }),
      });
      const res = await POST(req);
      expect(res.status).toBe(400);
    }

    const sixthReq = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': ip,
      },
      body: JSON.stringify({ name: 'A' }),
    });
    const sixthRes = await POST(sixthReq);
    const json = await sixthRes.json();

    expect(sixthRes.status).toBe(429);
    expect(json).toEqual({ ok: false, error: 'rate_limit' });
  });
});
