import React from 'react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { publishedProjects } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { ContactCtaBanner } from '@/components/sections/ContactCtaBanner';
import { Reveal } from '@/components/motion/Reveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('projects'),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        en: '/en/projects',
        ar: '/ar/projects',
        'x-default': '/en/projects',
      },
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'sections.recentProjects',
  });

  return (
    <div className="pt-1">
      <Reveal>
        <SectionHeading
          as="h1"
          size="hero"
          line1={t('line1')}
          line2={t('line2')}
        />
      </Reveal>

      <div className="mt-[32px] flex flex-col gap-[16px]">
        {publishedProjects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.05}>
            <ProjectRow project={project} locale={locale} />
          </Reveal>
        ))}
      </div>

      <ContactCtaBanner />
    </div>
  );
}
