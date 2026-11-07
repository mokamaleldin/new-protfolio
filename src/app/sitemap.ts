import type { MetadataRoute } from 'next';
import { publishedProjects } from '@/data/projects';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://mokamaleldin.vercel.app';

  const staticPaths = ['', '/projects', '/experience', '/tools', '/contact'];

  const staticEntries = routing.locales.flatMap((locale) =>
    staticPaths.map((p) => ({
      url: `${baseUrl}/${locale}${p}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1.0 : 0.8,
    }))
  );

  const projectEntries = routing.locales.flatMap((locale) =>
    publishedProjects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...projectEntries];
}
