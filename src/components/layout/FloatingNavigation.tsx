'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  House,
  Folder,
  Compass,
  BriefcaseBusiness,
  Mail,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

const NAV_SPRING = {
  type: 'spring' as const,
  stiffness: 550,
  damping: 36,
  mass: 0.8,
};

interface FloatingNavigationProps {
  locale: Locale;
}

export function FloatingNavigation({ locale }: FloatingNavigationProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [optimisticPathname, setOptimisticPathname] = useState<string | null>(null);
  const autoDismissTimerRef = useRef<NodeJS.Timeout | null>(null);

  const hideTooltip = () => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
    setActiveTooltipId(null);
  };

  const showTooltip = (id: string) => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
    setActiveTooltipId(id);
    // Auto-dismiss within 1.1s so it NEVER remains stuck on touch/mobile screens
    autoDismissTimerRef.current = setTimeout(() => {
      setActiveTooltipId(null);
      autoDismissTimerRef.current = null;
    }, 1100);
  };

  useEffect(() => {
    setOptimisticPathname(null);
    hideTooltip();
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
    };
  }, []);

  const currentPath = optimisticPathname ?? pathname;

  const items = [
    {
      id: 'home',
      href: '/',
      label: t('home'),
      icon: House,
      isActive: currentPath === '/',
    },
    {
      id: 'projects',
      href: '/projects',
      label: t('projects'),
      icon: Folder,
      isActive: currentPath.startsWith('/projects'),
    },
    {
      id: 'approach',
      href: '/approach',
      label: t('approach'),
      icon: Compass,
      isActive: currentPath.startsWith('/approach'),
    },
    {
      id: 'experience',
      href: '/experience',
      label: t('experience'),
      icon: BriefcaseBusiness,
      isActive: currentPath.startsWith('/experience'),
    },
    {
      id: 'contact',
      href: '/contact',
      label: t('contact'),
      icon: Mail,
      isActive: currentPath.startsWith('/contact'),
    },
  ];

  const targetLocale: Locale = locale === 'en' ? 'ar' : 'en';

  useEffect(() => {
    if (!activeTooltipId) return;

    const handleWindowKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        hideTooltip();
      }
    };

    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [activeTooltipId]);

  return (
    <header className="fixed top-[16px] sm:top-[20px] inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav
        aria-label={t('ariaLabel')}
        className="pointer-events-auto flex items-center gap-[6px] sm:gap-[10px] rounded-[12px] bg-[#1F1C1B]/95 px-[10px] py-[6px] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md touch-manipulation"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const showTooltipFlag = activeTooltipId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onPointerEnter={(e) => {
                // Desktop hover only — ignore touch taps so tooltips don't get stuck
                if (e.pointerType !== 'touch') {
                  showTooltip(item.id);
                }
              }}
              onPointerLeave={hideTooltip}
            >
              <Link
                href={item.href}
                prefetch={true}
                aria-label={item.label}
                aria-current={item.isActive ? 'page' : undefined}
                onClick={(e) => {
                  hideTooltip();
                  setOptimisticPathname(item.href);
                  (e.currentTarget as HTMLElement).blur();
                }}
                onFocus={(e) => {
                  // Only display tooltip on focus if navigated via keyboard (:focus-visible)
                  if (e.currentTarget.matches(':focus-visible')) {
                    showTooltip(item.id);
                  }
                }}
                onBlur={hideTooltip}
                className={cn(
                  'relative flex h-[36px] w-[36px] items-center justify-center rounded-[8px] transition-colors duration-150 touch-manipulation cursor-pointer',
                  item.isActive
                    ? 'text-white'
                    : 'text-white/75 hover:bg-white/[0.05] hover:text-[#F46C38]'
                )}
              >
                {item.isActive &&
                  (prefersReducedMotion ? (
                    <span className="absolute inset-0 rounded-[8px] bg-[#F46C38]" />
                  ) : (
                    <motion.span
                      layoutId="sawad-nav-active"
                      transition={NAV_SPRING}
                      className="absolute inset-0 rounded-[8px] bg-[#F46C38]"
                    />
                  ))}
                <Icon
                  aria-hidden="true"
                  className="relative z-10 h-[17px] w-[17px]"
                  strokeWidth={1.9}
                />
              </Link>

              {showTooltipFlag && (
                <span
                  role="tooltip"
                  className="pointer-events-none absolute top-[42px] pt-[4px] z-20"
                >
                  <span className="block whitespace-nowrap rounded-[6px] border border-white/10 bg-[#282423] px-2.5 py-1 text-[11px] font-medium text-white shadow-md animate-fade-in-quick">
                    {item.label}
                  </span>
                </span>
              )}
            </div>
          );
        })}

        <span
          aria-hidden="true"
          className="mx-0.5 h-[18px] w-[1px] shrink-0 bg-white/10"
        />

        {/* Compact ع / EN language switcher with full language name on hover/focus */}
        <div
          className="relative flex items-center justify-center"
          onPointerEnter={(e) => {
            if (e.pointerType !== 'touch') {
              showTooltip('lang');
            }
          }}
          onPointerLeave={hideTooltip}
        >
          <Link
            href={pathname || '/'}
            locale={targetLocale}
            prefetch={true}
            aria-label={t('switchLanguageAria')}
            onClick={(e) => {
              hideTooltip();
              (e.currentTarget as HTMLElement).blur();
            }}
            onFocus={(e) => {
              if (e.currentTarget.matches(':focus-visible')) {
                showTooltip('lang');
              }
            }}
            onBlur={hideTooltip}
            className="flex h-[36px] min-w-[36px] items-center justify-center rounded-[8px] px-2 font-semibold text-white/85 transition-colors duration-150 hover:bg-white/[0.06] hover:text-[#F46C38] touch-manipulation cursor-pointer"
          >
            <span
              aria-hidden="true"
              className={
                locale === 'en'
                  ? 'text-[14px] leading-none'
                  : 'text-[11px] tracking-tight'
              }
            >
              {t('switchLanguage')}
            </span>
          </Link>

          {activeTooltipId === 'lang' && (
            <span
              role="tooltip"
              className="pointer-events-none absolute top-[42px] pt-[4px] z-20"
            >
              <span className="block whitespace-nowrap rounded-[6px] border border-white/10 bg-[#282423] px-2.5 py-1 text-[11px] font-medium text-white shadow-md animate-fade-in-quick">
                {t('switchLanguageTooltip')}
              </span>
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
