import type { LocalizedText } from './types';
import { CAREER_START_DATE } from '../lib/experience-duration';

export const siteConfig = {
  brandIdentity: 'mokamaleldin',
  careerStartDate: CAREER_START_DATE,
  email: 'mohammed.kamal.eliwa@gmail.com',
  location: {
    en: 'Istanbul, Türkiye',
    ar: 'إسطنبول، تركيا',
  } satisfies LocalizedText,
  owner: {
    name: {
      en: 'Mohamed Kamaleldin',
      ar: 'محمد كمال الدين',
    } satisfies LocalizedText,
    title: {
      en: 'Media Technology & AI Automation Engineer',
      ar: 'مهندس تكنولوجيا الإعلام وأتمتة الذكاء الاصطناعي',
    } satisfies LocalizedText,
    specialization: {
      en: 'Systems Analysis, Solution Design, Workflow Optimization, Software Development, and AI Automation',
      ar: 'تحليل الأنظمة، تصميم الحلول، تحسين سير العمل، تطوير البرمجيات، وأتمتة الذكاء الاصطناعي',
    } satisfies LocalizedText,
    profileCardBio: {
      en: 'Media Technology & Automation — Systems Analysis & Intelligent Workflows.',
      ar: 'تكنولوجيا الإعلام والأتمتة — تحليل الأنظمة وتصميم الحلول الذكية.',
    } satisfies LocalizedText,
    heroHeading: {
      line1: {
        en: 'Media Technology &',
        ar: 'مهندس تقنيات',
      } satisfies LocalizedText,
      line2: {
        en: 'Automation Engineer',
        ar: 'الإعلام والأتمتة',
      } satisfies LocalizedText,
    },
    heroLead: {
      en: 'With over five years in technology, I start by understanding how your business operates, how your team works, and how steps and tools connect. From there, I uncover both operational bottlenecks and new opportunities for improvement and growth—then design and build the right solution.',
      ar: 'بخبرة تتجاوز خمس سنوات في التقنية، أبدأ بفهم طبيعة العمل، وطريقة عمل الفريق، والعلاقة بين الخطوات والأدوات. ومن هذا الفهم أحدد المشكلات وفرص التحسين والتطوير، ثم أصمم وأطوّر الحل المناسب.',
    } satisfies LocalizedText,
    heroSignature: {
      en: 'I understand the system. I identify the problem. I build the solution.',
      ar: 'أفهم النظام. أحدد المشكلة. أبني الحل.',
    } satisfies LocalizedText,
  },
  profileImage: {
    /**
     * Centralized profile image reference.
     * Uses background-removed portrait of Mohamed Kamaleldin without modifying facial features.
     */
    src: '/images/profile/profile-sawad.webp',
    alt: {
      en: 'Portrait of Mohamed Kamaleldin',
      ar: 'صورة محمد كمال الدين',
    } satisfies LocalizedText,
  },
  seo: {
    title: {
      en: 'Mohamed Kamaleldin | Media Technology & AI Automation Engineer',
      ar: 'محمد كمال الدين | مهندس تكنولوجيا الإعلام وأتمتة الذكاء الاصطناعي',
    } satisfies LocalizedText,
    description: {
      en: 'Media Technology & AI Automation Engineer helping media organizations, businesses, and brands analyze workflows, spot bottlenecks and opportunities, and build practical software and AI automation.',
      ar: 'مهندس تكنولوجيا الإعلام وأتمتة الذكاء الاصطناعي؛ أساعد المؤسسات الإعلامية والشركات والعلامات التجارية على تحليل سير العمل واكتشاف فرص التطوير وتصميم وتطوير حلول عملية.',
    } satisfies LocalizedText,
  },
} as const;
