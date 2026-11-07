import type { LocalizedText } from './types';

export interface Venture {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  url: string;
  projectSlug?: string;
}

export const ventures: Venture[] = [
  {
    id: 'kashida',
    name: {
      en: 'Kashida | كشيدة',
      ar: 'كشيدة | Kashida',
    },
    role: {
      en: 'Co-Founder',
      ar: 'شريك مؤسس',
    },
    category: {
      en: 'Media Technology & AI Automation Company',
      ar: 'شركة تكنولوجيا إعلام وأتمتة بالذكاء الاصطناعي',
    },
    description: {
      en: 'Focused on software engineering, workflow analysis, and intelligent automation tools built specifically for modern newsrooms and media production teams.',
      ar: 'شركة تقنية متخصصة في تحليل سير العمل الإعلامي وبناء برمجيات وأدوات أتمتة ذكية تساعد غرف الأخبار وفرق الإنتاج تشتغل بسرعة ودقة.',
    },
    url: 'https://kashida.io/',
    projectSlug: 'kashida',
  },
  {
    id: 'duthur',
    name: {
      en: 'DUTHUR',
      ar: 'دُثر | DUTHUR',
    },
    role: {
      en: 'Co-Founder & Technical Lead',
      ar: 'مؤسس ومسؤول التطوير التقني',
    },
    category: {
      en: 'Apparel Brand & Digital Commerce',
      ar: 'علامة ملابس وتجارة إلكترونية',
    },
    description: {
      en: 'An independent clothing brand in Türkiye pairing physical product operations with custom multilingual e-commerce engineering, inventory control, and order workflows.',
      ar: 'علامة ملابس مستقلة في تركيا بجمع فيها بين إدارة المنتج والتشغيل وبين تطوير نظام متجر إلكتروني متعدد اللغات لإدارة المخزون والطلبات.',
    },
    url: 'https://duthur.co/',
    projectSlug: 'duthur',
  },
];
