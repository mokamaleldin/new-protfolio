import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ventures } from '@/data/ventures';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface VenturesProps {
  locale: Locale;
}

export function Ventures({ locale }: VenturesProps) {
  const t = useTranslations('sections.ventures');

  return (
    <section aria-labelledby="ventures-heading" className="mt-[96px]">
      <Reveal>
        <div id="ventures-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        {ventures.map((venture, idx) => (
          <Reveal key={venture.id} delay={idx * 0.06}>
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-[12px] border border-white/[0.06] bg-[#1C1918] p-[22px] transition-colors hover:border-[#F46C38]/50"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-[20px] font-bold text-white transition-colors group-hover:text-[#F46C38]">
                      {venture.name[locale]}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-medium text-[#F46C38]/90">
                      {venture.role[locale]} · {venture.category[locale]}
                    </p>
                  </div>
                  <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-[#F46C38] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </div>

                <p className="mt-[12px] text-[13px] leading-[1.55] text-[#998F8F]">
                  {venture.description[locale]}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
