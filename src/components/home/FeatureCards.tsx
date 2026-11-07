'use client';

import React from 'react';
import { Layers, LayoutPanelTop, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SAWAD_EASE, SAWAD_SPRING } from '@/components/motion/Reveal';

export function FeatureCards() {
  const t = useTranslations('featureCards');

  return (
    <section className="mt-[46px] grid grid-cols-1 sm:grid-cols-12 gap-[20px]">
      {/* Card A — Orange: Systems Analysis, Solution Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.52, ease: SAWAD_EASE }}
        className="sm:col-span-5"
      >
        <Link
          href="/experience#approach"
          aria-label={t('cardA.aria')}
          className="group relative flex min-h-[196px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#F46C38] p-[22px] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Sawad organic curve background SVG */}
          <svg
            aria-hidden="true"
            viewBox="0 0 280 200"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
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
            <Layers className="h-[26px] w-[26px] text-white" strokeWidth={1.9} />
          </div>

          <div className="relative z-10 mt-[24px] flex items-end justify-between gap-3">
            <h2 className="font-display text-[17px] lg:text-[18px] font-bold uppercase leading-[1.22] tracking-[-0.02em] text-white">
              <span className="block">{t('cardA.line1')}</span>
              <span className="block">{t('cardA.line2')}</span>
            </h2>

            <motion.span
              whileHover={{ x: 3 }}
              transition={SAWAD_SPRING}
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-[#F46C38]"
            >
              <ArrowRight className="h-[15px] w-[15px] rtl:-scale-x-100" />
            </motion.span>
          </div>
        </Link>
      </motion.div>

      {/* Card B — Lime Green: Media Technology, AI Automation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: SAWAD_EASE }}
        className="sm:col-span-7"
      >
        <Link
          href="/projects"
          aria-label={t('cardB.aria')}
          className="group relative flex min-h-[196px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#C5FF41] p-[22px] text-[#121212] transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Sawad geometric zigzag line pattern in exact rgba(108,227,182,0.5) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 380 200"
            fill="none"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              className="h-[26px] w-[26px] text-[#121212]"
              strokeWidth={1.9}
            />
          </div>

          <div className="relative z-10 mt-[24px] flex items-end justify-between gap-3">
            <h2 className="font-display text-[17px] lg:text-[18px] font-bold uppercase leading-[1.22] tracking-[-0.02em] text-[#121212]">
              <span className="block">{t('cardB.line1')}</span>
              <span className="block">{t('cardB.line2')}</span>
            </h2>

            <motion.span
              whileHover={{ x: 3 }}
              transition={SAWAD_SPRING}
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] border border-[#121212]/60 text-[#121212] transition-colors group-hover:bg-[#121212] group-hover:text-[#C5FF41]"
            >
              <ArrowRight className="h-[15px] w-[15px] rtl:-scale-x-100" />
            </motion.span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
