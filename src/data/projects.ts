import type { LocalizedText } from './types';

export type ProjectCoverTheme =
  | 'id8'
  | 'kashida'
  | 'duthur'
  | '7analaan'
  | 'sahwa';

export interface ProjectCaseStudy {
  context: LocalizedText;
  solution: LocalizedText;
  outcome: LocalizedText;
}

export interface Project {
  slug: string;
  order: number;
  featuredOnHome: boolean;
  status: 'published' | 'draft';
  coverTheme: ProjectCoverTheme;
  coverAlt: LocalizedText;
  title: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  dates: {
    start: string;
    end?: string;
  };
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  repoPublic: boolean;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'id8-media',
    order: 1,
    featuredOnHome: true,
    status: 'published',
    coverTheme: 'id8',
    coverAlt: {
      en: 'Illustration of live broadcast scheduling, rundown blocks, and newsroom content flow for ID8 Media',
      ar: 'رسم توضيحي لجدولة البث التلفزيوني وترتيب الفقرات وتدفق المحتوى الإخباري في ID8 Media',
    },
    title: {
      en: 'ID8 Media',
      ar: 'ID8 Media | آي دي إيت ميديا',
    },
    category: {
      en: 'Broadcast & Newsroom Web Applications',
      ar: 'تطبيقات البث التلفزيوني وغرف الأخبار',
    },
    summary: {
      en: 'Frontend interfaces and data integrations supporting live television production, program scheduling, and digital news desks. Built within the ID8 Media engineering team for fast-paced broadcast operations.',
      ar: 'تطوير واجهات أمامية وربط خدمات برمجية لدعم الإنتاج التلفزيوني المباشر، وجدولة البرامج، ومنصات الأخبار الرقمية ضمن فريق التطوير في ID8 Media.',
    },
    role: {
      en: 'Frontend Development Intern → Junior Frontend Developer',
      ar: 'متدرب تطوير واجهات أمامية ← مطور واجهات أمامية (Junior)',
    },
    dates: {
      start: '2023-07',
      end: '2024-08',
    },
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Strapi CMS',
      'REST APIs',
    ],
    liveUrl: 'https://id8media.com/en',
    repoPublic: false,
    caseStudy: {
      context: {
        en: 'Television producers and editorial desks operate under strict live broadcast deadlines. Coordinating program rundowns, scheduling segments, and updating on-air tickers or digital news pages requires responsive, predictable browser tools where editors can act immediately without interface lag or confusing layouts.',
        ar: 'يعمل منتجو التلفزيون وغرف الأخبار تحت ضغط المواعيد اللحظية للبث المباشر. لذلك يحتاج تنسيق الفقرات وجدولة البرامج وتحديث شريط الأخبار والمنصات الرقمية إلى أدوات ويب سريعة وواضحة تتيح للفريق اتخاذ القرار والتنفيذ فورًا دون بطء أو تعقيد في الواجهة.',
      },
      solution: {
        en: 'Working within the engineering and design team at ID8 Media, my role focused on frontend implementation and service integration. I built and refined modular web interfaces for live producer workflows, program scheduling views, election data displays, and CMS-driven news applications connected to Strapi and internal REST APIs.',
        ar: 'ضمن فريق الهندسة والتصميم في ID8 Media، تركزت مساهمتي على تطوير الواجهات الأمامية وربطها بالخدمات البرمجية. نفذت وطوّرت واجهات عمل للمنتجين، وشاشات جدولة البرامج، وعرض بيانات التغطيات الانتخابية، وتطبيقات النشر الإخباري المتصلة بنظام Strapi وواجهات البرمجة الداخلية.',
      },
      outcome: {
        en: 'Delivered stable, clear interfaces that helped production and editorial teams manage rundowns, structured content updates, and live data feeds with greater consistency across desktop and mobile screens.',
        ar: 'توفير واجهات مستقرة وواضحة ساعدت فرق الإنتاج والتحرير على إدارة ترتيب الفقرات وتحديث المحتوى والبيانات الحية بسلاسة واتساق عبر مختلف الشاشات.',
      },
    },
  },
  {
    slug: 'kashida',
    order: 2,
    featuredOnHome: true,
    status: 'published',
    coverTheme: 'kashida',
    coverAlt: {
      en: 'Illustration of media workflow automation, Arabic typography rendering, and content production pipelines for Kashida',
      ar: 'رسم توضيحي لمسارات أتمتة العمل الإعلامي وأدوات إنتاج المحتوى والطباعة العربية في كشيدة',
    },
    title: {
      en: 'Kashida | كشيدة',
      ar: 'كشيدة | Kashida',
    },
    category: {
      en: 'Media Workflow Analysis & AI Automation',
      ar: 'تحليل سير العمل الإعلامي وأتمتة الذكاء الاصطناعي',
    },
    summary: {
      en: 'Custom software and AI-assisted production workflows designed around how Arabic newsrooms and media teams operate. Connects editorial planning, visual asset generation, and multi-platform publishing.',
      ar: 'حلول برمجية مخصصة ومسارات إنتاج مدعومة بالذكاء الاصطناعي مصممة وفق طريقة عمل غرف الأخبار والفرق الإعلامية، لربط التخطيط التحريري بالتصميم البصري والنشر المتعدد.',
    },
    role: {
      en: 'Co-Founder',
      ar: 'شريك مؤسس',
    },
    dates: {
      start: '2026-11',
    },
    stack: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'AI Workflows',
      'Arabic Typography',
    ],
    liveUrl: 'https://kashida.io/',
    repoPublic: false,
    caseStudy: {
      context: {
        en: 'Media teams and digital newsrooms frequently lose hours to fragmented manual steps between editorial drafting, resizing visual templates for each platform, fixing Arabic typography issues, and copying content across chat channels. During breaking coverage, these bottlenecks slow down publishing and drain creative focus.',
        ar: 'تستهلك الفرق الإعلامية وغرف الأخبار وقتًا طويلًا في خطوات يدوية متفرقة بين إعداد المادة التحريرية، وتعديل مقاسات التصاميم لكل منصة، وضبط الخطوط العربية، ونسخ المحتوى بين قنوات التواصل. وتتحول هذه الخطوات المتكررة أثناء التغطيات السريعة إلى عائق يؤخر النشر ويستنزف جهد الفريق.',
      },
      solution: {
        en: 'As Co-Founder, I start by auditing daily operations with editors, designers, and producers to identify exact friction points. I then architect and build tailored web tools, deterministic Arabic visual rendering engines, and human-in-the-loop AI workflows that automate repetitive formatting while keeping editorial review in full control.',
        ar: 'بصفتي شريكًا مؤسسًا، أبدأ بدراسة سير العمل اليومي مع المحررين والمصممين والمنتجين لتحديد نقاط الاختناق بدقة. وبناءً على ذلك أصمم وأطوّر أدوات ويب مخصصة، ومحركات معالجة بصرية تدعم خصوصية الطباعة العربية، ومسارات أتمتة ذكية تختصر المهام المتكررة مع إبقاء المراجعة التحريرية تحت سيطرة الفريق.',
      },
      outcome: {
        en: 'Replaces scattered manual handoffs with a unified production pipeline, giving media teams faster turnaround, consistent brand presentation, and reliable editorial control.',
        ar: 'تحويل الخطوات اليدوية المبعثرة إلى مسار إنتاج مترابط يمنح الفرق الإعلامية سرعة أكبر في الإنجاز، واتساقًا في الهوية البصرية، وتحكمًا واضحًا في جودة النشر.',
      },
    },
  },
  {
    slug: 'duthur',
    order: 3,
    featuredOnHome: true,
    status: 'published',
    coverTheme: 'duthur',
    coverAlt: {
      en: 'Illustration of trilingual e-commerce products, size-level inventory tracking, and order management for DUTHUR',
      ar: 'رسم توضيحي لمنصة التجارة الإلكترونية وإدارة المنتجات والمخزون والطلبات في دُثر',
    },
    title: {
      en: 'DUTHUR | دُثر',
      ar: 'دُثر | DUTHUR',
    },
    category: {
      en: 'E-Commerce Brand & Custom Storefront System',
      ar: 'علامة تجارية ونظام متجر إلكتروني مخصص',
    },
    summary: {
      en: 'Apparel brand in Türkiye alongside a custom-engineered trilingual (AR/EN/TR) commerce and inventory system designed to replace generic SaaS platform limitations.',
      ar: 'علامة ملابس في تركيا مع تصميم وتطوير نظام متجر ومخزون مخصص بثلاث لغات (العربية والإنجليزية والتركية) لتجاوز قيود المنصات الجاهزة.',
    },
    role: {
      en: 'Co-Founder & Full-Stack Engineer',
      ar: 'شريك مؤسس ومطور برمجيات',
    },
    dates: {
      start: '2025-03',
    },
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Zod',
    ],
    liveUrl: 'https://duthur.co/',
    repoPublic: false,
    caseStudy: {
      context: {
        en: 'Operating an apparel brand in Türkiye on off-the-shelf SaaS store templates meant recurring platform fees and rigid limitations around trilingual shopping (Arabic RTL, English, and Turkish), province-level shipping rules, and frictionless mobile checkout.',
        ar: 'فرض تشغيل علامة ملابس في تركيا على قوالب المتاجر الجاهزة تكاليف اشتراك متكررة وقيودًا واضحة في تخصيص تجربة التسوق بثلاث لغات (العربية والإنجليزية والتركية)، إلى جانب صعوبة ضبط الشحن المحلي حسب الولاية وتبسيط إتمام الطلب عبر الهاتف.',
      },
      solution: {
        en: 'While the live storefront continues serving customers at duthur.co, I analyzed the brand’s exact operational workflow and engineered a standalone replacement platform. It features a trilingual catalog, server-validated order creation and size-level stock tracking in PostgreSQL, and a protected admin dashboard for products, discounts, and orders.',
        ar: 'بالتوازي مع عمل المتجر القائم حاليًا على duthur.co، حللت الاحتياجات التشغيلية الفعلية للعلامة وصممت وبنيت منصة بديلة مستقلة. تضم المنصة المخصصة واجهة تسوق بثلاث لغات، ونظامًا للتحقق من الأسعار والخصومات ومخزون كل مقاس على الخادم، ولوحة إدارة محمية للمنتجات والطلبات.',
      },
      outcome: {
        en: 'Prepared a complete, brand-owned commerce system undergoing final cutover testing—eliminating third-party template constraints and centralizing inventory and order control.',
        ar: 'تجهيز نظام تجارة إلكترونية مملوك بالكامل للعلامة التجارية ويجري حاليًا اختباره النهائي للانتقال الكامل، مما يلغي قيود المنصات الجاهزة ويوحّد إدارة المخزون والطلبات.',
      },
    },
  },
  {
    slug: '7analaan',
    order: 4,
    featuredOnHome: false,
    status: 'published',
    coverTheme: '7analaan',
    coverAlt: {
      en: 'Illustration of long-form episodes, vertical short clips, and digital media publishing for 7analaan',
      ar: 'رسم توضيحي لمنصة عرض الحلقات والمقاطع القصيرة وإدارة المحتوى في حان الآن',
    },
    title: {
      en: '7analaan | حان الآن',
      ar: 'حان الآن | 7analaan',
    },
    category: {
      en: 'Digital Media & Episode Platform',
      ar: 'منصة إعلامية لعرض الحلقات والمرئيات',
    },
    summary: {
      en: 'Dedicated Arabic web platform organizing full-length episodes, vertical short clips, and distribution channels in one fast, easy-to-update brand destination.',
      ar: 'منصة ويب عربية تجمع الحلقات الكاملة والمقاطع القصيرة وقنوات التوزيع في وجهة رقمية موحدة وسريعة وسهلة التحديث.',
    },
    role: {
      en: 'Frontend & Web Developer',
      ar: 'مطور ويب وواجهات أمامية',
    },
    dates: {
      start: '2024-09',
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
    ],
    liveUrl: 'https://7analaan.com/',
    repoPublic: false,
    caseStudy: {
      context: {
        en: 'Independent digital media shows publishing across YouTube and social platforms often struggle to present a cohesive brand identity or help viewers browse past episodes and short clips in one organized place without complex CMS maintenance.',
        ar: 'تواجه البرامج الإعلامية الرقمية المعتمدة على منصات التواصل صعوبة في إبراز هويتها المستقلة وتنظيم أرشيف الحلقات الطويلة والمقاطع القصيرة في مكان واحد، دون إثقال الفريق الصغير بنظام إدارة محتوى معقد.',
      },
      solution: {
        en: 'I designed and built a fast, RTL-first Arabic web platform for 7analaan with dedicated sections for featured episodes, vertical Shorts, and community channels. Content is structured around a single, well-documented configuration source so the team can publish new episodes in minutes.',
        ar: 'صممت وطوّرت منصة ويب عربية سريعة ومبنية أصلًا لاتجاه القراءة من اليمين إلى اليسار، مع أقسام مخصصة للحلقات الكاملة والمقاطع القصيرة وقنوات المتابعة. كما نظمت بيانات المحتوى في ملف مركزي واضح يتيح للفريق إضافة الحلقات الجديدة خلال دقائق.',
      },
      outcome: {
        en: 'Gave the program a dedicated digital home with clear Arabic typography, smooth mobile browsing, and a low-friction publishing workflow.',
        ar: 'منح البرنامج وجهة رقمية مستقلة بهوية عربية واضحة وتصفح سريع على الهواتف، مع آلية تحديث بسيطة لا تتطلب جهدًا تقنيًا مستمرًا.',
      },
    },
  },
  {
    slug: 'sahwa',
    order: 5,
    featuredOnHome: false,
    status: 'published',
    coverTheme: 'sahwa',
    coverAlt: {
      en: 'Illustration of public library catalog and internal team visual studio for Sahwa',
      ar: 'رسم توضيحي لدليل المكتبة العام وأداة التصميم الداخلية لفرق العمل في صحوة',
    },
    title: {
      en: 'Sahwa | صحوة',
      ar: 'صحوة | Sahwa',
    },
    category: {
      en: 'Community Library Portal & Team Visual Tool',
      ar: 'بوابة مكتبة عامة وأداة تصميم داخلية للفريق',
    },
    summary: {
      en: 'Arabic web platform uniting a public searchable book library and university directory with a password-protected browser studio for producing consistent team visuals.',
      ar: 'منصة عربية تجمع بين بوابة عامة للمكتبة ودليل الجامعات وبين أداة تصميم محمية على المتصفح لإنتاج تصاميم الفريق بهوية موحدة.',
    },
    role: {
      en: 'Full-Stack & Frontend Engineer',
      ar: 'مهندس برمجيات وتطوير واجهات',
    },
    dates: {
      start: '2025-01',
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js Serverless',
      'HTML5 Canvas',
    ],
    liveUrl: 'https://sahwa.world/',
    repoPublic: false,
    caseStudy: {
      context: {
        en: 'Distributed student and volunteer teams across multiple universities needed a single Arabic portal for their book library and community channels, alongside a practical way for non-designers to produce on-brand announcement posters without desktop graphics software.',
        ar: 'احتاجت فرق العمل الطلابية والتطوعية الموزعة بين عدة جامعات إلى بوابة عربية موحدة تعرض فهرس المكتبة وروابط المجتمعات، إلى جانب وسيلة عملية تمكّن أعضاء الفريق من إنتاج إعلانات بصرية متناسقة دون الحاجة إلى برامج تصميم متخصصة.',
      },
      solution: {
        en: 'I separated public visitor browsing from internal team tooling within one unified deployment. I built the mobile-friendly Arabic library catalogue and university directory, and engineered an access-controlled browser studio with server-verified authentication, embedded Arabic fonts, and direct PNG export.',
        ar: 'فصلت مسار الزائر العام عن أدوات الفريق الداخلية ضمن منصة واحدة؛ فطوّرت فهرس المكتبة القابل للبحث ودليل الجامعات بتجربة سريعة على الهاتف، وبنيت استوديو تصميم محميًا بتسجيل الدخول يدعم الخطوط العربية وتصدير البطاقات مباشرة بصيغة PNG.',
      },
      outcome: {
        en: 'Enabled visitors to search and explore the library easily while allowing team members to generate consistent visual announcements directly from their browsers.',
        ar: 'تمكين الزوار من البحث في المكتبة والوصول إلى القنوات بسهولة، ومساعدة أعضاء الفريق على إنتاج بطاقات بصرية موحدة الهوية مباشرة من المتصفح.',
      },
    },
  },
];

export const publishedProjects = projects
  .filter((p) => p.status === 'published')
  .sort((a, b) => a.order - b.order);

export const featuredProjects = publishedProjects.filter(
  (p) => p.featuredOnHome
);

export function getProjectBySlug(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}
