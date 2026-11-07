import { describe, expect, it } from 'vitest';
import {
  CAREER_START_DATE,
  getCompletedYearsSince,
  getFormattedExperienceYears,
} from './experience-duration';

describe('getCompletedYearsSince', () => {
  it('calculates 4 completed years on September 29, 2026 (one day before anniversary)', () => {
    const d = new Date('2026-09-29T12:00:00Z');
    expect(getCompletedYearsSince(CAREER_START_DATE, d)).toBe(4);
    expect(getFormattedExperienceYears(CAREER_START_DATE, d)).toBe('4+');
  });

  it('calculates 5 completed years on September 30, 2026 (exact anniversary)', () => {
    const d = new Date('2026-09-30T00:00:00Z');
    expect(getCompletedYearsSince(CAREER_START_DATE, d)).toBe(5);
    expect(getFormattedExperienceYears(CAREER_START_DATE, d)).toBe('5+');
  });

  it('calculates 5 completed years in November 2026', () => {
    const d = new Date('2026-11-07T12:00:00Z');
    expect(getCompletedYearsSince(CAREER_START_DATE, d)).toBe(5);
    expect(getFormattedExperienceYears(CAREER_START_DATE, d)).toBe('5+');
  });

  it('calculates 5 completed years on September 29, 2027', () => {
    const d = new Date('2027-09-29T23:59:59Z');
    expect(getCompletedYearsSince(CAREER_START_DATE, d)).toBe(5);
  });

  it('calculates 6 completed years on September 30, 2027', () => {
    const d = new Date('2027-09-30T00:00:00Z');
    expect(getCompletedYearsSince(CAREER_START_DATE, d)).toBe(6);
  });
});
