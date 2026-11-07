'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Recommendation } from '@/data/recommendations';
import type { Locale } from '@/i18n/routing';
import { formatYearMonth } from '@/lib/format-date';

interface RecommendationCardProps {
  recommendation: Recommendation;
  locale: Locale;
}

export function RecommendationCard({
  recommendation,
  locale,
}: RecommendationCardProps) {
  const t = useTranslations('sections.recommendations');
  const [expanded, setExpanded] = useState(false);
  const [showEnglishInAr, setShowEnglishInAr] = useState(false);

  const activeQuoteLocale: Locale =
    locale === 'ar' && showEnglishInAr ? 'en' : locale;
  const quoteText = recommendation.quote[activeQuoteLocale];
  const isLong = quoteText.length > 260;

  return (
    <article className="rounded-[12px] border border-white/[0.06] bg-[#1C1918] p-[20px] transition-colors hover:border-white/[0.11]">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-[17px] font-semibold text-white">
            {recommendation.authorName[locale]}
          </h3>
          <p className="mt-0.5 text-[12px] text-[#998F8F]">
            {recommendation.role[locale]}
          </p>
        </div>

        <span className="rounded-[6px] bg-white/[0.04] px-2.5 py-1 text-[11px] text-[#998F8F]">
          {recommendation.relationship[locale]} ·{' '}
          {formatYearMonth(recommendation.date, locale)}
        </span>
      </div>

      <blockquote
        dir={activeQuoteLocale === 'ar' ? 'rtl' : 'ltr'}
        className="mt-[14px] text-[14px] leading-[1.58] text-[#B8B0B0]"
      >
        “
        {isLong && !expanded ? `${quoteText.slice(0, 250).trim()}…` : quoteText}
        ”
      </blockquote>

      <div className="mt-[12px] flex flex-wrap items-center gap-4 text-[12px]">
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="font-medium text-[#F46C38] hover:underline"
          >
            {expanded ? t('readLess') : t('readMore')}
          </button>
        )}

        {locale === 'ar' && (
          <button
            type="button"
            onClick={() => setShowEnglishInAr((v) => !v)}
            className="text-[#998F8F] hover:text-white"
          >
            {showEnglishInAr ? t('showArabic') : t('showOriginal')}
          </button>
        )}
      </div>
    </article>
  );
}
