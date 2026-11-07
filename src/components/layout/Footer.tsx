import React from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/data/site-config';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-[90px] pb-[60px] pt-[30px] text-center text-[13px] text-[#998F8F]">
      <p>
        © {new Date().getUTCFullYear()}{' '}
        <span className="font-medium text-[#F46C38]">{t('builtBy')}</span>
        {' · '}
        <span>{t('role')}</span>
      </p>
      <p className="mt-1.5 text-[11px] text-[#998F8F]/60">
        <a
          href={`mailto:${siteConfig.email}`}
          className=" transition-colors hover:text-[#F46C38]"
        >
          {siteConfig.email}
        </a>
        {' · '}
        <span>{t('templateCredit')}</span>
      </p>
    </footer>
  );
}
