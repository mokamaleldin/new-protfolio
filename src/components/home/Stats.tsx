'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { getFormattedExperienceYears } from '@/lib/experience-duration';
import { featuredProjects } from '@/data/projects';
import { recommendations } from '@/data/recommendations';
import { SAWAD_EASE } from '@/components/motion/Reveal';

export function Stats() {
  const t = useTranslations('stats');

  const yearsValue = getFormattedExperienceYears();
  const projectsCount = String(featuredProjects.length).padStart(2, '0');
  const recommendationsCount = String(recommendations.length).padStart(2, '0');

  const statItems = [
    {
      id: 'years',
      value: yearsValue,
      line1: t('yearsLine1'),
      line2: t('yearsLine2'),
    },
    {
      id: 'projects',
      value: projectsCount,
      line1: t('projectsLine1'),
      line2: t('projectsLine2'),
    },
    {
      id: 'recommendations',
      value: recommendationsCount,
      line1: t('recommendationsLine1'),
      line2: t('recommendationsLine2'),
    },
  ];

  return (
    <section
      aria-label="Key career statistics"
      className="mt-[44px] grid grid-cols-3 gap-[18px] sm:gap-[32px] max-w-[540px]"
    >
      {statItems.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.36 + idx * 0.08,
            ease: SAWAD_EASE,
          }}
          className="flex flex-col"
        >
          <span className="font-display text-[40px] sm:text-[52px] lg:text-[62px] font-bold leading-[1.02] tracking-[-0.03em] text-white">
            {item.value}
          </span>
          <span className="mt-[8px] text-[11px] sm:text-[13px] font-normal uppercase leading-[1.28] tracking-[0.01em] text-[#998F8F]">
            <span className="block">{item.line1}</span>
            <span className="block">{item.line2}</span>
          </span>
        </motion.div>
      ))}
    </section>
  );
}
