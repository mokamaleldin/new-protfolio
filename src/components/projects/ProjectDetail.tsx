import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { featuredProjects, type Project } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { formatDateRange } from '@/lib/format-date';
import { ProjectCoverFallback } from './ProjectCoverFallback';
import { ProjectRow } from './ProjectRow';
import { ContactSection } from '@/components/sections/ContactSection';
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
  const timeline = formatDateRange(
    project.dates.start,
    project.dates.end,
    locale,
    tExp('present')
  );

  const hasRealHero = project.hero && !project.hero.placeholder;

  const related = featuredProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const sections = [
    { key: 'challenge', title: t('challenge'), body: project.caseStudy.challenge[locale] },
    project.caseStudy.analysis
      ? { key: 'analysis', title: t('analysis'), body: project.caseStudy.analysis[locale] }
      : null,
    { key: 'solution', title: t('solution'), body: project.caseStudy.solution[locale] },
    { key: 'implementation', title: t('implementation'), body: project.caseStudy.implementation[locale] },
    project.caseStudy.decisions
      ? { key: 'decisions', title: t('decisions'), body: project.caseStudy.decisions[locale] }
      : null,
    project.caseStudy.outcomes
      ? { key: 'outcomes', title: t('outcomes'), body: project.caseStudy.outcomes[locale] }
      : null,
  ].filter((s): s is { key: string; title: string; body: string } => Boolean(s));

  return (
    <article className="pt-1">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#998F8F] transition-colors hover:text-[#F46C38]"
        >
          <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" />
          <span>{t('backToProjects')}</span>
        </Link>

        <p className="mt-[22px] text-[13px] font-semibold uppercase tracking-wider text-[#F46C38]">
          {category}
        </p>

        <h1 className="mt-[8px] font-display text-[38px] sm:text-[54px] lg:text-[64px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-white">
          {title}
        </h1>

        <p className="mt-[16px] text-[15px] sm:text-[16px] leading-[1.58] text-[#998F8F]">
          {summary}
        </p>

        {/* Action links */}
        <div className="mt-[24px] flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[40px] items-center gap-2 rounded-[8px] bg-[#F46C38] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#e35c27]"
            >
              <span>{t('liveWebsite')}</span>
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          )}

          {project.repoUrl && project.repoPublic && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[40px] items-center gap-2 rounded-[8px] border border-white/15 bg-white/[0.04] px-4 text-[13px] font-medium text-white transition-colors hover:border-[#F46C38]"
            >
              <span>{t('sourceCode')}</span>
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          )}

          {project.repoUrl && !project.repoPublic && (
            <span className="inline-flex h-[40px] items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.03] px-3.5 text-[12px] text-[#998F8F]">
              <Lock className="h-3.5 w-3.5 text-[#F46C38]" />
              <span>{t('privateRepo')}</span>
            </span>
          )}
        </div>
      </Reveal>

      {/* Hero Cover */}
      <Reveal delay={0.08} className="mt-[32px]">
        {hasRealHero && project.hero ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-white/10 bg-[#1F1C1B]">
            <Image
              src={project.hero.src}
              alt={project.hero.alt[locale]}
              fill
              sizes="(max-width: 809px) 100vw, 696px"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <ProjectCoverFallback
            shortTitle={project.shortTitle}
            title={title}
            order={project.order}
            size="hero"
          />
        )}
      </Reveal>

      {/* Metadata grid */}
      <Reveal delay={0.12} className="mt-[28px]">
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

      {/* Key Contributions */}
      {project.highlights.length > 0 && (
        <Reveal delay={0.15} className="mt-[36px]">
          <h2 className="font-display text-[20px] font-bold text-white">
            {t('highlights')}
          </h2>
          <ul className="mt-[14px] space-y-2.5 ps-5 text-[14px] sm:text-[15px] leading-[1.55] text-[#998F8F] list-disc marker:text-[#F46C38]">
            {project.highlights.map((item, idx) => (
              <li key={idx}>{item[locale]}</li>
            ))}
          </ul>
        </Reveal>
      )}

      {/* Case Study Sections */}
      <div className="mt-[38px] space-y-[30px]">
        {sections.map((sec, idx) => (
          <Reveal key={sec.key} delay={0.05 * idx}>
            <section className="rounded-[12px] border border-white/[0.06] bg-[#1A1716] p-[22px]">
              <h2 className="font-display text-[18px] font-bold text-white">
                {sec.title}
              </h2>
              <p className="mt-[10px] text-[14px] sm:text-[15px] leading-[1.6] text-[#998F8F]">
                {sec.body}
              </p>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Technology Stack */}
      <Reveal className="mt-[36px]">
        <h2 className="font-display text-[18px] font-bold text-white">
          {t('techStack')}
        </h2>
        <div className="mt-[14px] flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[8px] border border-white/10 bg-[#221F1E] px-3 py-1.5 text-[12px] font-medium text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Related Projects */}
      <section className="mt-[76px]">
        <Reveal>
          <h2 className="font-display text-[22px] font-bold uppercase tracking-[-0.02em] text-white">
            {t('relatedProjects')}
          </h2>
        </Reveal>
        <div className="mt-[20px] flex flex-col gap-[14px]">
          {related.map((rel) => (
            <Reveal key={rel.slug}>
              <ProjectRow project={rel} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </article>
  );
}
