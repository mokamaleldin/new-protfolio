'use client';

import React from 'react';
import { usePathname } from '@/i18n/navigation';
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
 * - Left sticky white profile card (~320px) on desktop across all pages
 * - Mobile (<md / <810px): ProfileCard shown ONLY on Home page ('/'). On other pages, starts immediately with content.
 * - Right scrolling content column (~696px)
 */
export function SiteShell({ locale, children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';

  return (
    <div className="min-h-dvh bg-[#151312] text-white">
      <FloatingNavigation locale={locale} />

      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[28px] pt-[84px] sm:pt-[96px] md:pt-[116px] pb-[40px]">
        <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-[48px] lg:gap-[72px]">
          {/* Profile card: On mobile, visible on Home ONLY; on desktop, stays visible on all pages */}
          <div
            className={
              isHome
                ? 'block mb-[32px] md:mb-0 shrink-0 w-full md:w-auto'
                : 'hidden md:block shrink-0 w-full md:w-auto'
            }
          >
            <ProfileCard locale={locale} />
          </div>

          <main className="min-w-0 flex-1 max-w-[696px]">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
