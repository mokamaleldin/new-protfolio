'use client';

import React from 'react';
import { Layers, LayoutPanelTop, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function FeatureCards() {
  const t = useTranslations('featureCards');

  return (
    <section className="mt-[40px] grid grid-cols-1 sm:grid-cols-12 gap-[18px]">
      {/* Card A — Orange: Systems Analysis & Solution Design -> /approach */}
      <div className="sm:col-span-6">
        <Link
          href="/approach"
          aria-label={t('cardA.aria')}
          className="group relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#F46C38] p-[22px] text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 280 200"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
          >
            <path
              d="M-20 170 C 60 150, 95 95, 130 55 C 165 15, 220 35, 300 20"
              stroke="#B54014"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M-10 210 C 80 185, 145 145, 195 110 C 235 82, 265 92, 310 80"
              stroke="#B54014"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10">
            <Layers className="h-[25px] w-[25px] text-white" strokeWidth={1.9} />
          </div>

          <div className="relative z-10 mt-[20px]">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-[17px] lg:text-[18px] font-bold uppercase leading-[1.22] tracking-[-0.02em] text-white">
                  <span className="block">{t('cardA.line1')}</span>
                  <span className="block">{t('cardA.line2')}</span>
                </h2>
                <p className="mt-[8px] text-[13px] leading-[1.45] text-white/90">
                  {t('cardA.description')}
                </p>
              </div>

              <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[7px] border border-white/60 text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#F46C38] rtl:group-hover:-translate-x-0.5">
                <ArrowRight className="h-[15px] w-[15px] rtl:-scale-x-100" />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Card B — Lime Green: Media Technology & AI Automation -> /projects */}
      <div className="sm:col-span-6">
        <Link
          href="/projects"
          aria-label={t('cardB.aria')}
          className="group relative flex h-full min-h-[210px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#C5FF41] p-[22px] text-[#121212] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 380 200"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <polyline
              points="-10,185 55,15 115,190 190,15 245,175 335,20 390,165"
              stroke="rgba(108, 227, 182, 0.55)"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative z-10">
            <LayoutPanelTop
              className="h-[25px] w-[25px] text-[#121212]"
              strokeWidth={1.9}
            />
          </div>

          <div className="relative z-10 mt-[20px]">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-[17px] lg:text-[18px] font-bold uppercase leading-[1.22] tracking-[-0.02em] text-[#121212]">
                  <span className="block">{t('cardB.line1')}</span>
                  <span className="block">{t('cardB.line2')}</span>
                </h2>
                <p className="mt-[8px] text-[13px] leading-[1.45] text-[#121212]/85">
                  {t('cardB.description')}
                </p>
              </div>

              <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[7px] border border-[#121212]/60 text-[#121212] transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-[#121212] group-hover:text-[#C5FF41] rtl:group-hover:-translate-x-0.5">
                <ArrowRight className="h-[15px] w-[15px] rtl:-scale-x-100" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
