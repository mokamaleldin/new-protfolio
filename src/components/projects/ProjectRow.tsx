'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { ProjectCoverFallback } from './ProjectCoverFallback';

interface ProjectRowProps {
  project: Project;
  locale: Locale;
}

export function ProjectRow({ project, locale }: ProjectRowProps) {
  const title = project.title[locale];
  const category = project.category[locale];
  const summary = project.summary[locale];
  const hasRealThumb =
    project.thumbnail && !project.thumbnail.placeholder;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex items-center justify-between gap-[16px] sm:gap-[22px] rounded-[14px] p-[12px] -mx-[12px] transition-colors duration-200 hover:bg-white/[0.03]"
    >
      <div className="flex items-center gap-[16px] sm:gap-[20px] min-w-0">
        {/* Thumbnail preview matching Sawad ~96-116px square/rounded */}
        <div className="relative h-[84px] w-[84px] sm:h-[104px] sm:w-[104px] shrink-0 overflow-hidden rounded-[10px] bg-[#211E1D] transition-transform duration-300 group-hover:scale-[1.04]">
          {hasRealThumb && project.thumbnail ? (
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt[locale]}
              fill
              sizes="104px"
              className="object-cover"
            />
          ) : (
            <ProjectCoverFallback
              shortTitle={project.shortTitle}
              title={title}
              order={project.order}
              size="thumb"
            />
          )}
        </div>

        {/* Project Title & Category */}
        <div className="min-w-0">
          <h3 className="font-display text-[19px] sm:text-[22px] font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-[#F46C38] truncate">
            {title}
          </h3>
          <p className="mt-[3px] text-[13px] sm:text-[14px] font-normal text-[#998F8F] truncate">
            {category}
          </p>
          <p className="mt-[6px] line-clamp-2 max-w-[460px] text-[13px] leading-[1.45] text-[#998F8F]/80 hidden sm:block">
            {summary}
          </p>
        </div>
      </div>

      {/* Top-right diagonal orange arrow */}
      <span
        aria-hidden="true"
        className="self-start pt-2 pe-1 text-[#F46C38] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1"
      >
        <ArrowUpRight className="h-[18px] w-[18px] rtl:-scale-x-100" />
      </span>
    </Link>
  );
}
