import React from 'react';
import type { Metadata } from 'next';
import {
  Poppins,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/data/site-config';
import { SiteShell } from '@/components/layout/SiteShell';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700', '800'],
  variable: '--font-alexandria',
  display: 'swap',
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fallbackBase = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const title = siteConfig.seo.title[locale];
  const description = siteConfig.seo.description[locale];

  return {
    metadataBase: new URL(siteUrl || fallbackBase),
    title: {
      default: title,
      template: `%s | ${siteConfig.owner.name[locale]}`,
    },
    description,
    alternates: {
      ...(siteUrl ? { canonical: `/${locale}` } : {}),
      languages: {
        en: '/en',
        ar: '/ar',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_EG'],
      title,
      description,
      siteName: siteConfig.owner.name[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  setRequestLocale(typedLocale);
  const messages = await getMessages();

  return (
    <html
      lang={typedLocale}
      dir={typedLocale === 'ar' ? 'rtl' : 'ltr'}
      className={`${poppins.variable} ${alexandria.variable} ${ibmArabic.variable}`}
    >
      <body>
        <PersonJsonLd />
        <NextIntlClientProvider messages={messages}>
          <SiteShell locale={typedLocale}>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
