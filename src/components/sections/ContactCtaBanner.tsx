import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/motion/Reveal';

interface ContactCtaBannerProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export function ContactCtaBanner({
  heading,
  description,
  buttonText,
}: ContactCtaBannerProps) {
  const t = useTranslations('sections.ctaBanner');

  return (
    <Reveal className="mt-[72px]">
      <section
        aria-label={heading || t('heading')}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-[14px] border border-white/[0.08] bg-[#1C1918] p-[24px] sm:p-[28px]"
      >
        <div className="max-w-[440px]">
          <h2 className="font-display text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] text-white">
            {heading || t('heading')}
          </h2>
          <p className="mt-[6px] text-[14px] leading-[1.55] text-[#998F8F]">
            {description || t('description')}
          </p>
        </div>

        <Link
          href="/contact"
          className="group btn-press btn-press-primary inline-flex h-[44px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#F46C38] px-5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#e35c27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F46C38]"
        >
          <span>{buttonText || t('button')}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5" />
        </Link>
      </section>
    </Reveal>
  );
}
