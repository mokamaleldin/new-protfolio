'use client';

import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { siteConfig } from '@/data/site-config';
import { activeSocials } from '@/data/socials';
import { SocialSvg } from '@/components/layout/ProfileCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface ContactSectionProps {
  asPageHeading?: boolean;
  showSocialLinks?: boolean;
}

export function ContactSection({
  asPageHeading = false,
  showSocialLinks = false,
}: ContactSectionProps) {
  const tSection = useTranslations('sections.contact');
  const t = useTranslations('contactForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');
  const [startedAt] = useState(() => Date.now());

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clientSchema = z.object({
    name: z.string().trim().min(2, t('errors.nameRequired')),
    email: z.string().trim().email(t('errors.emailInvalid')),
    message: z.string().trim().min(10, t('errors.messageShort')),
  });

  function validateSingleField(field: 'name' | 'email' | 'message', val: string) {
    const fieldSchema = clientSchema.shape[field];
    const res = fieldSchema.safeParse(val);
    if (!res.success) {
      setFieldErrors((prev) => ({
        ...prev,
        [field]: res.error.issues[0]?.message,
      }));
    }
  }

  function clearFieldError(field: 'name' | 'email' | 'message') {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (status === 'error') {
      setErrorMessage(null);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const check = clientSchema.safeParse({ name, email, message });
    if (!check.success) {
      const nextErrors: { name?: string; email?: string; message?: string } = {};
      for (const issue of check.error.issues) {
        const pathKey = issue.path[0] as 'name' | 'email' | 'message';
        if (pathKey && !nextErrors[pathKey]) {
          nextErrors[pathKey] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setErrorMessage(check.error.issues[0]?.message || t('errors.generic'));
      setStatus('error');

      if (nextErrors.name) {
        nameRef.current?.focus();
      } else if (nextErrors.email) {
        emailRef.current?.focus();
      } else if (nextErrors.message) {
        messageRef.current?.focus();
      }
      return;
    }

    setFieldErrors({});
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          inquiryType: inquiryType || 'Consultation or inquiry',
          budget,
          message,
          websiteHoneypot,
          startedAt,
        }),
      });

      const json = await res.json().catch(() => null);
      if (
        !res.ok ||
        !json?.ok ||
        (json.mode !== 'sent' && json.mode !== 'honeypot')
      ) {
        setErrorMessage(t('errors.generic'));
        setStatus('error');
        return;
      }

      setStatus('sent');
      setName('');
      setEmail('');
      setInquiryType('');
      setBudget('');
      setMessage('');
    } catch {
      setErrorMessage(t('errors.generic'));
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={asPageHeading ? 'pt-1' : 'mt-[80px] scroll-mt-[90px]'}
    >
      <Reveal>
        <div id="contact-heading">
          <SectionHeading
            as={asPageHeading ? 'h1' : 'h2'}
            size={asPageHeading ? 'hero' : 'section'}
            line1={tSection('line1')}
            line2={tSection('line2')}
          />
        </div>
        <p className="mt-[14px] max-w-[540px] text-[15px] leading-[1.58] text-[#B8B0B0]">
          {tSection('subtitle')}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="/api/contact"
          noValidate
          className="mt-[28px] space-y-[18px]"
        >
          {/* Honeypot field hidden from assistive tech and visual users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website-hp">Website</label>
            <input
              id="contact-website-hp"
              name="websiteHoneypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={websiteHoneypot}
              onChange={(e) => setWebsiteHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[13px] font-medium text-white/85 mb-[6px]"
              >
                {t('nameLabel')} <span className="text-[#F46C38]">*</span>
              </label>
              <input
                ref={nameRef}
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                enterKeyHint="next"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={
                  fieldErrors.name ? 'contact-name-error' : undefined
                }
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearFieldError('name');
                }}
                onBlur={(e) => validateSingleField('name', e.target.value)}
                placeholder={t('namePlaceholder')}
                className="min-h-[48px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[16px] sm:text-[14px] text-white placeholder:text-[#998F8F]/60 border border-white/[0.06] focus:border-[#F46C38] focus:outline-none transition-colors"
              />
              {fieldErrors.name && (
                <p
                  id="contact-name-error"
                  className="mt-1.5 text-[12px] text-red-300"
                >
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[13px] font-medium text-white/85 mb-[6px]"
              >
                {t('emailLabel')} <span className="text-[#F46C38]">*</span>
              </label>
              <input
                ref={emailRef}
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={180}
                autoComplete="email"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                inputMode="email"
                enterKeyHint="next"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={
                  fieldErrors.email ? 'contact-email-error' : undefined
                }
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearFieldError('email');
                }}
                onBlur={(e) => validateSingleField('email', e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="min-h-[48px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[16px] sm:text-[14px] text-white placeholder:text-[#998F8F]/60 border border-white/[0.06] focus:border-[#F46C38] focus:outline-none transition-colors"
              />
              {fieldErrors.email && (
                <p
                  id="contact-email-error"
                  className="mt-1.5 text-[12px] text-red-300"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div>
              <label
                htmlFor="contact-inquiry"
                className="block text-[13px] font-medium text-white/85 mb-[6px]"
              >
                {t('inquiryLabel')}
              </label>
              <select
                id="contact-inquiry"
                name="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="min-h-[48px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[16px] sm:text-[14px] text-white border border-white/[0.06] focus:border-[#F46C38] focus:outline-none transition-colors"
              >
                <option value="">{t('inquiryOptions.select')}</option>
                <option value="Systems analysis & workflow improvement">
                  {t('inquiryOptions.systems')}
                </option>
                <option value="Media technology & automation">
                  {t('inquiryOptions.media')}
                </option>
                <option value="Solution & application development">
                  {t('inquiryOptions.software')}
                </option>
                <option value="Consultation or inquiry">
                  {t('inquiryOptions.consultation')}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-budget"
                className="block text-[13px] font-medium text-white/85 mb-[6px]"
              >
                {t('budgetLabel')}
              </label>
              <select
                id="contact-budget"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="min-h-[48px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[16px] sm:text-[14px] text-white border border-white/[0.06] focus:border-[#F46C38] focus:outline-none transition-colors"
              >
                <option value="">{t('budgetOptions.select')}</option>
                <option value="Under $3,000">
                  {t('budgetOptions.under3k')}
                </option>
                <option value="$3,000–$5,000">
                  {t('budgetOptions.3kTo5k')}
                </option>
                <option value="$5,000–$10,000">
                  {t('budgetOptions.5kTo10k')}
                </option>
                <option value="Over $10,000">
                  {t('budgetOptions.over10k')}
                </option>
                <option value="Not sure yet">
                  {t('budgetOptions.notSure')}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-[13px] font-medium text-white/85 mb-[6px]"
            >
              {t('messageLabel')} <span className="text-[#F46C38]">*</span>
            </label>
            <textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={4000}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={
                fieldErrors.message ? 'contact-message-error' : undefined
              }
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                clearFieldError('message');
              }}
              onBlur={(e) => validateSingleField('message', e.target.value)}
              placeholder={t('messagePlaceholder')}
              className="w-full rounded-[8px] bg-[#2E2B2B] p-[14px] text-[16px] sm:text-[14px] text-white placeholder:text-[#998F8F]/60 border border-white/[0.06] focus:border-[#F46C38] focus:outline-none transition-colors resize-y"
            />
            {fieldErrors.message && (
              <p
                id="contact-message-error"
                className="mt-1.5 text-[12px] text-red-300"
              >
                {fieldErrors.message}
              </p>
            )}
          </div>

          {status === 'error' && errorMessage && (
            <p
              role="alert"
              className="rounded-[8px] border border-red-500/40 bg-red-500/10 px-4 py-3 text-[13px] sm:text-[14px] text-red-200"
            >
              {errorMessage}
            </p>
          )}

          {status === 'sent' && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-[8px] border border-[#C5FF41]/40 bg-[#C5FF41]/10 px-4 py-3 text-[13px] sm:text-[14px] text-[#C5FF41]"
            >
              {t('successSent')}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex min-h-[48px] w-full items-center justify-center rounded-[8px] bg-[#F46C38] px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e35c27] disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
          >
            {status === 'submitting' ? t('submitting') : t('submit')}
          </button>

          <p className="text-[13px] text-[#998F8F]">
            {t('directEmailPrefix')}{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-[#F46C38] underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </form>
      </Reveal>

      {showSocialLinks && (
        <Reveal delay={0.12} className="mt-[48px]">
          <div className="border-t border-white/[0.08] pt-[32px]">
            <h2 className="font-display text-[17px] sm:text-[18px] font-semibold text-white">
              {tSection('socialHeading')}
            </h2>

            <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
              {activeSocials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-[11px] border border-white/[0.07] bg-[#1C1918] p-[14px] sm:p-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F46C38]/50 hover:bg-[#221E1D] focus-visible:-translate-y-0.5 focus-visible:border-[#F46C38]/50 focus-visible:bg-[#221E1D]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-white/[0.05] text-[#B8B0B0] transition-colors duration-200 group-hover:bg-[#F46C38]/15 group-hover:text-[#F46C38] group-focus-visible:bg-[#F46C38]/15 group-focus-visible:text-[#F46C38]">
                      <SocialSvg
                        id={social.id}
                        className="h-[18px] w-[18px]"
                      />
                    </span>
                    <span className="font-display text-[15px] font-semibold text-white transition-colors duration-200 group-hover:text-[#F46C38] group-focus-visible:text-[#F46C38]">
                      {social.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-[16px] w-[16px] shrink-0 text-[#998F8F] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F46C38] group-focus-visible:text-[#F46C38] rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
