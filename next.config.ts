import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/en/tools',
        destination: '/en/approach',
        permanent: true,
      },
      {
        source: '/ar/tools',
        destination: '/ar/approach',
        permanent: true,
      },
      {
        source: '/tools',
        destination: '/en/approach',
        permanent: true,
      },
      {
        source: '/en/projects/skillhours',
        destination: '/en/projects',
        permanent: true,
      },
      {
        source: '/ar/projects/skillhours',
        destination: '/ar/projects',
        permanent: true,
      },
      {
        source: '/projects/skillhours',
        destination: '/en/projects',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
