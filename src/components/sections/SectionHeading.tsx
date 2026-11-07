import React from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  line1: string;
  line2: string;
  as?: 'h1' | 'h2';
  size?: 'hero' | 'section';
  className?: string;
}

/**
 * Sawad's signature oversized two-line uppercase display heading:
 * First line in crisp white (#FFFFFF), second line in muted dark gray (#353334).
 */
export function SectionHeading({
  line1,
  line2,
  as: Tag = 'h2',
  size = 'section',
  className,
}: SectionHeadingProps) {
  const sizeClasses =
    size === 'hero'
      ? 'text-[48px] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[94px]'
      : 'text-[40px] sm:text-[48px] md:text-[62px] lg:text-[72px] xl:text-[80px]';

  return (
    <Tag
      className={cn(
        'font-display font-bold uppercase tracking-[-0.04em] leading-[1.02] select-none',
        sizeClasses,
        className
      )}
    >
      <span className="block text-white">{line1}</span>
      <span className="block text-[#353334]">{line2}</span>
    </Tag>
  );
}
