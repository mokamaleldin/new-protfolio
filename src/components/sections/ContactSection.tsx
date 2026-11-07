'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { siteConfig } from '@/data/site-config';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface ContactSectionProps {
  asPageHeading?: boolean;
}

export function ContactSection({ asPageHeading = false }: ContactSectionProps) {
  const tSection = useTranslations('sections.contact');
  const t = useTranslations('contactForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');
  const [startedAt] = useState(() => Date.now());

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'sent' | 'mailto' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clientSchema = z.object({
    name: z.string().trim().min(2, t('errors.nameRequired')),
    email: z.string().trim().email(t('errors.emailInvalid')),
    message: z.string().trim().min(10, t('errors.messageShort')),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const check = clientSchema.safeParse({ name, email, message });
    if (!check.success) {
      setErrorMessage(check.error.issues[0]?.message || t('errors.generic'));
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          inquiryType: inquiryType || 'general',
          budget,
          message,
          websiteHoneypot,
          startedAt,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error('Request failed');
      }

      if (json.mode === 'sent') {
        setStatus('sent');
        setName('');
        setEmail('');
        setInquiryType('');
        setBudget('');
        setMessage('');
        return;
      }

      // Disclosed mailto fallback
      const subject = encodeURIComponent(
        `Portfolio Inquiry (${inquiryType || 'General'}) — ${name}`
      );
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        inquiryType ? `Inquiry Type: ${inquiryType}` : null,
        budget ? `Estimated Budget: ${budget}` : null,
        '',
        message,
      ]
        .filter((line) => line !== null)
        .join('\n');

      const mailtoHref = `mailto:${siteConfig.email}?subject=${subject}&body=${encodeURIComponent(
        bodyLines
      )}`;
      window.location.href = mailtoHref;
      setStatus('mailto');
    } catch {
      setErrorMessage(t('errors.generic'));
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={asPageHeading ? 'pt-1' : 'mt-[96px]'}
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
        <p className="mt-[14px] max-w-[500px] text-[14px] sm:text-[15px] leading-[1.52] text-[#998F8F]">
          {tSection('subtitle')}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-[32px] space-y-[18px]"
        >
          {/* Honeypot field hidden from screen readers and visual users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website-hp">Website</label>
            <input
              id="contact-website-hp"
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
                className="block text-[12px] font-medium text-[#998F8F] mb-[7px]"
              >
                {t('nameLabel')}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('namePlaceholder')}
                className="h-[42px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[14px] text-white placeholder:text-[#998F8F]/60 border border-transparent focus:border-[#F46C38] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[12px] font-medium text-[#998F8F] mb-[7px]"
              >
                {t('emailLabel')}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="h-[42px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[14px] text-white placeholder:text-[#998F8F]/60 border border-transparent focus:border-[#F46C38] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div>
              <label
                htmlFor="contact-inquiry"
                className="block text-[12px] font-medium text-[#998F8F] mb-[7px]"
              >
                {t('inquiryLabel')}
              </label>
              <select
                id="contact-inquiry"
                name="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="h-[42px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[14px] text-white border border-transparent focus:border-[#F46C38] focus:outline-none transition-colors"
              >
                <option value="">{t('inquiryOptions.select')}</option>
                <option value="Systems Analysis & Workflow Optimization">
                  {t('inquiryOptions.systems')}
                </option>
                <option value="Media Technology & AI Automation">
                  {t('inquiryOptions.media')}
                </option>
                <option value="Web / Mobile Software Engineering">
                  {t('inquiryOptions.software')}
                </option>
                <option value="Venture / Strategic Collaboration">
                  {t('inquiryOptions.partnership')}
                </option>
                <option value="General Inquiry">
                  {t('inquiryOptions.other')}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-budget"
                className="block text-[12px] font-medium text-[#998F8F] mb-[7px]"
              >
                {t('budgetLabel')}
              </label>
              <select
                id="contact-budget"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-[42px] w-full rounded-[8px] bg-[#2E2B2B] px-[14px] text-[14px] text-white border border-transparent focus:border-[#F46C38] focus:outline-none transition-colors"
              >
                <option value="">{t('budgetOptions.select')}</option>
                <option value="< $3k">{t('budgetOptions.under3k')}</option>
                <option value="$3k – $5k">{t('budgetOptions.3kTo5k')}</option>
                <option value="$5k – $10k">{t('budgetOptions.5kTo10k')}</option>
                <option value="> $10k">{t('budgetOptions.over10k')}</option>
                <option value="Not sure">{t('budgetOptions.notSure')}</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-[12px] font-medium text-[#998F8F] mb-[7px]"
            >
              {t('messageLabel')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('messagePlaceholder')}
              className="w-full rounded-[8px] bg-[#2E2B2B] p-[14px] text-[14px] text-white placeholder:text-[#998F8F]/60 border border-transparent focus:border-[#F46C38] focus:outline-none transition-colors resize-y"
            />
          </div>

          {status === 'error' && errorMessage && (
            <p
              role="alert"
              className="rounded-[8px] border border-red-500/40 bg-red-500/10 px-3.5 py-2.5 text-[13px] text-red-300"
            >
              {errorMessage}
            </p>
          )}

          {status === 'sent' && (
            <p
              role="status"
              className="rounded-[8px] border border-[#C5FF41]/40 bg-[#C5FF41]/10 px-3.5 py-2.5 text-[13px] text-[#C5FF41]"
            >
              {t('successSent')}
            </p>
          )}

          {status === 'mailto' && (
            <p
              role="status"
              className="rounded-[8px] border border-[#F46C38]/50 bg-[#F46C38]/10 px-3.5 py-2.5 text-[13px] text-white/90"
            >
              {t('mailtoDisclosed')}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex h-[46px] w-full items-center justify-center rounded-[8px] bg-[#F46C38] px-6 text-[14px] font-semibold text-white transition-all hover:bg-[#e35c27] disabled:opacity-60 cursor-pointer"
          >
            {status === 'submitting' ? t('submitting') : t('submit')}
          </button>

          <p className="text-[12px] text-[#998F8F]">
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
    </section>
  );
}
