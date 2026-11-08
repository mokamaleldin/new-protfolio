import React from 'react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { ProcessStrip } from '@/components/home/ProcessStrip';
import { ContactCtaBanner } from '@/components/sections/ContactCtaBanner';

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations({ locale, namespace: 'sections.approach' });

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/approach`,
      languages: {
        en: '/en/approach',
        ar: '/ar/approach',
        'x-default': '/en/approach',
      },
    },
  };
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'sections.approach' });

  return (
    <div>
      <ProcessStrip locale={locale} asPageHeading />
      <ContactCtaBanner
        heading={t('ctaTitle')}
        description={t('ctaDescription')}
        buttonText={t('ctaButton')}
      />
    </div>
  );
}
