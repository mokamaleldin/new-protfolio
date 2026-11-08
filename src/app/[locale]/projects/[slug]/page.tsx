import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound, permanentRedirect } from 'next/navigation';
import { getProjectBySlug, publishedProjects } from '@/data/projects';
import { routing, type Locale } from '@/i18n/routing';
import { ProjectDetail } from '@/components/projects/ProjectDetail';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    publishedProjects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title[locale],
    description: project.summary[locale],
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        ar: `/ar/projects/${slug}`,
        'x-default': `/en/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);

  if (slug === 'skillhours') {
    permanentRedirect(`/${locale}/projects`);
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} locale={locale} />;
}
