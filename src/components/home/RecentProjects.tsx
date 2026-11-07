import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { featuredProjects } from '@/data/projects';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { Reveal } from '@/components/motion/Reveal';

interface RecentProjectsProps {
  locale: Locale;
}

export function RecentProjects({ locale }: RecentProjectsProps) {
  const t = useTranslations('sections.recentProjects');

  return (
    <section aria-labelledby="recent-projects-heading" className="mt-[96px]">
      <Reveal>
        <div id="recent-projects-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[32px] flex flex-col gap-[16px]">
        {featuredProjects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.05}>
            <ProjectRow project={project} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-[24px]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors hover:text-white"
        >
          <span>{t('viewAll')}</span>
          <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
        </Link>
      </Reveal>
    </section>
  );
}
