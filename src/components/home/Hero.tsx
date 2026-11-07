'use client';

import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '@/data/site-config';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { SAWAD_EASE } from '@/components/motion/Reveal';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const { heroHeading, title, heroLead, heroSignature } = siteConfig.owner;

  return (
    <section aria-labelledby="hero-heading" className="pt-1">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: SAWAD_EASE }}
      >
        <div id="hero-heading">
          <SectionHeading
            as="h1"
            size="hero"
            line1={heroHeading.line1[locale]}
            line2={heroHeading.line2[locale]}
          />
        </div>
      </motion.div>

      <p className="mt-[18px] text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] text-white/95">
        {title[locale]}
      </p>

      <p className="mt-[10px] max-w-[490px] text-[15px] sm:text-[16px] font-normal leading-[1.52] text-[#998F8F]">
        {heroLead[locale]}
      </p>

      <p className="mt-[10px] text-[13px] font-medium text-[#F46C38]">
        {heroSignature[locale]}
      </p>
    </section>
  );
}
