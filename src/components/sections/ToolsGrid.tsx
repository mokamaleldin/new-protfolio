import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  homeFeaturedTools,
  toolGroups,
  tools,
  type ToolItem,
} from '@/data/tools';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';

interface ToolsGridProps {
  locale: Locale;
  mode?: 'home' | 'full';
}

function ToolTile({ item, locale }: { item: ToolItem; locale: Locale }) {
  return (
    <div className="group flex items-center gap-[16px] rounded-[12px] p-[10px] -mx-[10px] transition-colors duration-200 hover:bg-white/[0.04]">
      {/* Sawad 48x48 white rounded icon square */}
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-white text-[#121212] font-display text-[15px] font-extrabold tracking-[-0.04em] shadow-sm transition-transform duration-200 group-hover:scale-105">
        {item.badge}
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-white truncate">
          {item.name}
        </h3>
        <p className="mt-0.5 text-[13px] text-[#998F8F] truncate">
          {item.subtitle[locale]}
        </p>
      </div>
    </div>
  );
}

export function ToolsGrid({ locale, mode = 'home' }: ToolsGridProps) {
  const t = useTranslations('sections.tools');

  return (
    <section
      aria-labelledby="tools-heading"
      className={mode === 'home' ? 'mt-[96px]' : 'pt-1'}
    >
      <Reveal>
        <div id="tools-heading">
          <SectionHeading
            as={mode === 'full' ? 'h1' : 'h2'}
            size={mode === 'full' ? 'hero' : 'section'}
            line1={t('line1')}
            line2={t('line2')}
          />
        </div>
      </Reveal>

      {mode === 'home' ? (
        <>
          <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 gap-x-[28px] gap-y-[18px]">
            {homeFeaturedTools.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.04}>
                <ToolTile item={item} locale={locale} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-[24px]">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors hover:text-white"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </Reveal>
        </>
      ) : (
        <div className="mt-[38px] space-y-[42px]">
          {toolGroups.map((group) => {
            const groupTools = tools.filter((tool) => tool.group === group.id);
            return (
              <div key={group.id}>
                <Reveal>
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#998F8F]/80 mb-[16px]">
                    {group.title[locale]}
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px] gap-y-[16px]">
                  {groupTools.map((item, idx) => (
                    <Reveal key={item.id} delay={idx * 0.03}>
                      <ToolTile item={item} locale={locale} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
