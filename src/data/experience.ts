import type { LocalizedText } from './types';

export interface ExperienceRole {
  title: LocalizedText;
  start: string;
  end?: string;
}

export interface ExperienceEntry {
  id: string;
  order: number;
  company: LocalizedText;
  location: LocalizedText;
  workMode?: LocalizedText;
  url?: string;
  roles: ExperienceRole[];
  summary: LocalizedText;
  responsibilities: LocalizedText[];
  technologies?: string[];
  featuredOnHome: boolean;
}

export interface SpecializationStage {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'kashida',
    order: 1,
    company: {
      en: 'Kashida | كشيدة',
      ar: 'كشيدة | Kashida',
    },
    location: {
      en: 'Istanbul, Türkiye',
      ar: 'إسطنبول، تركيا',
    },
    workMode: {
      en: 'Hybrid',
      ar: 'هجين (Hybrid)',
    },
    url: 'https://kashida.io/',
    roles: [
      {
        title: {
          en: 'Co-Founder',
          ar: 'شريك مؤسس',
        },
        start: '2026-11',
      },
    ],
    summary: {
      en: 'Leading client discovery, systems analysis, solution design, software development, and AI-powered workflow automation for media organizations.',
      ar: 'قيادة التواصل مع العملاء، وتحليل الأنظمة ومتطلبات العمل، وتصميم الحلول البرمجية، وتطوير أدوات الأتمتة بالذكاء الاصطناعي للمؤسسات الإعلامية.',
    },
    responsibilities: [
      {
        en: 'Client communication and professional relationship development.',
        ar: 'التواصل مع العملاء وتطوير العلاقات المهنية والشراكات.',
      },
      {
        en: 'Business and technical requirements analysis.',
        ar: 'تحليل متطلبات العمل والمتطلبات التقنية للمشاريع.',
      },
      {
        en: 'Systems analysis and practical solution design.',
        ar: 'تحليل الأنظمة القائمة وتصميم حلول تقنية عملية.',
      },
      {
        en: 'Full-stack software development and AI-powered automation implementation.',
        ar: 'تطوير البرمجيات وبناء مسارات الأتمتة المدعومة بالذكاء الاصطناعي.',
      },
      {
        en: 'Business development and continuous technical delivery improvements.',
        ar: 'تطوير الأعمال وتحسين جودة وكفاءة التسليم التقني.',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'AI Automation'],
    featuredOnHome: true,
  },
  {
    id: 'mazid',
    order: 2,
    company: {
      en: 'mazid',
      ar: 'مزيد | mazid',
    },
    location: {
      en: 'Istanbul, Türkiye',
      ar: 'إسطنبول، تركيا',
    },
    workMode: {
      en: 'On-site',
      ar: 'من المقر (On-site)',
    },
    roles: [
      {
        title: {
          en: 'Media Technology & AI Automation Engineer',
          ar: 'مهندس تكنولوجيا الإعلام وأتمتة الذكاء الاصطناعي',
        },
        start: '2025-09',
      },
      {
        title: {
          en: 'AI & Digital Media Specialist',
          ar: 'أخصائي ذكاء اصطناعي وإعلام رقمي',
        },
        start: '2025-06',
        end: '2025-09',
      },
    ],
    summary: {
      en: 'Building AI-assisted media workflows, visual-content production tooling, and technical improvements for everyday digital publishing operations.',
      ar: 'بناء مسارات عمل إعلامية مدعومة بالذكاء الاصطناعي، وأدوات إنتاج محتوى بصري، وتحسينات تقنية لعمليات النشر الرقمي اليومية.',
    },
    responsibilities: [
      {
        en: 'Designing and implementing AI-assisted media workflows.',
        ar: 'تصميم وتنفيذ مسارات عمل إعلامية مدعومة بالذكاء الاصطناعي.',
      },
      {
        en: 'Delivering technical improvements for digital content operations.',
        ar: 'تطوير تحسينات تقنية لرفع كفاءة عمليات المحتوى الرقمي.',
      },
      {
        en: 'Web development, digital publishing support, and visual-content production tooling.',
        ar: 'تطوير الويب، ودعم النشر الرقمي، وبناء أدوات إنتاج المحتوى البصري.',
      },
      {
        en: 'Workflow automation, prompt engineering, and integrating practical technology into everyday media work.',
        ar: 'أتمتة المهام المتكررة، وهندسة الأوامر (Prompt Engineering)، ودمج التقنية في الشغل الإعلامي اليومي.',
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'AI Workflows', 'Prompt Engineering', 'Media Tooling'],
    featuredOnHome: true,
  },
  {
    id: 'linebot',
    order: 3,
    company: {
      en: 'linebot',
      ar: 'linebot',
    },
    location: {
      en: 'Istanbul, Türkiye',
      ar: 'إسطنبول، تركيا',
    },
    workMode: {
      en: 'Hybrid',
      ar: 'هجين (Hybrid)',
    },
    roles: [
      {
        title: {
          en: 'Full Stack Developer',
          ar: 'مطور Full Stack',
        },
        start: '2025-01',
        end: '2025-06',
      },
      {
        title: {
          en: 'Frontend Developer',
          ar: 'مطور واجهات أمامية (Frontend)',
        },
        start: '2024-08',
        end: '2025-01',
      },
    ],
    summary: {
      en: 'Engineered web applications, frontend architectures, and interactive product interfaces using React and Next.js before expanding into full-stack delivery.',
      ar: 'تطوير تطبيقات ويب وهيكلة واجهات أمامية تفاعلية باستخدام React وNext.js، ثم التوسع لمهام التطوير المتكامل (Full-Stack).',
    },
    responsibilities: [
      {
        en: 'Frontend architecture and component engineering with Next.js and React.',
        ar: 'هيكلة الواجهات الأمامية وبناء المكونات باستخدام Next.js وReact.',
      },
      {
        en: 'Full-stack web application engineering and API integration.',
        ar: 'تطوير تطبيقات الويب وربط الواجهات مع خدمات الباك إند.',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    featuredOnHome: true,
  },
  {
    id: 'id8-media',
    order: 4,
    company: {
      en: 'ID8 Media',
      ar: 'ID8 Media',
    },
    location: {
      en: 'Istanbul, Türkiye',
      ar: 'إسطنبول، تركيا',
    },
    workMode: {
      en: 'On-site',
      ar: 'من المقر (On-site)',
    },
    url: 'https://id8media.com/en',
    roles: [
      {
        title: {
          en: 'Junior Frontend Developer',
          ar: 'مطور واجهات أمامية (Junior)',
        },
        start: '2023-12',
        end: '2024-08',
      },
      {
        title: {
          en: 'Frontend Development Intern',
          ar: 'متدرب تطوير واجهات أمامية',
        },
        start: '2023-07',
        end: '2023-12',
      },
    ],
    summary: {
      en: 'Built real-time television production web interfaces, news publishing applications, scheduling views, and live ticker/election data integrations.',
      ar: 'العمل على تطبيقات ويب لحظية للإنتاج التلفزيوني، وواجهات نشر إخباري، وأنظمة جدولة، ودمج البيانات الحية مع أنظمة إدارة المحتوى.',
    },
    responsibilities: [
      {
        en: 'Contributed to real-time television production web applications.',
        ar: 'المساهمة في تطوير تطبيقات ويب لحظية خاصة بالإنتاج التلفزيوني.',
      },
      {
        en: 'Implemented news publishing interfaces, scheduling workflows, and CMS functionality.',
        ar: 'تنفيذ واجهات النشر الإخباري، ومسارات الجدولة، وربط أنظمة إدارة المحتوى (CMS).',
      },
      {
        en: 'Integrated live data feeds and built responsive web interfaces.',
        ar: 'ربط البيانات الحية وبناء واجهات ويب متجاوبة وسريعة.',
      },
    ],
    technologies: ['Next.js', 'React', 'Material UI', 'Tailwind CSS', 'Strapi', 'REST APIs'],
    featuredOnHome: false,
  },
  {
    id: 'freelance',
    order: 5,
    company: {
      en: 'Freelance Work',
      ar: 'عمل حر (Freelance)',
    },
    location: {
      en: 'Remote',
      ar: 'عن بُعد',
    },
    roles: [
      {
        title: {
          en: 'Junior Frontend Developer',
          ar: 'مطور واجهات أمامية (Junior)',
        },
        start: '2023-04',
        end: '2023-07',
      },
    ],
    summary: {
      en: 'Developed custom frontend interfaces and a web scraping application using Next.js, JavaScript, Tailwind CSS, and Framer Motion.',
      ar: 'تطوير واجهات ويب مخصصة وتطبيق لجمع واستخلاص البيانات (Web Scraping) باستخدام Next.js وJavaScript وTailwind CSS وFramer Motion.',
    },
    responsibilities: [
      {
        en: 'Built a web scraping application and responsive client interfaces.',
        ar: 'بناء تطبيق Web Scraping وواجهات مستخدم متجاوبة.',
      },
      {
        en: 'Implemented interactive motion and clean layout styling with Next.js, Tailwind CSS, and Framer Motion.',
        ar: 'تنفيذ حركات تفاعلية وتنسيقات متقنة باستخدام Next.js وTailwind CSS وFramer Motion.',
      },
    ],
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    featuredOnHome: false,
  },
];

export const specializationStages: SpecializationStage[] = [
  {
    number: '01',
    title: {
      en: 'Understand',
      ar: 'فهم النظام',
    },
    description: {
      en: 'Understand the business context, daily team operations, actual requirements, and how the existing system behaves in reality.',
      ar: 'فهم طبيعة العمل، وطريقة شغل الفريق اليومية، والمتطلبات الفعلية، وإزاي النظام الحالي بيشتغل على أرض الواقع.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Analyze',
      ar: 'تحليل المشكلة',
    },
    description: {
      en: 'Identify operational bottlenecks, manual dependencies, inefficiencies, integration gaps, and root causes before writing code.',
      ar: 'تحديد نقاط الاختناق، والاعتماديات اليدوية المرهقة، وفجوات الربط بين الأدوات، والوصول للسبب الجذري للمشكلة قبل كتابة الكود.',
    },
  },
  {
    number: '03',
    title: {
      en: 'Design',
      ar: 'تصميم الحل',
    },
    description: {
      en: 'Translate verified requirements into clear software architectures, automation workflows, and practical integration plans.',
      ar: 'تحويل المتطلبات الواضحة لمعمارية برمجية مناسبة، ومسارات أتمتة عملية، وخطة ربط قابلة للتنفيذ.',
    },
  },
  {
    number: '04',
    title: {
      en: 'Build & Improve',
      ar: 'التنفيذ والتحسين',
    },
    description: {
      en: 'Implement the software or workflow, test its behavior under real operational load, and refine it continuously with the team.',
      ar: 'بناء الحل البرمجي أو مسار الأتمتة، واختباره في ظروف التشغيل الحقيقية، وتطويره باستمرار بناءً على ملاحظات الفريق.',
    },
  },
];
