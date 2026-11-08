import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '../../../data/site-config';

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  inquiryType: z.string().trim().max(120).optional().default('Consultation or inquiry'),
  budget: z.string().trim().max(80).optional().default(''),
  message: z.string().trim().min(10).max(4000),
  websiteHoneypot: z.string().optional().default(''),
  startedAt: z.number().optional(),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (record && now < record.resetAt) {
      if (record.count >= 5) {
        return NextResponse.json(
          { ok: false, error: 'rate_limit' },
          { status: 429 }
        );
      }
      record.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    }

    const body = await request.json().catch(() => null);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'validation_error' },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Anti-spam honeypot check
    if (data.websiteHoneypot && data.websiteHoneypot.length > 0) {
      return NextResponse.json({ ok: true, mode: 'honeypot' });
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();
    const sender = process.env.CONTACT_FROM_EMAIL?.trim();
    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL?.trim() || siteConfig.email;

    // Require authorized email service configuration; never fall back to client mailto
    if (!resendKey || !sender) {
      return NextResponse.json(
        { ok: false, error: 'service_unavailable' },
        { status: 503 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: data.email,
        subject: `[Portfolio] ${data.inquiryType || 'Inquiry'} — from ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Inquiry Type: ${data.inquiryType || 'Not specified'}`,
          `Budget: ${data.budget || 'Not specified'}`,
          '',
          'Message:',
          data.message,
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error('Contact email delivery failed', {
        status: response.status,
      });
      return NextResponse.json(
        { ok: false, error: 'delivery_failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, mode: 'sent' });
  } catch (err) {
    console.error('Contact endpoint error', err);
    return NextResponse.json(
      { ok: false, error: 'server_error' },
      { status: 500 }
    );
  }
}
