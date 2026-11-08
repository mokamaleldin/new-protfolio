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
    <article className="group rounded-[12px] border border-white/[0.06] bg-[#1C1918] p-[20px] transition-colors duration-200 hover:border-white/[0.14]">
      <div>
        <h3 className="relative inline-block font-display text-[17px] font-semibold text-white">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#F46C38] group-hover:to-white group-hover:bg-[length:200%_auto] group-hover:animate-name-shimmer">
            {recommendation.authorName[locale]}
          </span>
        </h3>
        <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#998F8F]">
          {recommendation.role[locale]}
        </p>
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
