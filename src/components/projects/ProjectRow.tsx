'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
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

  const primaryHref = project.liveUrl || `/projects/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  return (
    <article className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] sm:gap-[22px] rounded-[14px] border border-white/[0.06] bg-[#1A1716]/75 p-[14px] sm:p-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F46C38]/40 hover:bg-[#1E1B1A]">
      <div className="flex flex-col sm:flex-row sm:items-center gap-[14px] sm:gap-[20px] min-w-0 flex-1">
        {/* Unified 16:10 Project Cover — Clicking opens live site directly */}
        <a
          href={primaryHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          aria-label={
            isExternal
              ? `${title} - ${t('visitSite')}`
              : `${title} - ${t('projectDetails')}`
          }
          className="w-full sm:w-[164px] md:w-[176px] shrink-0 overflow-hidden rounded-[10px] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F46C38]"
        >
          <ProjectCoverFallback
            theme={project.coverTheme}
            alt={coverAlt}
            size="thumb"
            className="transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Project Title, Category, Summary & Actions */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            {/* Title opens live site directly */}
            <a
              href={primaryHref}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="min-w-0 flex-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F46C38]"
            >
              <h3 className="font-display text-[19px] sm:text-[21px] font-semibold tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-[#F46C38] flex items-center gap-1.5 flex-wrap">
                <span>{title}</span>
                {isExternal && (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-[15px] w-[15px] text-[#F46C38] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  />
                )}
              </h3>
            </a>

            {/* Direct Visit Website button when live */}
            {isExternal && (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-[6px] border border-[#F46C38]/30 bg-[#F46C38]/10 px-2.5 py-1 text-[12px] font-medium text-[#F46C38] transition-colors duration-200 hover:bg-[#F46C38] hover:text-white"
              >
                <span>{t('visitSite')}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-[13px] w-[13px] rtl:-scale-x-100"
                />
              </a>
            )}
          </div>

          <p className="mt-[3px] text-[13px] font-medium text-[#F46C38]/90">
            {category}
          </p>

          <p className="mt-[7px] line-clamp-2 text-[13px] sm:text-[14px] leading-[1.52] text-[#998F8F]">
            {summary}
          </p>

          {/* Secondary Action: Case Study / Project Details */}
          <div className="mt-[10px] flex items-center justify-between gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-medium text-white/75 transition-colors duration-200 hover:text-[#F46C38] focus-visible:text-[#F46C38]"
            >
              <span>{t('projectDetails')}</span>
              <ArrowRight
                aria-hidden="true"
                className="h-[13px] w-[13px] transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              />
            </Link>

            {/* Mobile-only Visit Website link */}
            {isExternal && (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center gap-1 text-[12px] font-medium text-[#F46C38]"
              >
                <span>{t('visitSite')}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-[13px] w-[13px] rtl:-scale-x-100"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
