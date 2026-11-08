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
  featuredOnHome: boolean;
}

export interface SpecializationStage {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  outcome: LocalizedText;
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
      ar: 'هجين',
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
      en: 'I design and build software solutions and AI-powered tools for media organizations, starting from systems analysis and operational requirements in direct collaboration with clients.',
      ar: 'أصمم وأطوّر حلولًا برمجية وأدوات تعتمد على الذكاء الاصطناعي للمؤسسات الإعلامية، بدءًا من تحليل الأنظمة ومتطلبات العمل، وبالتعاون المباشر مع العملاء.',
    },
    responsibilities: [
      {
        en: 'Analyzing newsroom and media production workflows to define practical technical scopes and system architectures.',
        ar: 'تحليل مسارات العمل في المؤسسات الإعلامية وتحويل الاحتياجات التشغيلية إلى حلول تقنية واضحة.',
      },
      {
        en: 'Building full-stack software, Arabic visual templating engines, and AI-assisted publishing pipelines.',
        ar: 'تطوير البرمجيات وأدوات التصميم البصري ومسارات النشر المؤتمتة المدعومة بالذكاء الاصطناعي.',
      },
    ],
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
      ar: 'حضوري',
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
      en: 'I develop intelligent automation workflows and production tools that support digital content creation and publishing, built around the team’s daily workflow and needs.',
      ar: 'أطوّر أدوات ومسارات أتمتة ذكية تدعم إنتاج المحتوى والنشر الرقمي، انطلاقًا من احتياجات الفريق وطريقة عمله اليومية.',
    },
    responsibilities: [
      {
        en: 'Designing and implementing AI-assisted media production workflows and visual content tooling.',
        ar: 'تصميم وتنفيذ مسارات عمل إعلامية مدعومة بالذكاء الاصطناعي وأدوات لإنتاج المحتوى البصري.',
      },
      {
        en: 'Delivering web development and automation improvements that reduce repetitive daily publishing tasks.',
        ar: 'تطوير تحسينات برمجية وحلول أتمتة تختصر المهام اليومية المتكررة في عمليات النشر الرقمي.',
      },
    ],
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
      ar: 'هجين',
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
          ar: 'مطور واجهات أمامية',
        },
        start: '2024-08',
        end: '2025-01',
      },
    ],
    summary: {
      en: 'Engineered responsive web applications and interactive product interfaces using React and Next.js before expanding into full-stack feature delivery.',
      ar: 'طوّرت تطبيقات ويب وواجهات منتجات تفاعلية باستخدام React وNext.js، ثم توسعت المسؤوليات لتشمل التطوير المتكامل وربط الخدمات.',
    },
    responsibilities: [
      {
        en: 'Built modular frontend architectures and reusable UI components with Next.js, React, and TypeScript.',
        ar: 'بناء واجهات أمامية ومكونات برمجية قابلة لإعادة الاستخدام باستخدام Next.js وReact وTypeScript.',
      },
      {
        en: 'Delivered full-stack application features and backend API integrations.',
        ar: 'تنفيذ مزايا متكاملة في تطبيقات الويب وربط الواجهات بخدمات الخادم.',
      },
    ],
    featuredOnHome: false,
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
      ar: 'حضوري',
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
      en: 'Contributed to real-time television production web applications, program scheduling interfaces, and CMS-connected news platforms within the engineering team.',
      ar: 'ساهمت ضمن فريق التطوير في بناء واجهات ويب للإنتاج التلفزيوني اللحظي، وأنظمة جدولة البرامج، ومنصات النشر الإخباري.',
    },
    responsibilities: [
      {
        en: 'Implemented producer interfaces, scheduling workflows, and live election/ticker displays.',
        ar: 'تطوير واجهات عمل المنتجين، ومسارات الجدولة، وشاشات عرض بيانات الانتخابات وشريط الأخبار.',
      },
      {
        en: 'Connected frontend applications with REST APIs and Strapi CMS in collaboration with senior developers and designers.',
        ar: 'ربط تطبيقات الواجهة الأمامية بواجهات البرمجة ونظام Strapi بالتعاون مع فريق الهندسة والتصميم.',
      },
    ],
    featuredOnHome: false,
  },
];

export const homeExperienceEntries = experienceEntries.filter(
  (entry) => entry.featuredOnHome
);

export const specializationStages: SpecializationStage[] = [
  {
    number: '01',
    title: {
      en: 'Understand',
      ar: 'فهم العمل',
    },
    description: {
      en: 'I learn the nature of your business, daily workflows, and the people and tools involved. Together we clarify the real operational requirements before jumping into technical choices.',
      ar: 'أفهم طبيعة النشاط، والعمل اليومي، والأشخاص والأدوات المستخدمة، والمتطلبات الفعلية. أركّز على رؤية سير العمل كما يجري في الواقع قبل اقتراح أي أداة.',
    },
    outcome: {
      en: 'A shared picture of current reality and the target goal.',
      ar: 'صورة مشتركة عن الواقع والهدف.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Analyze',
      ar: 'تحليل المشكلة',
    },
    description: {
      en: 'I identify operational bottlenecks, repetitive manual tasks, integration gaps, and the root causes that slow down delivery. This separates symptoms from the core problem worth solving.',
      ar: 'أحدد نقاط الاختناق، والتكرار اليدوي، وفجوات الربط، والأسباب التي تؤخر الإنجاز. نفصل بذلك بين الأعراض الجانبية والمشكلة الأساسية التي تستحق المعالجة.',
    },
    outcome: {
      en: 'A clearly defined problem and clear priorities.',
      ar: 'مشكلة محددة وأولويات واضحة.',
    },
  },
  {
    number: '03',
    title: {
      en: 'Design',
      ar: 'تصميم الحل',
    },
    description: {
      en: 'I turn verified needs into a practical solution concept, realistic scope, and execution plan. We decide clearly what requires custom development, system integration, or AI automation.',
      ar: 'أحوّل الاحتياجات إلى تصور عملي للحل ونطاق مناسب وخطة تنفيذ، وأختار ما يحتاج إلى تطوير أو ربط أو أتمتة. تتضح بذلك معالم الحل وطريقة عمله قبل كتابة الكود.',
    },
    outcome: {
      en: 'A clear, understood solution before execution begins.',
      ar: 'حل مفهوم قبل بدء التنفيذ.',
    },
  },
  {
    number: '04',
    title: {
      en: 'Build & Improve',
      ar: 'التنفيذ والتحسين',
    },
    description: {
      en: 'I build the solution and test it under real operational conditions with your team. After deployment, I follow up on team feedback and refine the workflow as needs evolve.',
      ar: 'أبني الحل وأختبره في ظروف الاستخدام الفعلية، وأتابع ملاحظات الفريق وتحسينه. يضمن ذلك اعتماد الفريق للحل بسلاسة واستمراره في خدمة العمل.',
    },
    outcome: {
      en: 'A dependable solution ready for use and future growth.',
      ar: 'حل قابل للاستخدام والتطوير.',
    },
  },
];
