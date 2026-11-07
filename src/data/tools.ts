import type { LocalizedText } from './types';

export interface ToolItem {
  id: string;
  name: string;
  subtitle: LocalizedText;
  group: 'web' | 'systems' | 'ai' | 'media' | 'delivery';
  badge: string;
  featuredOnHome: boolean;
}

export interface ToolGroup {
  id: 'web' | 'systems' | 'ai' | 'media' | 'delivery';
  title: LocalizedText;
}

export const toolGroups: ToolGroup[] = [
  {
    id: 'web',
    title: {
      en: 'Web Engineering',
      ar: 'هندسة وتطوير الويب',
    },
  },
  {
    id: 'systems',
    title: {
      en: 'Systems & Backend',
      ar: 'الأنظمة والباك إند',
    },
  },
  {
    id: 'ai',
    title: {
      en: 'AI & Automation',
      ar: 'الذكاء الاصطناعي والأتمتة',
    },
  },
  {
    id: 'media',
    title: {
      en: 'Media Technology',
      ar: 'تكنولوجيا الإعلام والنشر',
    },
  },
  {
    id: 'delivery',
    title: {
      en: 'Design & Delivery',
      ar: 'التصميم والتشغيل',
    },
  },
];

export const tools: ToolItem[] = [
  // Web Engineering
  {
    id: 'nextjs',
    name: 'Next.js',
    subtitle: {
      en: 'React Framework',
      ar: 'إطار عمل React للإنتاج',
    },
    group: 'web',
    badge: 'NX',
    featuredOnHome: true,
  },
  {
    id: 'react',
    name: 'React & React Native',
    subtitle: {
      en: 'Web & Mobile UI',
      ar: 'واجهات الويب والموبايل',
    },
    group: 'web',
    badge: 'RC',
    featuredOnHome: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    subtitle: {
      en: 'Type-Safe Engineering',
      ar: 'تطوير برمجي آمن ومنظم',
    },
    group: 'web',
    badge: 'TS',
    featuredOnHome: true,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    subtitle: {
      en: 'Design Systems & RTL UI',
      ar: 'أنظمة التصميم وواجهات RTL',
    },
    group: 'web',
    badge: 'TW',
    featuredOnHome: false,
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    subtitle: {
      en: 'Backend Runtime & APIs',
      ar: 'تطوير الخوادم والـ APIs',
    },
    group: 'web',
    badge: 'ND',
    featuredOnHome: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES2024)',
    subtitle: {
      en: 'Core Web Language',
      ar: 'لغة الويب الأساسية',
    },
    group: 'web',
    badge: 'JS',
    featuredOnHome: false,
  },

  // Systems & Backend
  {
    id: 'postgresql',
    name: 'PostgreSQL & Supabase',
    subtitle: {
      en: 'Relational Database & Auth',
      ar: 'قواعد البيانات العلائقية والمصادقة',
    },
    group: 'systems',
    badge: 'PG',
    featuredOnHome: true,
  },
  {
    id: 'rest-apis',
    name: 'REST APIs & Webhooks',
    subtitle: {
      en: 'System Integration',
      ar: 'ربط الأنظمة وتكامل البيانات',
    },
    group: 'systems',
    badge: 'API',
    featuredOnHome: false,
  },
  {
    id: 'system-analysis',
    name: 'Systems Analysis',
    subtitle: {
      en: 'Workflow & Architecture Design',
      ar: 'تحليل سير العمل وتصميم الحلول',
    },
    group: 'systems',
    badge: 'SA',
    featuredOnHome: false,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    subtitle: {
      en: 'Version Control & CI',
      ar: 'إدارة الكود والتعاون البرمجي',
    },
    group: 'systems',
    badge: 'GIT',
    featuredOnHome: false,
  },

  // AI & Automation
  {
    id: 'ai-workflows',
    name: 'AI Workflow Automation',
    subtitle: {
      en: 'LLM Pipelines & Agents',
      ar: 'مسارات الأتمتة بالذكاء الاصطناعي',
    },
    group: 'ai',
    badge: 'AI',
    featuredOnHome: true,
  },
  {
    id: 'python',
    name: 'Python & FastAPI',
    subtitle: {
      en: 'Automation & Media Services',
      ar: 'خدمات الأتمتة ومعالجة الوسائط',
    },
    group: 'ai',
    badge: 'PY',
    featuredOnHome: false,
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    subtitle: {
      en: 'Structured AI Outputs',
      ar: 'هيكلة وضبط مخرجات النماذج الذكية',
    },
    group: 'ai',
    badge: 'PE',
    featuredOnHome: false,
  },

  // Media Technology
  {
    id: 'strapi',
    name: 'Strapi & Headless CMS',
    subtitle: {
      en: 'Editorial Content Systems',
      ar: 'أنظمة إدارة المحتوى الإخباري',
    },
    group: 'media',
    badge: 'CMS',
    featuredOnHome: false,
  },
  {
    id: 'media-tooling',
    name: 'Visual Production Tooling',
    subtitle: {
      en: 'Automated News Graphics',
      ar: 'أدوات أتمتة التصاميم الإخبارية',
    },
    group: 'media',
    badge: 'MT',
    featuredOnHome: false,
  },

  // Design & Delivery
  {
    id: 'figma',
    name: 'Figma',
    subtitle: {
      en: 'Interface Design & Specs',
      ar: 'تصميم الواجهات والنماذج الأولية',
    },
    group: 'delivery',
    badge: 'FG',
    featuredOnHome: true,
  },
  {
    id: 'vercel',
    name: 'Vercel',
    subtitle: {
      en: 'Cloud Deployment & Edge',
      ar: 'نشر وتشغيل تطبيقات الويب',
    },
    group: 'delivery',
    badge: 'VC',
    featuredOnHome: false,
  },
  {
    id: 'motion',
    name: 'Motion / Three.js',
    subtitle: {
      en: 'Interactive Web UI',
      ar: 'تفاعلات وحركات الويب',
    },
    group: 'delivery',
    badge: '3D',
    featuredOnHome: false,
  },
];

export const homeFeaturedTools = tools.filter((t) => t.featuredOnHome);
