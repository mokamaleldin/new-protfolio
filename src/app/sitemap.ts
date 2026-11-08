import type { MetadataRoute } from 'next';
import { publishedProjects } from '@/data/projects';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://mokamaleldin.com';

  const staticPaths = ['', '/projects', '/approach', '/experience', '/contact'];

  const staticEntries = routing.locales.flatMap((locale) =>
    staticPaths.map((p) => ({
      url: `${baseUrl}/${locale}${p}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${p}`,
          ar: `${baseUrl}/ar${p}`,
        },
      },
    }))
  );

  const projectEntries = routing.locales.flatMap((locale) =>
    publishedProjects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/projects/${project.slug}`,
          ar: `${baseUrl}/ar/projects/${project.slug}`,
        },
      },
    }))
  );

  return [...staticEntries, ...projectEntries];
}
