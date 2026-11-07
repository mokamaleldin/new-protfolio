import React from 'react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { ToolsGrid } from '@/components/sections/ToolsGrid';
import { ContactSection } from '@/components/sections/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('tools'),
    alternates: {
      languages: {
        en: '/en/tools',
        ar: '/ar/tools',
      },
    },
  };
}

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);

  return (
    <div>
      <ToolsGrid locale={locale} mode="full" />
      <ContactSection />
    </div>
  );
}
