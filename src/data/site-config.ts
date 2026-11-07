import type { LocalizedText } from './types';
import { CAREER_START_DATE } from '@/lib/experience-duration';

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
      en: 'Systems Analysis, Solution Architecture, Workflow Optimization, Software Engineering, and AI Automation',
      ar: 'تحليل الأنظمة، تصميم الحلول، تحسين سير العمل، هندسة البرمجيات، وأتمتة الذكاء الاصطناعي',
    } satisfies LocalizedText,
    profileCardBio: {
      en: 'Engineering software and intelligent systems for modern media.',
      ar: 'ببني أنظمة وحلول تقنية تساعد فرق الإعلام تشتغل بكفاءة أكبر.',
    } satisfies LocalizedText,
    heroHeading: {
      line1: {
        en: 'MEDIA TECH',
        ar: 'مهندس تقنيات',
      } satisfies LocalizedText,
      line2: {
        en: 'ENGINEER',
        ar: 'الإعلام والأتمتة',
      } satisfies LocalizedText,
    },
    heroLead: {
      en: "I'm Mohamed Kamaleldin. I analyze systems, identify operational bottlenecks, and build software and AI-powered workflows that help media teams and businesses work more efficiently.",
      ar: 'أنا محمد كمال الدين. بحلل الأنظمة، وبفهم المشاكل التشغيلية، وبصمم حلول برمجية وأتمتة ذكية تساعد فرق الإعلام والشركات تشتغل بشكل أكفأ.',
    } satisfies LocalizedText,
    heroSignature: {
      en: 'I understand the system. I identify the problem. I build the solution.',
      ar: 'بفهم النظام. بحلل المشكلة. وببني الحل.',
    } satisfies LocalizedText,
  },
  profileImage: {
    /**
     * Centralized profile image reference.
     * Replace `/public/images/profile/profile-main.webp` or update this single path
     * when a preferred professional portrait is ready.
     */
    src: '/images/profile/profile-main.webp',
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
      en: 'Explore the work and experience of Mohamed Kamaleldin, a Media Technology & AI Automation Engineer specializing in systems analysis, solution design, software engineering, and workflow automation.',
      ar: 'تعرّف على أعمال وخبرة محمد كمال الدين في تكنولوجيا الإعلام، تحليل الأنظمة، تطوير البرمجيات، وتصميم حلول الأتمتة والذكاء الاصطناعي.',
    } satisfies LocalizedText,
  },
} as const;
