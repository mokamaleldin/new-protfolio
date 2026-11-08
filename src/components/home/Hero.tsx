import React from 'react';
import { siteConfig } from '@/data/site-config';
import type { Locale } from '@/i18n/routing';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const { heroHeading, title, heroLead, heroSignature } = siteConfig.owner;

  return (
    <section aria-labelledby="hero-heading" className="pt-1">
      <h1
        id="hero-heading"
        className="font-display text-[34px] sm:text-[44px] md:text-[52px] lg:text-[62px] rtl:text-[30px] rtl:sm:text-[38px] rtl:md:text-[46px] rtl:lg:text-[54px] font-bold ltr:uppercase tracking-[-0.03em] leading-[1.04] rtl:leading-[1.18]"
      >
        <span className="block text-white">{heroHeading.line1[locale]}</span>
        <span className="block text-[#9E9898] mt-1">
          {heroHeading.line2[locale]}
        </span>
      </h1>

      <p className="mt-[10px] font-display text-[15px] sm:text-[17px] font-semibold tracking-[-0.01em] rtl:tracking-normal text-white/85">
        {title[locale]}
      </p>

      <p className="mt-[16px] max-w-[590px] text-[15px] sm:text-[16px] font-normal leading-[1.64] text-[#B8B0B0]">
        {heroLead[locale]}
      </p>

      <p className="mt-[12px] text-[13px] sm:text-[14px] font-semibold text-white/95">
        {heroSignature[locale]}
      </p>
    </section>
  );
}
