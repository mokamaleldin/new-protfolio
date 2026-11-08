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
    <section aria-labelledby="recent-projects-heading" className="mt-[80px]">
      <Reveal>
        <div id="recent-projects-heading">
          <SectionHeading line1={t('line1')} line2={t('line2')} />
        </div>
      </Reveal>

      <div className="mt-[28px] flex flex-col gap-[16px]">
        {featuredProjects.slice(0, 3).map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.05}>
            <ProjectRow project={project} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-[22px]">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#F46C38] transition-colors duration-200 hover:text-white"
        >
          <span>{t('viewAll')}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
