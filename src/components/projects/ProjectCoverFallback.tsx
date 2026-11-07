import React from 'react';
import { cn } from '@/lib/cn';

interface ProjectCoverFallbackProps {
  shortTitle: string;
  title: string;
  order: number;
  size?: 'thumb' | 'hero';
  className?: string;
}

const ACCENT_STYLES = [
  'from-[#F46C38]/25 via-[#281E1A] to-[#1A1716] border-[#F46C38]/35 text-[#F46C38]',
  'from-[#C5FF41]/20 via-[#1E2418] to-[#171915] border-[#C5FF41]/30 text-[#C5FF41]',
  'from-white/15 via-[#222020] to-[#181616] border-white/15 text-white',
];

export function ProjectCoverFallback({
  shortTitle,
  title,
  order,
  size = 'thumb',
  className,
}: ProjectCoverFallbackProps) {
  const accent = ACCENT_STYLES[(order - 1) % ACCENT_STYLES.length];

  if (size === 'hero') {
    return (
      <div
        className={cn(
          'relative flex aspect-[16/9] w-full flex-col justify-between overflow-hidden rounded-[14px] border bg-gradient-to-br p-6 sm:p-10',
          accent,
          className
        )}
      >
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/75">
            0{order}
          </span>
          <span className="font-display text-[13px] font-bold uppercase tracking-widest opacity-80">
            {shortTitle}
          </span>
        </div>
        <div>
          <p className="font-display text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] text-white">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[8px] border bg-gradient-to-br select-none',
        accent,
        className
      )}
    >
      <span className="font-display text-[22px] font-extrabold tracking-[-0.04em]">
        {shortTitle}
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-white/55">
        0{order}
      </span>
    </div>
  );
}
