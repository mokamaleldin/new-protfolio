import React from 'react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-[84px] border-t border-white/[0.06] pb-[48px] pt-[28px] text-center text-[13px] text-[#998F8F]">
      <p>
        © {new Date().getUTCFullYear()}{' '}
        <span className="font-medium text-white/90">{t('builtBy')}</span>
        {' · '}
        <span>{t('role')}</span>
      </p>
    </footer>
  );
}
