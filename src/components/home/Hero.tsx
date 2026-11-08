'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/data/site-config';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  const { heroHeading, heroLead, heroSignature } = siteConfig.owner;

  return (
    <section aria-labelledby="hero-heading" className="pt-1">
      <h1
        id="hero-heading"
        className="font-display text-[30px] sm:text-[40px] md:text-[46px] lg:text-[54px] rtl:text-[28px] rtl:sm:text-[36px] rtl:md:text-[42px] rtl:lg:text-[48px] font-bold uppercase tracking-[-0.03em] leading-[1.08] rtl:leading-[1.2]"
      >
        <span className="block text-white">{heroHeading.line1[locale]}</span>
        <span className="block text-[#F46C38] mt-1">
          {heroHeading.line2[locale]}
        </span>
      </h1>

      <p className="mt-[18px] max-w-[580px] text-[15px] sm:text-[16px] font-normal leading-[1.62] text-[#B8B0B0]">
        {heroLead[locale]}
      </p>

      <p className="mt-[12px] text-[13px] sm:text-[14px] font-medium text-white/90">
        {heroSignature[locale]}
      </p>

      <div className="mt-[24px] flex flex-wrap items-center gap-3.5">
        <Link
          href="/contact"
          className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[9px] bg-[#F46C38] px-5 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e35c27]"
        >
          <span>{t('discussProject')}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
        </Link>

        <Link
          href="/projects"
          className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-[9px] border border-white/15 bg-white/[0.04] px-5 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F46C38]/60 hover:bg-white/[0.07]"
        >
          <span>{t('viewSelectedWork')}</span>
        </Link>
      </div>
    </section>
  );
}
