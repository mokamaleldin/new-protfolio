import React from 'react';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { experienceEntries } from '@/data/experience';
import { recommendations } from '@/data/recommendations';
import type { Locale } from '@/i18n/routing';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ExperienceItem } from '@/components/experience/ExperienceItem';
import { RecommendationCard } from '@/components/experience/RecommendationCard';
import { ContactCtaBanner } from '@/components/sections/ContactCtaBanner';
import { Reveal } from '@/components/motion/Reveal';

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('experience'),
    alternates: {
      canonical: `/${locale}/experience`,
      languages: {
        en: '/en/experience',
        ar: '/ar/experience',
        'x-default': '/en/experience',
      },
    },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  setRequestLocale(locale);

  const tExp = await getTranslations({
    locale,
    namespace: 'sections.experience',
  });
  const tRec = await getTranslations({
    locale,
    namespace: 'sections.recommendations',
  });

  return (
    <div className="pt-1">
      <Reveal>
        <SectionHeading
          as="h1"
          size="hero"
          line1={tExp('line1')}
          line2={tExp('line2')}
        />
      </Reveal>

      <div className="mt-[32px] flex flex-col gap-[20px]">
        {experienceEntries.map((entry, idx) => (
          <Reveal key={entry.id} delay={idx * 0.05}>
            <ExperienceItem entry={entry} locale={locale} showDetails />
          </Reveal>
        ))}
      </div>

      {/* 5 Selected Colleague Recommendations */}
      <section
        id="recommendations"
        aria-labelledby="selected-recommendations-heading"
        className="mt-[80px] scroll-mt-[90px]"
      >
        <Reveal>
          <div id="selected-recommendations-heading">
            <SectionHeading line1={tRec('line1')} line2={tRec('line2')} />
          </div>
          <div className="mt-[14px]">
            <a
              href="https://www.linkedin.com/in/mokamaleldin/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#F46C38] transition-colors duration-200 hover:underline"
            >
              <span>{tRec('viewOnLinkedIn')}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-[26px] flex flex-col gap-[16px]">
          {recommendations.slice(0, 5).map((rec, idx) => (
            <Reveal key={rec.id} delay={idx * 0.04}>
              <RecommendationCard recommendation={rec} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCtaBanner />
    </div>
  );
}
