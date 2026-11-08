import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { homeExperienceEntries } from '@/data/experience';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ExperienceItem } from '@/components/experience/ExperienceItem';
import { Reveal } from '@/components/motion/Reveal';

interface ExperiencePreviewProps {
  locale: Locale;
}

export function ExperiencePreview({ locale }: ExperiencePreviewProps) {
  const t = useTranslations('sections.experience');

  return (
    <section aria-labelledby="experience-preview-heading" className="mt-[80px]">
      <Reveal>
        <div id="experience-preview-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[28px] flex flex-col gap-[18px]">
        {homeExperienceEntries.slice(0, 2).map((entry, idx) => (
          <Reveal key={entry.id} delay={idx * 0.05}>
            <ExperienceItem entry={entry} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-[22px]">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors duration-200 hover:text-white"
        >
          <span>{t('viewAll')}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
