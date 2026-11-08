import React from 'react';
import type { Locale } from '@/i18n/routing';
import { FloatingNavigation } from './FloatingNavigation';
import { ProfileCard } from './ProfileCard';
import { Footer } from './Footer';

interface SiteShellProps {
  locale: Locale;
  children: React.ReactNode;
}

/**
 * Core Sawad two-column desktop composition:
 * - Centered container max-width ~1100px
 * - Top floating navigation pill
 * - Left sticky white profile card (~320px) on desktop, stacked on mobile (<810px)
 * - Right scrolling content column (~696px)
 */
export function SiteShell({ locale, children }: SiteShellProps) {
  return (
    <div className="min-h-dvh bg-[#151312] text-white">
      <FloatingNavigation locale={locale} />

      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[28px] pt-[96px] md:pt-[116px] pb-[40px]">
        <div className="flex flex-col md:flex-row md:items-start gap-[48px] lg:gap-[72px]">
          <ProfileCard locale={locale} />

          <main className="min-w-0 flex-1 max-w-[696px] page-transition-enter">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
