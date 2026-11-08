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
  highlights: LocalizedText[];
  example: LocalizedText;
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
  {
    id: 'freelance',
    order: 5,
    company: {
      en: 'Freelance Work',
      ar: 'عمل حر',
    },
    location: {
      en: 'Remote',
      ar: 'عن بُعد',
    },
    workMode: {
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
      en: 'Developed responsive client interfaces and a web scraping application using Next.js, JavaScript, Tailwind CSS, and Framer Motion.',
      ar: 'تطوير واجهات ويب متجاوبة وتطبيق لاستخلاص البيانات (Web Scraping) باستخدام Next.js وJavaScript وTailwind CSS وFramer Motion.',
    },
    responsibilities: [
      {
        en: 'Built responsive client interfaces and custom frontend layouts with Next.js and Tailwind CSS.',
        ar: 'تطوير واجهات متجاوبة وتنسيقات ويب مخصصة باستخدام Next.js وTailwind CSS.',
      },
      {
        en: 'Engineered an automated web scraping application to collect and structure online data.',
        ar: 'تطوير تطبيق لأتمتة جمع واستخلاص البيانات وتنظيمها للاستخدام.',
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
      en: 'Understand the Work',
      ar: 'فهم العمل',
    },
    description: {
      en: 'I learn the business goal, how the team works, who is involved, current tools, and how information and tasks move between them. If it starts from a new idea, we clarify its need and who will use it.',
      ar: 'أفهم الهدف، وطريقة عمل الفريق، والأشخاص المشاركين، والأدوات الحالية، وكيف تنتقل المعلومات والمهام بينهم. وإذا كان المشروع فكرة جديدة، أفهم احتياجها ومن سيستخدمها.',
    },
    highlights: [
      {
        en: 'Review actual daily handoffs across editors, operators, designers, or stakeholders.',
        ar: 'تتبّع الانتقال الفعلي للمهام والمعلومات بين المحررين والمصممين والعمليات دون افتراضات مسبقة.',
      },
      {
        en: 'Identify existing tools, spreadsheets, CMS workflows, and communication channels—or define the core journey for a brand-new idea.',
        ar: 'حصر الأدوات والأنظمة وقنوات المتابعة القائمة، أو تحديد رحلة المستخدم الأساسية عند البدء من فكرة جديدة.',
      },
    ],
    example: {
      en: 'In Kashida: tracing the actual editorial path from content writing and copy editing to visual layout and multi-platform publishing, mapping handoff points between team members.',
      ar: 'في منصة كشيدة: تتبّع المسار التحريري من كتابة المحتوى والتحرير إلى تصميم القوالب البصرية والنشر، وتحديد نقاط التعطيل بين أعضاء الفريق.',
    },
    outcome: {
      en: 'A clear workflow map and defined scope',
      ar: 'خريطة واضحة لسير العمل ونطاق محدد للبداية',
    },
  },
  {
    number: '02',
    title: {
      en: 'Analyze Problems & Opportunities',
      ar: 'تحليل المشكلات والفرص',
    },
    description: {
      en: 'I look for what causes delays, repetitive manual work, and disconnection between tools—while identifying practical improvement opportunities and the priorities worth tackling first.',
      ar: 'أبحث عن أسباب التعطيل والتكرار اليدوي وفجوات الربط بين الأدوات، وأحدد فرص التطوير والأولويات التي تستحق البدء بها.',
    },
    highlights: [
      {
        en: 'Separate surface symptoms from root causes behind bottlenecks, copy-paste repetition, and stalled approvals.',
        ar: 'التمييز بين الأعراض الظاهرة والأسباب الجذرية وراء التأخير وتكرار الإدخال اليدوي وفقدان السياق.',
      },
      {
        en: 'Spot new development opportunities where unification, reusable assets, or smarter automation can add leverage.',
        ar: 'اكتشاف فرص تطوير غير مستغلة — مثل توحيد مصدر البيانات أو تحويل المهام المتكررة إلى قوالب وأتمتة عملية.',
      },
    ],
    example: {
      en: 'In ID8 Media: identifying manual re-entry bottlenecks across broadcast rundowns and on-air graphics, spotting the opportunity to connect the producer UI directly to live data feeds.',
      ar: 'في ID8 Media: اكتشاف التكرار اليدوي في إدخال بيانات جداول البث وشاشات التلفزيون، وتحديد فرصة ربط واجهة الإنتاج بالنظام مباشرة لتحديث المحتوى لحظيًا.',
    },
    outcome: {
      en: 'Prioritized bottlenecks and improvement opportunities',
      ar: 'أولويات مرتبة للمشكلات وفرص التحسين',
    },
  },
  {
    number: '03',
    title: {
      en: 'Design the Solution',
      ar: 'تصميم الحل',
    },
    description: {
      en: 'I define how the solution will operate in practice—what requires custom development, system integration, or automation, and where AI adds appropriate value—making the concept clear before execution.',
      ar: 'أحدد كيف سيعمل الحل عمليًا، وما الذي يحتاج إلى بناء أو ربط أو أتمتة، وأين يضيف الذكاء الاصطناعي قيمة مناسبة، مع توضيح التصور قبل بدء التنفيذ.',
    },
    highlights: [
      {
        en: 'Decide cleanly what belongs in deterministic code/APIs versus custom interfaces or human-in-the-loop AI steps.',
        ar: 'اختيار ما يُبنى كواجهة مخصصة، وما يُربط مباشرة بين الأنظمة، وأين يضيف الذكاء الاصطناعي قيمة حقيقية تحت إشراف الفريق.',
      },
      {
        en: 'Align on user flows, practical milestones, and realistic boundaries before writing implementation code.',
        ar: 'توضيح شكل الحل ومسار استخدامه ومراحل تنفيذه قبل الدخول في البرمجة.',
      },
    ],
    example: {
      en: 'In Duthur: designing a tailored inventory system tracking stock levels per size, with automated order verification and fulfillment alerts to eliminate manual errors.',
      ar: 'في متجر دُثور: تصميم نظام مخصص لإدارة المنتجات والمقاسات وحركات المخزون، مع أتمتة إشعارات الطلبات والشحن لتقليل الأخطاء البشرية.',
    },
    outcome: {
      en: 'A clear, agreed solution blueprint before implementation',
      ar: 'تصور واضح للحل قبل بدء التنفيذ',
    },
  },
  {
    number: '04',
    title: {
      en: 'Build & Refine',
      ar: 'التنفيذ والتحسين',
    },
    description: {
      en: 'I build the solution in phases, test it under real operational use, review feedback with the team, and refine what needs further improvement.',
      ar: 'أطوّر الحل على مراحل، وأختبره مع الاستخدام الفعلي، وأراجع ملاحظات الفريق، ثم أحسّن ما يحتاج إلى تطوير.',
    },
    highlights: [
      {
        en: 'Deliver working phases early so teams can test real workflows rather than waiting for a theoretical final handoff.',
        ar: 'تسليم نسخ عملية متدرجة تتيح التجربة الواقعية مبكرًا بدل انتظار نهاية المشروع لاكتشاف التفاصيل.',
      },
      {
        en: 'Iterate on edge cases, bilingual UX, speed, and operational clarity based on actual day-to-day feedback.',
        ar: 'متابعة الاستخدام الفعلي ومعالجة الحالات الاستثنائية وتحسين الواجهات والأداء وفق ملاحظات الفريق.',
      },
    ],
    example: {
      en: 'In 7analaan & Sahwa: launching the core media and catalog interfaces as an early working version, testing with the team, and refining media playback and layout based on real usage.',
      ar: 'في حان الآن وصحوة: إطلاق الواجهات الأساسية كنسخة أولى قابلة للتجربة المباشرة مع الفريق، ثم تحسين تجربة التصفح وعرض الوسائط بناءً على الاستخدام الفعلي.',
    },
    outcome: {
      en: 'A working release ready for use and iteration',
      ar: 'نسخة عملية قابلة للاستخدام والتحسين',
    },
  },
];
