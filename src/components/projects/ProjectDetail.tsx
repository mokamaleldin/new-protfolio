import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { publishedProjects, type Project } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { formatDateRange } from '@/lib/format-date';
import { ProjectCoverFallback } from './ProjectCoverFallback';
import { ProjectRow } from './ProjectRow';
import { ContactCtaBanner } from '@/components/sections/ContactCtaBanner';
import { Reveal } from '@/components/motion/Reveal';

interface ProjectDetailProps {
  project: Project;
  locale: Locale;
}

export function ProjectDetail({ project, locale }: ProjectDetailProps) {
  const t = useTranslations('projectDetail');
  const tExp = useTranslations('sections.experience');

  const title = project.title[locale];
  const category = project.category[locale];
  const summary = project.summary[locale];
  const role = project.role[locale];
  const coverAlt = project.coverAlt[locale];
  const timeline = formatDateRange(
    project.dates.start,
    project.dates.end,
    locale,
    tExp('present')
  );

  const related = publishedProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const sections = [
    {
      key: 'context',
      title: t('context'),
      body: project.caseStudy.context[locale],
    },
    {
      key: 'solution',
      title: t('solution'),
      body: project.caseStudy.solution[locale],
    },
    {
      key: 'outcome',
      title: t('outcome'),
      body: project.caseStudy.outcome[locale],
    },
  ];

  return (
    <article className="pt-1">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#998F8F] transition-colors duration-200 hover:text-[#F46C38]"
        >
          <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" />
          <span>{t('backToProjects')}</span>
        </Link>

        <p className="mt-[20px] text-[13px] font-semibold uppercase tracking-wider text-[#F46C38]">
          {category}
        </p>

        <h1 className="mt-[8px] font-display text-[34px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-white">
          {title}
        </h1>

        <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[1.58] text-[#998F8F]">
          {summary}
        </p>

        {/* Action links */}
        {(project.liveUrl || (project.repoUrl && project.repoPublic)) && (
          <div className="mt-[22px] flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[40px] items-center gap-2 rounded-[8px] bg-[#F46C38] px-4 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e35c27]"
              >
                <span>{t('liveWebsite')}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
              </a>
            )}

            {project.repoUrl && project.repoPublic && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[40px] items-center gap-2 rounded-[8px] border border-white/15 bg-white/[0.04] px-4 text-[13px] font-medium text-white transition-colors duration-200 hover:border-[#F46C38]"
              >
                <span>{t('sourceCode')}</span>
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            )}
          </div>
        )}
      </Reveal>

      {/* Unified 16:10 Hero Cover */}
      <Reveal delay={0.06} className="mt-[28px]">
        <ProjectCoverFallback
          theme={project.coverTheme}
          alt={coverAlt}
          size="hero"
        />
      </Reveal>

      {/* Metadata grid */}
      <Reveal delay={0.1} className="mt-[24px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] rounded-[12px] border border-white/[0.06] bg-[#1C1918] p-[18px]">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#998F8F]">
              {t('role')}
            </span>
            <span className="mt-1 block text-[14px] font-medium text-white">
              {role}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#998F8F]">
              {t('timeline')}
            </span>
            <span className="mt-1 block text-[14px] font-medium text-white">
              {timeline}
            </span>
          </div>
        </div>
      </Reveal>

      {/* 3-Part Case Study Sections (~150-220 words total) */}
      <div className="mt-[28px] space-y-[20px]">
        {sections.map((sec, idx) => (
          <Reveal key={sec.key} delay={0.04 * idx}>
            <section className="rounded-[12px] border border-white/[0.06] bg-[#1A1716] p-[20px] sm:p-[22px]">
              <h2 className="font-display text-[17px] sm:text-[18px] font-bold text-white">
                {sec.title}
              </h2>
              <p className="mt-[8px] text-[14px] sm:text-[15px] leading-[1.62] text-[#998F8F]">
                {sec.body}
              </p>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Concise Technology Stack */}
      <Reveal className="mt-[28px]">
        <h2 className="font-display text-[16px] font-semibold text-white/90">
          {t('techStack')}
        </h2>
        <div className="mt-[10px] flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[7px] border border-white/10 bg-[#221F1E] px-2.5 py-1 text-[12px] font-medium text-white/85"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Related Projects */}
      <section className="mt-[64px]">
        <Reveal>
          <h2 className="font-display text-[20px] font-bold uppercase tracking-[-0.02em] text-white">
            {t('relatedProjects')}
          </h2>
        </Reveal>
        <div className="mt-[18px] flex flex-col gap-[14px]">
          {related.map((rel) => (
            <Reveal key={rel.slug}>
              <ProjectRow project={rel} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Concise Contact CTA instead of repeating the full form */}
      <ContactCtaBanner />
    </article>
  );
}
