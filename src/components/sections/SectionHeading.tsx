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
      ? 'text-[44px] sm:text-[56px] md:text-[70px] lg:text-[84px] xl:text-[90px] rtl:text-[38px] rtl:sm:text-[48px] rtl:md:text-[58px] rtl:lg:text-[66px]'
      : 'text-[38px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[76px] rtl:text-[34px] rtl:sm:text-[42px] rtl:md:text-[50px] rtl:lg:text-[58px]';

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
