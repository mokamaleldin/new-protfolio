'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import {
  specializationStages,
  type SpecializationStage,
} from '@/data/experience';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

interface ProcessStripProps {
  locale: Locale;
  asPageHeading?: boolean;
}

interface StageCardProps {
  stage: SpecializationStage;
  locale: Locale;
  isExpanded: boolean;
  onToggle: (stageNumber: string) => void;
  onExpandForMatch: (stageNumber: string) => void;
  labels: {
    outcome: string;
    inPractice: string;
    example: string;
    showDetails: string;
    hideDetails: string;
  };
}

function StageCard({
  stage,
  locale,
  isExpanded,
  onToggle,
  onExpandForMatch,
  labels,
}: StageCardProps) {
  const uid = useId();
  const panelId = `stage-panel-${stage.number}-${uid}`;
  const buttonId = `stage-trigger-${stage.number}-${uid}`;
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const handleBeforeMatch = () => {
      onExpandForMatch(stage.number);
    };
    el.addEventListener('beforematch', handleBeforeMatch);
    return () => el.removeEventListener('beforematch', handleBeforeMatch);
  }, [onExpandForMatch, stage.number]);

  return (
    <article
      className={cn(
        'rounded-[14px] border transition-colors duration-200',
        isExpanded
          ? 'border-[#F46C38]/40 bg-[#1F1B1A]'
          : 'border-white/[0.07] bg-[#1C1918] hover:border-white/[0.16]'
      )}
    >
      <div className="p-[20px] sm:p-[22px]">
        <h2>
          <button
            id={buttonId}
            type="button"
            aria-expanded={isExpanded}
            aria-controls={panelId}
            onClick={() => onToggle(stage.number)}
            className="group flex w-full items-start justify-between gap-4 text-start cursor-pointer"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex h-[24px] items-center rounded-[6px] bg-[#F46C38]/12 px-2 font-display text-[12px] font-bold tracking-wider text-[#F46C38]">
                  {stage.number}
                </span>
                <span className="font-display text-[19px] sm:text-[21px] font-bold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#F46C38]">
                  {stage.title[locale]}
                </span>
              </div>

              <p className="mt-[10px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#B8B0B0]">
                {stage.description[locale]}
              </p>

              <p className="mt-[12px] text-[12px] sm:text-[13px] font-normal leading-[1.45] text-white/90">
                <strong className="font-semibold text-[#F46C38]">
                  {labels.outcome}{' '}
                </strong>
                <span>{stage.outcome[locale]}</span>
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[11px] sm:text-[12px] font-medium text-white/80 transition-colors duration-200 group-hover:border-[#F46C38]/45 group-hover:text-white">
              <span className="hidden sm:inline">
                {isExpanded ? labels.hideDetails : labels.showDetails}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  'h-[15px] w-[15px] text-[#F46C38] transition-transform duration-300 ease-out',
                  isExpanded && 'rotate-180'
                )}
              />
            </span>
          </button>
        </h2>

        {/* Outer disclosure wrapper with CSS grid expansion */}
        <div
          ref={panelRef}
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          data-open={isExpanded ? 'true' : 'false'}
          className="approach-stage-panel"
        >
          <div className="approach-stage-inner">
            <div className="mt-[16px] space-y-[14px] border-t border-white/[0.07] pt-[16px]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F46C38]">
                  {labels.inPractice}
                </p>
                <ul className="mt-[8px] space-y-2 ps-4 text-[13px] sm:text-[14px] leading-[1.58] text-[#B8B0B0] list-disc marker:text-[#F46C38]">
                  {stage.highlights.map((item, idx) => (
                    <li key={idx}>{item[locale]}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[10px] border border-white/[0.06] bg-[#161413] p-[14px]">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5FF41]">
                  {labels.example}
                </p>
                <p className="mt-[6px] text-[13px] sm:text-[14px] leading-[1.58] text-white/85">
                  {stage.example[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProcessStrip({
  locale,
  asPageHeading = false,
}: ProcessStripProps) {
  const t = useTranslations('sections.approach');
  const [openStage, setOpenStage] = useState<string | null>('01');

  function handleToggle(stageNumber: string) {
    setOpenStage((prev) => (prev === stageNumber ? null : stageNumber));
  }

  function handleExpandForMatch(stageNumber: string) {
    setOpenStage(stageNumber);
  }

  const labels = {
    outcome: t('outcomeLabel'),
    inPractice: t('inPracticeLabel'),
    example: t('exampleLabel'),
    showDetails: t('showDetails'),
    hideDetails: t('hideDetails'),
  };

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className={asPageHeading ? 'pt-1' : 'mt-[80px] scroll-mt-[90px]'}
    >
      <Reveal>
        <div id="approach-heading">
          <SectionHeading
            as={asPageHeading ? 'h1' : 'h2'}
            size={asPageHeading ? 'hero' : 'section'}
            line1={t('line1')}
            line2={t('line2')}
          />
        </div>
        <p className="mt-[16px] max-w-[600px] text-[15px] sm:text-[16px] leading-[1.64] text-[#B8B0B0]">
          {t('subtitle')}
        </p>
      </Reveal>

      <div className="mt-[28px] flex flex-col gap-[14px]">
        {specializationStages.map((stage, idx) => (
          <Reveal key={stage.number} delay={idx * 0.04}>
            <StageCard
              stage={stage}
              locale={locale}
              isExpanded={openStage === stage.number}
              onToggle={handleToggle}
              onExpandForMatch={handleExpandForMatch}
              labels={labels}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16} className="mt-[24px]">
        <p className="rounded-[10px] border border-white/[0.05] bg-[#181514] px-[18px] py-[14px] text-[13px] sm:text-[14px] leading-[1.58] text-[#998F8F]">
          {t('techNote')}
        </p>
      </Reveal>
    </section>
  );
}
