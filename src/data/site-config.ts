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
      en: 'Software and AI automation built around how media teams work.',
      ar: 'حلول برمجية وأتمتة ذكية تنطلق من طريقة عمل الفرق الإعلامية.',
    } satisfies LocalizedText,
    heroHeading: {
      line1: {
        en: 'MEDIA TECHNOLOGY &',
        ar: 'مهندس تكنولوجيا الإعلام',
      } satisfies LocalizedText,
      line2: {
        en: 'AI AUTOMATION ENGINEER',
        ar: 'وأتمتة الذكاء الاصطناعي',
      } satisfies LocalizedText,
    },
    heroLead: {
      en: 'With over five years in technology, I start by understanding how your team works and where time gets lost. Then I design and build software and AI-assisted workflows that help media teams, businesses, and brands work with more clarity, speed, and control.',
      ar: 'بخبرة تتجاوز خمس سنوات في التقنية، أبدأ بفهم طريقة عمل الفريق والعقبات التي تستهلك وقته. ثم أصمم وأطوّر حلولًا برمجية ومسارات عمل مدعومة بالذكاء الاصطناعي تساعد الفرق الإعلامية والشركات والعلامات التجارية على العمل بوضوح وسرعة وكفاءة أكبر.',
    } satisfies LocalizedText,
    heroSignature: {
      en: 'I understand the system. I identify the problem. I build the solution.',
      ar: 'أفهم النظام. أحدد المشكلة. أبني الحل.',
    } satisfies LocalizedText,
  },
  profileImage: {
    /**
     * Centralized profile image reference.
     * Replace `/public/images/profile/profile-sawad.webp` or update this single path
     * when a preferred professional portrait is ready.
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
      en: 'Media Technology & AI Automation Engineer helping media organizations, businesses, and brands analyze workflows, design practical solutions, and build custom software and AI automation.',
      ar: 'مهندس تكنولوجيا الإعلام وأتمتة الذكاء الاصطناعي؛ أساعد المؤسسات الإعلامية والشركات والعلامات التجارية على تحليل سير العمل وتصميم وتطوير حلول برمجية ومسارات أتمتة ذكية.',
    } satisfies LocalizedText,
  },
} as const;
