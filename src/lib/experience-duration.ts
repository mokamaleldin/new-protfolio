export const CAREER_START_DATE = '2021-09-30';

/**
 * Calculates the exact completed whole years between a start date (defaulting to
 * September 30, 2021) and a reference date.
 * Does NOT blindly subtract calendar years; accounts for month and day boundaries.
 */
export function getCompletedYearsSince(
  startIso: string = CAREER_START_DATE,
  referenceDate: Date = new Date()
): number {
  const [startYear, startMonth, startDay] = startIso.split('-').map(Number);

  const refYear = referenceDate.getUTCFullYear();
  const refMonth = referenceDate.getUTCMonth() + 1; // 1-12
  const refDay = referenceDate.getUTCDate();

  let years = refYear - startYear;

  if (
    refMonth < startMonth ||
    (refMonth === startMonth && refDay < startDay)
  ) {
    years -= 1;
  }

  return Math.max(0, years);
}

/**
 * Formats the dynamic experience stat with a trailing plus (e.g. "5+").
 */
export function getFormattedExperienceYears(
  startIso: string = CAREER_START_DATE,
  referenceDate: Date = new Date()
): string {
  const years = getCompletedYearsSince(startIso, referenceDate);
  return `${years}+`;
}
