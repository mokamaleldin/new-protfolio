import type { Locale } from '@/i18n/routing';

export function formatYearMonth(isoYearMonth: string, locale: Locale): string {
  const parts = isoYearMonth.split('-').map(Number);
  const year = parts[0];
  const month = parts[1] || 1;
  const date = new Date(Date.UTC(year, month - 1, 1));

  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatDateRange(
  start: string,
  end: string | undefined,
  locale: Locale,
  presentLabel: string
): string {
  const startFormatted = formatYearMonth(start, locale);
  const endFormatted = end ? formatYearMonth(end, locale) : presentLabel;
  return `${startFormatted} – ${endFormatted}`;
}
