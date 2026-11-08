'use client';

import React from 'react';
import {
  House,
  Folder,
  Compass,
  BriefcaseBusiness,
  Mail,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

interface FloatingNavigationProps {
  locale: Locale;
}

export function FloatingNavigation({ locale }: FloatingNavigationProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();

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
      id: 'approach',
      href: '/approach',
      label: t('approach'),
      icon: Compass,
      isActive: pathname.startsWith('/approach'),
    },
    {
      id: 'experience',
      href: '/experience',
      label: t('experience'),
      icon: BriefcaseBusiness,
      isActive: pathname.startsWith('/experience'),
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
    <header className="fixed top-[16px] sm:top-[20px] inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav
        aria-label={t('ariaLabel')}
        className="pointer-events-auto flex max-w-full items-center gap-[4px] sm:gap-[6px] overflow-x-auto rounded-[12px] bg-[#1F1C1B]/95 px-[8px] sm:px-[10px] py-[6px] border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={item.isActive ? 'page' : undefined}
              className={cn(
                'relative flex h-[36px] shrink-0 items-center gap-1.5 rounded-[8px] px-2.5 sm:px-3 text-[12px] sm:text-[13px] font-medium transition-colors duration-200',
                item.isActive
                  ? 'bg-[#F46C38] text-white'
                  : 'text-white/80 hover:bg-white/[0.05] hover:text-[#F46C38]'
              )}
            >
              <Icon
                aria-hidden="true"
                className="h-[15px] w-[15px] shrink-0"
                strokeWidth={1.9}
              />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}

        <span
          aria-hidden="true"
          className="mx-0.5 h-[18px] w-[1px] shrink-0 bg-white/10"
        />

        {/* Manual EN / AR language switcher preserving current path */}
        <Link
          href={pathname || '/'}
          locale={targetLocale}
          aria-label={t('switchLanguageAria')}
          className="flex h-[36px] shrink-0 items-center justify-center rounded-[8px] px-2.5 text-[12px] font-semibold tracking-tight text-white/85 transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#F46C38]"
        >
          {t('switchLanguage')}
        </Link>
      </nav>
    </header>
  );
}
