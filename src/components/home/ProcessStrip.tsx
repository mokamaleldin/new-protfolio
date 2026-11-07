import React from 'react';
import { useTranslations } from 'next-intl';
import { specializationStages } from '@/data/experience';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface ProcessStripProps {
  locale: Locale;
}

export function ProcessStrip({ locale }: ProcessStripProps) {
  const t = useTranslations('sections.specialization');

  return (
    <section
      id="approach"
      aria-labelledby="specialization-heading"
      className="mt-[86px] scroll-mt-[90px]"
    >
      <Reveal>
        <div id="specialization-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
        <p className="mt-[14px] max-w-[520px] text-[15px] leading-[1.5] text-[#998F8F]">
          {t('subtitle')}
        </p>
      </Reveal>

      <div className="mt-[28px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        {specializationStages.map((stage, idx) => (
          <Reveal key={stage.number} delay={idx * 0.06}>
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-white/[0.06] bg-[#1D1A19] p-[20px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[13px] font-bold tracking-wider text-[#F46C38]">
                    {stage.number}
                  </span>
                </div>
                <h3 className="mt-[8px] font-display text-[18px] font-bold text-white">
                  {stage.title[locale]}
                </h3>
                <p className="mt-[8px] text-[13px] leading-[1.52] text-[#998F8F]">
                  {stage.description[locale]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
