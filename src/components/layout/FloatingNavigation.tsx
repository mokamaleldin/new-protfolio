'use client';

import React, { useEffect, useState } from 'react';
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
import { SAWAD_SPRING } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

interface FloatingNavigationProps {
  locale: Locale;
}

export function FloatingNavigation({ locale }: FloatingNavigationProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [optimisticPathname, setOptimisticPathname] = useState<string | null>(null);

  useEffect(() => {
    setOptimisticPathname(null);
  }, [pathname]);

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
        setActiveTooltipId(null);
      }
    };

    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [activeTooltipId]);

  return (
    <header className="fixed top-[16px] sm:top-[20px] inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav
        aria-label={t('ariaLabel')}
        className="pointer-events-auto flex items-center gap-[6px] sm:gap-[10px] rounded-[12px] bg-[#1F1C1B]/95 px-[10px] py-[6px] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const showTooltip = activeTooltipId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setActiveTooltipId(item.id)}
              onMouseLeave={() =>
                setActiveTooltipId((prev) => (prev === item.id ? null : prev))
              }
            >
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={item.isActive ? 'page' : undefined}
                onClick={() => setOptimisticPathname(item.href)}
                onFocus={() => setActiveTooltipId(item.id)}
                onBlur={() =>
                  setActiveTooltipId((prev) => (prev === item.id ? null : prev))
                }
                className={cn(
                  'relative flex h-[36px] w-[36px] items-center justify-center rounded-[8px] transition-colors duration-200',
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
                      transition={SAWAD_SPRING}
                      className="absolute inset-0 rounded-[8px] bg-[#F46C38]"
                    />
                  ))}
                <Icon
                  aria-hidden="true"
                  className="relative z-10 h-[17px] w-[17px]"
                  strokeWidth={1.9}
                />
              </Link>

              {showTooltip && (
                <span
                  role="tooltip"
                  className="absolute top-[42px] pt-[4px] z-20"
                >
                  <span className="block whitespace-nowrap rounded-[6px] border border-white/10 bg-[#282423] px-2.5 py-1 text-[11px] font-medium text-white shadow-md">
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
          onMouseEnter={() => setActiveTooltipId('lang')}
          onMouseLeave={() =>
            setActiveTooltipId((prev) => (prev === 'lang' ? null : prev))
          }
        >
          <Link
            href={pathname || '/'}
            locale={targetLocale}
            aria-label={t('switchLanguageAria')}
            onFocus={() => setActiveTooltipId('lang')}
            onBlur={() =>
              setActiveTooltipId((prev) => (prev === 'lang' ? null : prev))
            }
            className="flex h-[36px] min-w-[36px] items-center justify-center rounded-[8px] px-2 font-semibold text-white/85 transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#F46C38]"
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
            <span role="tooltip" className="absolute top-[42px] pt-[4px] z-20">
              <span className="block whitespace-nowrap rounded-[6px] border border-white/10 bg-[#282423] px-2.5 py-1 text-[11px] font-medium text-white shadow-md">
                {t('switchLanguageTooltip')}
              </span>
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
