import React from 'react';
import { siteConfig } from '@/data/site-config';
import { activeSocials } from '@/data/socials';

export function PersonJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.owner.name.en,
    alternateName: siteConfig.owner.name.ar,
    jobTitle: siteConfig.owner.title.en,
    description: siteConfig.seo.description.en,
    email: `mailto:${siteConfig.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: activeSocials.map((s) => s.href).filter(Boolean),
    knowsAbout: [
      'Media Technology',
      'Systems Analysis',
      'Solution Architecture',
      'Workflow Optimization',
      'AI Automation',
      'Software Engineering',
      'Next.js',
      'React',
      'TypeScript',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
