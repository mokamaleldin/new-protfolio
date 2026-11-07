import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { featuredRecommendations } from '@/data/recommendations';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { RecommendationCard } from '@/components/experience/RecommendationCard';
import { Reveal } from '@/components/motion/Reveal';

interface RecommendationsPreviewProps {
  locale: Locale;
}

export function RecommendationsPreview({
  locale,
}: RecommendationsPreviewProps) {
  const t = useTranslations('sections.recommendations');

  return (
    <section aria-labelledby="recommendations-heading" className="mt-[96px]">
      <Reveal>
        <div id="recommendations-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[30px] flex flex-col gap-[16px]">
        {featuredRecommendations.map((rec, idx) => (
          <Reveal key={rec.id} delay={idx * 0.05}>
            <RecommendationCard recommendation={rec} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={0.15}
        className="mt-[22px] flex flex-wrap items-center gap-6"
      >
        <Link
          href="/experience#recommendations"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors hover:text-white"
        >
          <span>{t('viewAllOnExperience')}</span>
          <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
        </Link>

        <a
          href="https://www.linkedin.com/in/mokamaleldin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#998F8F] transition-colors hover:text-white"
        >
          <span>{t('viewOnLinkedIn')}</span>
          <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </a>
      </Reveal>
    </section>
  );
}
