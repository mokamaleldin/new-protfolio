import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { ExperienceEntry } from '@/data/experience';
import type { Locale } from '@/i18n/routing';
import { formatDateRange } from '@/lib/format-date';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  locale: Locale;
  showDetails?: boolean;
}

export function ExperienceItem({
  entry,
  locale,
  showDetails = false,
}: ExperienceItemProps) {
  const t = useTranslations('sections.experience');
  const presentLabel = t('present');

  const earliestStart = entry.roles[entry.roles.length - 1]?.start || '';
  const latestEnd = entry.roles[0]?.end;
  const overallRange = formatDateRange(
    earliestStart,
    latestEnd,
    locale,
    presentLabel
  );

  const primaryRole = entry.roles[0]?.title[locale];
  const earlierRoles = entry.roles.slice(1);

  const innerContent = (
    <div className="group relative flex items-start justify-between gap-4 rounded-[12px] border border-white/[0.06] bg-[#1A1716]/75 p-[18px] sm:p-[20px] transition-all duration-200 hover:border-white/[0.12] hover:bg-[#1E1B1A]">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h3 className="font-display text-[19px] sm:text-[21px] font-semibold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#F46C38]">
              {entry.company[locale]}
            </h3>
            {primaryRole && (
              <span className="text-[13px] sm:text-[14px] font-medium text-[#F46C38]">
                · {primaryRole}
              </span>
            )}
          </div>

          <p className="text-[12px] sm:text-[13px] text-[#998F8F]">
            <span>{overallRange}</span>
            <span className="mx-1.5 opacity-50">·</span>
            <span>{entry.location[locale]}</span>
          </p>
        </div>

        <p className="mt-[10px] text-[14px] sm:text-[15px] leading-[1.58] text-[#B8B0B0]">
          {entry.summary[locale]}
        </p>

        {/* Show earlier role progression only on the full Experience page without repeating the current role */}
        {showDetails && earlierRoles.length > 0 && (
          <div className="mt-[10px] flex flex-wrap gap-2">
            {earlierRoles.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-[6px] bg-white/[0.04] px-2.5 py-1 text-[11px] text-[#998F8F]"
              >
                <strong className="font-medium text-white/85">
                  {r.title[locale]}
                </strong>
                <span className="mx-1.5 opacity-50">·</span>
                <span>
                  {formatDateRange(r.start, r.end, locale, presentLabel)}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Concise responsibilities (at most 2 bullets) on the Experience page */}
        {showDetails && entry.responsibilities.length > 0 && (
          <ul className="mt-[12px] space-y-1.5 ps-4 text-[13px] leading-[1.52] text-[#998F8F] list-disc marker:text-[#F46C38]">
            {entry.responsibilities.slice(0, 2).map((resp, idx) => (
              <li key={idx}>{resp[locale]}</li>
            ))}
          </ul>
        )}
      </div>

      {entry.url && (
        <span
          aria-hidden="true"
          className="pt-1 text-[#F46C38] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5"
        >
          <ArrowUpRight className="h-[17px] w-[17px] rtl:-scale-x-100" />
        </span>
      )}
    </div>
  );

  if (entry.url) {
    return (
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[12px]"
      >
        {innerContent}
      </a>
    );
  }

  return <div>{innerContent}</div>;
}
