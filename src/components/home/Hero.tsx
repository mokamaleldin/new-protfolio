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
        className="font-display text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px] rtl:text-[30px] rtl:sm:text-[38px] rtl:md:text-[44px] rtl:lg:text-[52px] font-bold ltr:uppercase tracking-[-0.03em] leading-[1.06] rtl:leading-[1.2]"
      >
        <span className="block text-white">{heroHeading.line1[locale]}</span>
        <span className="block text-[#F46C38] mt-1">
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
