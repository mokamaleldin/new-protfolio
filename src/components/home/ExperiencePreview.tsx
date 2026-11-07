import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { experienceEntries } from '@/data/experience';
import { getFormattedExperienceYears } from '@/lib/experience-duration';
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
  const years = getFormattedExperienceYears();
  const line1 = `${years} ${t('line1Prefix')}`;

  return (
    <section aria-labelledby="experience-preview-heading" className="mt-[96px]">
      <Reveal>
        <div id="experience-preview-heading">
          <SectionHeading line1={line1} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[32px] flex flex-col gap-[22px]">
        {experienceEntries.slice(0, 4).map((entry, idx) => (
          <Reveal key={entry.id} delay={idx * 0.05}>
            <ExperienceItem entry={entry} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-[24px]">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors hover:text-white"
        >
          <span>{t('viewAll')}</span>
          <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
        </Link>
      </Reveal>
    </section>
  );
}
