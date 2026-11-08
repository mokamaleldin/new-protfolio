'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { ProjectCoverFallback } from './ProjectCoverFallback';

interface ProjectRowProps {
  project: Project;
  locale: Locale;
}

export function ProjectRow({ project, locale }: ProjectRowProps) {
  const t = useTranslations('sections.recentProjects');
  const title = project.title[locale];
  const category = project.category[locale];
  const summary = project.summary[locale];
  const coverAlt = project.coverAlt[locale];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] sm:gap-[22px] rounded-[14px] border border-white/[0.06] bg-[#1A1716]/75 p-[14px] sm:p-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F46C38]/40 hover:bg-[#1E1B1A]"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-[14px] sm:gap-[20px] min-w-0 flex-1">
        {/* Unified 16:10 Project Cover */}
        <div className="w-full sm:w-[164px] md:w-[176px] shrink-0 overflow-hidden rounded-[10px]">
          <ProjectCoverFallback
            theme={project.coverTheme}
            alt={coverAlt}
            size="thumb"
            className="transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Project Title, Category & 2-sentence Summary */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[19px] sm:text-[21px] font-semibold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#F46C38]">
              {title}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-medium text-[#F46C38]">
              <span>{t('viewCaseStudy')}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              />
            </span>
          </div>

          <p className="mt-[3px] text-[13px] font-medium text-[#F46C38]/90">
            {category}
          </p>

          <p className="mt-[7px] line-clamp-2 text-[13px] sm:text-[14px] leading-[1.52] text-[#998F8F]">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
