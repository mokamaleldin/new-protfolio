'use client';

import React, { useState } from 'react';
import {
  House,
  Folder,
  BriefcaseBusiness,
  Wrench,
  Mail,
} from 'lucide-react';
import { motion } from 'motion/react';
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items = [
    {
      id: 'home',
      href: '/',
      label: t('home'),
      icon: House,
      isActive: pathname === '/',
    },
    {
      id: 'projects',
      href: '/projects',
      label: t('projects'),
      icon: Folder,
      isActive: pathname.startsWith('/projects'),
    },
    {
      id: 'experience',
      href: '/experience',
      label: t('experience'),
      icon: BriefcaseBusiness,
      isActive: pathname.startsWith('/experience'),
    },
    {
      id: 'tools',
      href: '/tools',
      label: t('tools'),
      icon: Wrench,
      isActive: pathname.startsWith('/tools'),
    },
    {
      id: 'contact',
      href: '/contact',
      label: t('contact'),
      icon: Mail,
      isActive: pathname.startsWith('/contact'),
    },
  ];

  const targetLocale: Locale = locale === 'en' ? 'ar' : 'en';

  return (
    <header className="fixed top-[20px] inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label={t('ariaLabel')}
        className="pointer-events-auto flex items-center gap-[8px] sm:gap-[10px] rounded-[12px] bg-[#1F1C1B]/95 px-[10px] py-[6px] border border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={item.isActive ? 'page' : undefined}
                className={cn(
                  'relative flex h-[36px] w-[36px] items-center justify-center rounded-[8px] transition-colors duration-200',
                  item.isActive
                    ? 'text-white'
                    : 'text-white/75 hover:text-[#F46C38]'
                )}
              >
                {item.isActive && (
                  <motion.span
                    layoutId="sawad-nav-active"
                    transition={SAWAD_SPRING}
                    className="absolute inset-0 rounded-[8px] bg-[#F46C38]"
                  />
                )}
                <Icon
                  className="relative z-10 h-[17px] w-[17px]"
                  strokeWidth={1.85}
                />
              </Link>

              {/* Sawad compact tooltip below icon */}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.16 }}
                  role="tooltip"
                  className="pointer-events-none absolute top-[44px] whitespace-nowrap rounded-[6px] bg-[#282423] px-2.5 py-1 text-[11px] font-medium text-white shadow-md border border-white/10"
                >
                  {item.label}
                </motion.span>
              )}
            </div>
          );
        })}

        <span
          aria-hidden="true"
          className="mx-0.5 h-[18px] w-[1px] bg-white/10"
        />

        {/* Integrated subtle EN / AR switcher */}
        <Link
          href={pathname || '/'}
          locale={targetLocale}
          aria-label={t('switchLanguageAria')}
          className="flex h-[36px] min-w-[36px] items-center justify-center rounded-[8px] px-2 text-[11px] font-semibold tracking-tight text-white/80 transition-colors hover:bg-white/[0.06] hover:text-[#F46C38]"
        >
          {t('switchLanguage')}
        </Link>
      </nav>
    </header>
  );
}
