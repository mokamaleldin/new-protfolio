'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Recommendation } from '@/data/recommendations';
import type { Locale } from '@/i18n/routing';

interface RecommendationCardProps {
  recommendation: Recommendation;
  locale: Locale;
}

export function RecommendationCard({
  recommendation,
  locale,
}: RecommendationCardProps) {
  const t = useTranslations('sections.recommendations');
  const [showEnglishInAr, setShowEnglishInAr] = useState(false);

  const activeQuoteLocale: Locale =
    locale === 'ar' && showEnglishInAr ? 'en' : locale;
  const quoteText = recommendation.quote[activeQuoteLocale];

  return (
    <article className="rounded-[12px] border border-white/[0.06] bg-[#1C1918] p-[20px] transition-colors duration-200 hover:border-white/[0.12]">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-[17px] font-semibold text-white">
            {recommendation.authorName[locale]}
          </h3>
          <p className="mt-0.5 text-[12px] text-[#998F8F]">
            {recommendation.role[locale]}
          </p>
        </div>

        <span className="rounded-[6px] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#F46C38]/90">
          {recommendation.relationship[locale]}
        </span>
      </div>

      <blockquote
        dir={activeQuoteLocale === 'ar' ? 'rtl' : 'ltr'}
        lang={activeQuoteLocale}
        className="mt-[12px] text-[14px] leading-[1.58] text-[#B8B0B0]"
      >
        “{quoteText}”
      </blockquote>

      {locale === 'ar' && (
        <div className="mt-[10px]">
          <button
            type="button"
            onClick={() => setShowEnglishInAr((v) => !v)}
            className="text-[12px] text-[#998F8F] transition-colors duration-200 hover:text-white cursor-pointer"
          >
            {showEnglishInAr ? t('showArabic') : t('showOriginal')}
          </button>
        </div>
      )}
    </article>
  );
}
