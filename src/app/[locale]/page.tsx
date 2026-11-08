import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Hero } from '@/components/home/Hero';
import { FeatureCards } from '@/components/home/FeatureCards';
import { RecentProjects } from '@/components/home/RecentProjects';
import { ExperiencePreview } from '@/components/home/ExperiencePreview';
import { RecommendationsPreview } from '@/components/home/RecommendationsPreview';
import { ContactSection } from '@/components/sections/ContactSection';

export const revalidate = 86400;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);

  return (
    <div>
      <Hero locale={locale} />
      <FeatureCards />
      <RecentProjects locale={locale} />
      <ExperiencePreview locale={locale} />
      <RecommendationsPreview locale={locale} />
      <ContactSection />
    </div>
  );
}
