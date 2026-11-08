import React from 'react';
import { useTranslations } from 'next-intl';
import { specializationStages } from '@/data/experience';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface ProcessStripProps {
  locale: Locale;
  asPageHeading?: boolean;
}

export function ProcessStrip({
  locale,
  asPageHeading = false,
}: ProcessStripProps) {
  const t = useTranslations('sections.approach');

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className={asPageHeading ? 'pt-1' : 'mt-[80px] scroll-mt-[90px]'}
    >
      <Reveal>
        <div id="approach-heading">
          <SectionHeading
            as={asPageHeading ? 'h1' : 'h2'}
            size={asPageHeading ? 'hero' : 'section'}
            line1={t('line1')}
            line2={t('line2')}
          />
        </div>
        <p className="mt-[16px] max-w-[580px] text-[15px] sm:text-[16px] leading-[1.6] text-[#B8B0B0]">
          {t('subtitle')}
        </p>
      </Reveal>

      <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        {specializationStages.map((stage, idx) => (
          <Reveal key={stage.number} delay={idx * 0.05}>
            <div className="flex h-full flex-col justify-between rounded-[12px] border border-white/[0.07] bg-[#1C1918] p-[22px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[13px] font-bold tracking-wider text-[#F46C38]">
                    {stage.number}
                  </span>
                </div>
                <h2 className="mt-[8px] font-display text-[19px] font-bold text-white">
                  {stage.title[locale]}
                </h2>
                <p className="mt-[8px] text-[14px] leading-[1.58] text-[#B8B0B0]">
                  {stage.description[locale]}
                </p>
              </div>

              <div className="mt-[16px] border-t border-white/[0.06] pt-[12px]">
                <p className="text-[12px] sm:text-[13px] leading-[1.45] text-white/90">
                  <strong className="font-semibold text-[#F46C38]">
                    {t('outcomeLabel')}{' '}
                  </strong>
                  <span>{stage.outcome[locale]}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.18} className="mt-[24px]">
        <p className="rounded-[10px] border border-white/[0.05] bg-[#181514] px-[18px] py-[14px] text-[13px] sm:text-[14px] leading-[1.55] text-[#998F8F]">
          {t('techNote')}
        </p>
      </Reveal>
    </section>
  );
}
