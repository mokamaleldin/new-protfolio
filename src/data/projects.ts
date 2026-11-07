import type { AssetImage, LocalizedText } from './types';

export interface ProjectCaseStudy {
  challenge: LocalizedText;
  analysis?: LocalizedText;
  solution: LocalizedText;
  implementation: LocalizedText;
  decisions?: LocalizedText;
  outcomes?: LocalizedText;
}

export interface Project {
  slug: string;
  order: number;
  featured: boolean;
  status: 'published' | 'draft';
  title: LocalizedText;
  shortTitle: string;
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
  thumbnail?: AssetImage;
  hero?: AssetImage;
  gallery: AssetImage[];
  highlights: LocalizedText[];
  caseStudy: ProjectCaseStudy;
  needsVerification: string[];
}

export const projects: Project[] = [
  {
    slug: 'kashida',
    order: 1,
    featured: true,
    status: 'published',
    title: {
      en: 'Kashida | كشيدة',
      ar: 'كشيدة | Kashida',
    },
    shortTitle: 'KS',
    category: {
      en: 'Media Technology · AI Automation · SaaS',
      ar: 'تكنولوجيا الإعلام · أتمتة ذكية · SaaS',
    },
    summary: {
      en: 'Media technology company delivering workflow analysis, custom software, and AI-powered production automation for newsrooms and digital publishers.',
      ar: 'شركة تكنولوجيا إعلام بتقدم تحليل لسير العمل، وبرمجيات مخصصة، وحلول أتمتة ذكية لغرف الأخبار ومنصات النشر الرقمي.',
    },
    role: {
      en: 'Co-Founder — Systems Analysis, Solution Design & Engineering',
      ar: 'شريك مؤسس — تحليل الأنظمة وتصميم الحلول والتطوير البرمجي',
    },
    dates: {
      start: '2026-11',
    },
    stack: [
      'Next.js',
      'TypeScript',
      'React',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'AI Workflows',
      'Arabic Typography',
    ],
    liveUrl: 'https://kashida.io/',
    repoPublic: false,
    thumbnail: {
      src: '/images/projects/kashida/cover.webp',
      alt: {
        en: 'Kashida media technology platform preview',
        ar: 'معاينة منصة كشيدة لتكنولوجيا الإعلام',
      },
      placeholder: true,
    },
    hero: {
      src: '/images/projects/kashida/hero.webp',
      alt: {
        en: 'Kashida systems analysis and media automation suite',
        ar: 'منظومة كشيدة لتحليل الأنظمة وأتمتة الإنتاج الإعلامي',
      },
      placeholder: true,
    },
    gallery: [],
    highlights: [
      {
        en: 'Analyzing end-to-end media production workflows and editorial bottlenecks.',
        ar: 'تحليل سير العمل في الإنتاج الإعلامي وتحديد نقاط الاختناق في غرف الأخبار.',
      },
      {
        en: 'Translating operational requirements into clear software architectures and automation pipelines.',
        ar: 'تحويل الاحتياجات التشغيلية الفعلية لمعمارية برمجية ومسارات أتمتة واضحة.',
      },
      {
        en: 'Building high-accuracy Arabic visual templating and automated publishing tooling.',
        ar: 'تطوير أدوات تصميم بصري ونشر آلي بتدعم تفاصيل الطباعة العربية بدقة.',
      },
      {
        en: 'Leading client communication, technical scoping, and delivery quality.',
        ar: 'إدارة التواصل التقني مع العملاء، وتحديد نطاق المشاريع، وضمان جودة التسليم.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Modern Arabic media teams often rely on fragmented manual steps across editorial planning, visual asset generation, and multi-channel publishing—slowing down breaking news turnaround and draining creative capacity.',
        ar: 'فرق الإعلام العربي غالباً بتعتمد على خطوات يدوية متفرقة بين التخطيط التحريري، وتجهيز التصاميم البصرية، والنشر على المنصات المختلفة، وده بيبطّأ سرعة تغطية الأخبار العاجلة وبيستهلك وقت الفريق.',
      },
      analysis: {
        en: 'By auditing daily newsroom operations directly with editors, designers, and producers, recurring friction points were mapped: repetitive template resizing, inconsistent Arabic typography rendering, and manual copy-pasting between chat channels and design tools.',
        ar: 'من خلال دراسة الشغل اليومي مع المحررين والمصممين والمنتجين، حددنا المشاكل المتكررة: إعادة تحجيم القوالب يدوياً، ومشاكل تنسيق الخطوط العربية، والنسخ واللصق المتكرر بين قنوات التواصل وبرامج التصميم.',
      },
      solution: {
        en: 'Kashida structures media technology around practical workflow automation—combining interactive web editors, deterministic Arabic rendering engines, and AI-assisted content pipelines tailored to each newsroom.',
        ar: 'كشيدة بتبني حلول تقنية عملية بتربط بين محررات ويب تفاعلية، ومحركات معالجة نصوص وتصاميم عربية دقيقة، ومسارات أتمتة مدعومة بالذكاء الاصطناعي مفصلة على طريقة شغل كل مؤسسة إعلامية.',
      },
      implementation: {
        en: 'Across Kashida initiatives, my work spans client discovery, requirements engineering, system architecture, full-stack Next.js/TypeScript and Python development, and iterative deployment with media operations teams.',
        ar: 'دوري في كشيدة بيشمل فهم احتياجات العملاء، وتحليل المتطلبات، وتصميم معمارية النظام، والتطوير باستخدام Next.js وTypeScript وPython، ومتابعة التشغيل الفعلي مع فرق الإعلام.',
      },
      decisions: {
        en: 'Prioritized deterministic layout rules and human-in-the-loop review controls over black-box AI generation so editorial teams keep strict brand and factual accuracy.',
        ar: 'ركزنا على قواعد تصميم دقيقة مع إبقاء المراجعة البشرية في قلب العملية بدل الاعتماد الأعمى على التوليد العشوائي، عشان نحافظ على الهوية البصرية والدقة التحريرية.',
      },
    },
    needsVerification: [
      'Replace cover.webp and hero.webp with authorized high-resolution Kashida product screenshots when ready.',
    ],
  },
  {
    slug: 'id8-media',
    order: 2,
    featured: true,
    status: 'published',
    title: {
      en: 'ID8 Media',
      ar: 'ID8 Media | آي دي إيت ميديا',
    },
    shortTitle: 'ID8',
    category: {
      en: 'Broadcast & Newsroom Web Applications',
      ar: 'تطبيقات البث التلفزيوني وغرف الأخبار',
    },
    summary: {
      en: 'Frontend engineering contributions to real-time television production interfaces, scheduling workflows, election tickers, and CMS-driven news applications.',
      ar: 'تطوير واجهات برمجية لتطبيقات الإنتاج التلفزيوني اللحظي، وجدولة البرامج، وشاشات تغطية الانتخابات، ومنصات الأخبار.',
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
    thumbnail: {
      src: '/images/projects/id8media/cover.webp',
      alt: {
        en: 'ID8 Media broadcast technology work',
        ar: 'أعمال تقنيات البث في ID8 Media',
      },
      placeholder: true,
    },
    hero: {
      src: '/images/projects/id8media/hero.webp',
      alt: {
        en: 'ID8 Media interfaces overview',
        ar: 'نظرة عامة على واجهات مشاريع ID8 Media',
      },
      placeholder: true,
    },
    gallery: [],
    highlights: [
      {
        en: 'Contributed to a real-time web application supporting TV channel producers during live workflows.',
        ar: 'المساهمة في بناء تطبيق ويب لحظي بيساعد منتجي القنوات التلفزيونية أثناء سير البث.',
      },
      {
        en: 'Implemented scheduling views, content management modules, and live ticker/election data displays.',
        ar: 'تطوير واجهات جدولة المحتوى، ووحدات إدارة المحتوى، وعرض بيانات الانتخابات وشريط الأخبار.',
      },
      {
        en: 'Integrated frontend applications with REST APIs and Strapi CMS alongside senior engineers and designers.',
        ar: 'ربط الواجهات الأمامية مع واجهات البرمجة (APIs) ونظام Strapi بالتعاون مع فريق التطوير والتصميم.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Television producers and digital news desks require responsive, low-latency browser interfaces to coordinate rundowns, manage incoming feeds, and publish structured content under live broadcast deadlines.',
        ar: 'منتجو التلفزيون وغرف الأخبار الرقمية بيحتاجوا واجهات ويب سريعة ومستقرة لتنسيق الفقرات، وإدارة المحتوى المتدفق، والنشر تحت ضغط البث المباشر.',
      },
      analysis: {
        en: 'Working within the engineering team at ID8 Media, I learned firsthand how broadcast operations depend on predictable UI state, clear visual hierarchy, and reliable CMS data contracts.',
        ar: 'خلال عملي ضمن فريق التطوير في ID8 Media، اتعلمت عن قرب إزاي بيئة البث الإخباري بتعتمد على ثبات الواجهة ووضوح تسلسل المعلومات وسهولة الاستخدام السريع.',
      },
      solution: {
        en: 'Built and refined modular React and Next.js interfaces connected to Strapi and internal APIs—covering producer tools, scheduling workflows, election graphics data feeds, and responsive news properties.',
        ar: 'شاركت في تطوير وتحسين واجهات مبنية بـ React وNext.js مربوطة مع Strapi وواجهات برمجية داخلية، شملت أدوات للمنتجين، وجدولة المحتوى، وتغذية بيانات الانتخابات، ومواقع إخبارية متجاوبة.',
      },
      implementation: {
        en: 'Delivered component libraries and page implementations using React, Next.js, Material UI, and Tailwind CSS while collaborating with backend engineers, motion designers, and product leads. Note: these systems were built by the broader ID8 Media team; my scope focused on frontend implementation and API integration.',
        ar: 'نفذت مكونات وصفحات ويب باستخدام React وNext.js وMaterial UI وTailwind CSS بالتعاون مع مهندسي الباك إند ومصممي الجرافيك. (ملاحظة: الأنظمة دي هي نتاج عمل فريق ID8 Media المتكامل، وكان دوري مركزاً على تطوير الواجهات الأمامية وربط الـ APIs).',
      },
    },
    needsVerification: [
      'Confirm which public screenshots from ID8 Media projects are approved for portfolio display.',
    ],
  },
  {
    slug: 'sahwa',
    order: 3,
    featured: true,
    status: 'published',
    title: {
      en: 'Sahwa | صحوة',
      ar: 'صحوة | Sahwa',
    },
    shortTitle: 'SW',
    category: {
      en: 'Digital Platform · Team Operations · Visual Studio',
      ar: 'منصة رقمية · إدارة فرق · استوديو بصري',
    },
    summary: {
      en: 'Arabic digital platform combining a public university and library portal with an authenticated browser-based visual poster studio for team operations.',
      ar: 'منصة رقمية عربية بتجمع بين بوابة عامة للجامعات والمكتبة وبين استوديو تصميم بوسترات محمي لتنظيم شغل الفريق.',
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
      'Canvas / PNG Export',
    ],
    liveUrl: 'https://sahwa.world/',
    repoPublic: false,
    thumbnail: {
      src: '/images/projects/sahwa/cover.webp',
      alt: {
        en: 'Sahwa digital platform preview',
        ar: 'معاينة منصة صحوة الرقمية',
      },
      placeholder: true,
    },
    hero: {
      src: '/images/projects/sahwa/hero.webp',
      alt: {
        en: 'Sahwa platform and internal visual studio architecture',
        ar: 'منصة صحوة واستوديو التصميم الداخلي',
      },
      placeholder: true,
    },
    gallery: [],
    highlights: [
      {
        en: 'Public Arabic portal featuring university directories, community channels, and a searchable book library catalogue.',
        ar: 'بوابة عربية عامة بتضم دليل الجامعات، وقنوات التواصل، وكتالوج مكتبة قابل للبحث.',
      },
      {
        en: 'Access-controlled Sahwa Studio (/studio) enabling team members to generate branded Arabic posters with embedded typography and portrait tools.',
        ar: 'استوديو صحوة المحمي بتسجيل الدخول (/studio) اللي بيسمح لأعضاء الفريق بتصميم وتصدير بوسترات عربية بهوية موحدة مباشرة من المتصفح.',
      },
      {
        en: 'Server-verified session authentication using Node.js scrypt password hashing and signed HTTP-only cookies.',
        ar: 'نظام مصادقة آمن على السيرفر باستخدام تشفير scrypt وملفات تعريف ارتباط (HTTP-only cookies) لحماية الأدوات الداخلية.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Student and volunteer teams across multiple universities needed a unified Arabic web presence for their library and community links, alongside a consistent way to produce branded visual announcements without requiring desktop design software.',
        ar: 'فرق العمل الطلابية والتطوعية في عدة جامعات كانت محتاجة منصة عربية موحدة تعرض المكتبة وروابط المجتمعات، وفي نفس الوقت طريقة سهلة لإنتاج تصاميم بصرية موحدة الهوية من غير الحاجة لبرامج تصميم معقدة.',
      },
      analysis: {
        en: 'Separating public visitor journeys from internal volunteer tooling was essential: visitors needed fast, mobile-friendly browsing, while the media team needed authenticated access to poster templates and Arabic font assets.',
        ar: 'فصل تجربة الزائر العام عن أدوات الفريق الداخلية كان خطوة أساسية: الزوار محتاجين تصفح سريع وواضح على الموبايل، بينما فريق الإعلام محتاج وصول محمي لقوالب البوسترات والخطوط العربية.',
      },
      solution: {
        en: 'Unified the public Sahwa website and the authenticated Sahwa Studio inside a single Vercel deployment, pairing a React/TypeScript public portal with server-guarded studio endpoints.',
        ar: 'دمجنا الموقع العام مع استوديو صحوة المحمي في مشروع واحد على Vercel، بيجمع بين واجهة عامة بـ React وTypeScript وبين مسارات سيرفر محمية لأدوات التصميم.',
      },
      implementation: {
        en: 'Built the public views (`/`, `/universities`, `/social`, `/library`) in React, TypeScript, and Tailwind CSS, and implemented `/api/auth` and `/api/studio` with scrypt verification, signed cookies, and client-side canvas PNG export.',
        ar: 'طورت الصفحات العامة (`/`, `/universities`, `/social`, `/library`) بـ React وTypeScript وTailwind CSS، مع بناء مسارات التحقق `/api/auth` و`/api/studio` وأدوات تصدير الصور بصيغة PNG.',
      },
    },
    needsVerification: [
      'Capture approved public homepage screenshot from sahwa.world.',
    ],
  },
  {
    slug: '7analaan',
    order: 4,
    featured: true,
    status: 'published',
    title: {
      en: '7analaan | حان الآن',
      ar: 'حان الآن | 7analaan',
    },
    shortTitle: '7A',
    category: {
      en: 'Media Platform · Digital Experience',
      ar: 'منصة إعلامية · تجربة رقمية',
    },
    summary: {
      en: 'Arabic digital media platform built around structured episode publishing, YouTube and Shorts integration, and streamlined content updates.',
      ar: 'منصة إعلامية رقمية عربية لعرض الحلقات والمرئيات مع ربط مباشر بيوتيوب والشورتس وإدارة محتوى مبسطة.',
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
    thumbnail: {
      src: '/images/projects/7analaan/cover.png',
      alt: {
        en: '7analaan digital media platform screenshot',
        ar: 'لقطة شاشة من منصة حان الآن الإعلامية',
      },
    },
    hero: {
      src: '/images/projects/7analaan/cover.png',
      alt: {
        en: '7analaan Arabic media web interface',
        ar: 'واجهة منصة حان الآن الرقمية',
      },
    },
    gallery: [],
    highlights: [
      {
        en: 'Responsive RTL Arabic interface showcasing full-length episodes, vertical shorts, and program highlights.',
        ar: 'واجهة عربية متجاوبة بالكامل (RTL) بتعرض الحلقات الكاملة والمقاطع القصيرة (Shorts) بشكل منظم.',
      },
      {
        en: 'Single-source content configuration (`content.ts`) designed so editors can publish new episodes in seconds.',
        ar: 'هيكلة محتوى مركزية ومبسطة بتسمح بإضافة وتحديث الحلقات والشورتس الجديدة في ثواني.',
      },
      {
        en: 'Custom Arabic typography integration and fast client-side routing.',
        ar: 'ضبط دقيق للخطوط العربية مع تنقل سريع وسلس بين صفحات المنصة.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Independent digital media shows need a dedicated brand home beyond social algorithms—one that organizes long-form episodes and short clips while remaining effortless for a small team to update.',
        ar: 'البرامج والمنصات الإعلامية الرقمية بتحتاج بيت رقمي خاص بيها يعرض هويتها ويجمع حلقاتها الطويلة والقصيرة في مكان واحد، مع سهولة التحديث المستمر بدون تعقيد تقني.',
      },
      solution: {
        en: 'Created a fast, RTL-first web platform for 7analaan with dedicated sections for featured episodes, YouTube Shorts, and social channels, backed by a clean, self-documented content file.',
        ar: 'بناء منصة ويب سريعة مصممة خصيصاً للغة العربية تعرض أحدث الحلقات والشورتس وقنوات التواصل، مع دليل واضح لتحديث المحتوى بسهولة.',
      },
      implementation: {
        en: 'Implemented with React 18, TypeScript, Vite, Tailwind CSS, and React Router, including SEO metadata management via `react-helmet-async` and custom Arabic font loading.',
        ar: 'تم التنفيذ باستخدام React 18 وTypeScript وVite وTailwind CSS مع ضبط عناوين الصفحات لمحركات البحث وتحسين تحميل الخطوط العربية.',
      },
    },
    needsVerification: [
      'Confirm any additional credits or team details to mention for 7analaan.',
    ],
  },
  {
    slug: 'duthur',
    order: 5,
    featured: true,
    status: 'published',
    title: {
      en: 'DUTHUR',
      ar: 'دُثر | DUTHUR',
    },
    shortTitle: 'DT',
    category: {
      en: 'E-Commerce · Entrepreneurship · Custom Storefront',
      ar: 'تجارة إلكترونية · ريادة أعمال · متجر مخصص',
    },
    summary: {
      en: 'Apparel brand in Türkiye and custom trilingual (AR/EN/TR) Next.js + Supabase commerce platform engineered to replace SaaS storefront overhead.',
      ar: 'علامة ملابس في تركيا مع تطوير منصة تجارة إلكترونية مخصصة بثلاث لغات (عربي/إنجليزي/تركي) مبنية بـ Next.js وSupabase.',
    },
    role: {
      en: 'Co-Founder & Full-Stack Engineer',
      ar: 'شريك مؤسس ومطور Full-Stack',
    },
    dates: {
      start: '2025-03',
    },
    stack: [
      'Next.js App Router',
      'TypeScript',
      'Supabase Postgres',
      'Supabase Auth & Storage',
      'Zod',
      'Tailwind CSS',
    ],
    liveUrl: 'https://duthur.co/',
    repoPublic: false,
    thumbnail: {
      src: '/images/projects/duthur/cover.webp',
      alt: {
        en: 'DUTHUR apparel brand and commerce platform',
        ar: 'علامة دُثر ومنصة التجارة الإلكترونية',
      },
      placeholder: true,
    },
    hero: {
      src: '/images/projects/duthur/hero.webp',
      alt: {
        en: 'DUTHUR storefront and inventory system',
        ar: 'واجهة متجر دُثر ونظام إدارة المخزون',
      },
      placeholder: true,
    },
    gallery: [],
    highlights: [
      {
        en: 'Operates a live apparel storefront at duthur.co while engineering a standalone Next.js + Supabase replacement platform.',
        ar: 'إدارة المتجر الفعلي على duthur.co بالتوازي مع هندسة وبناء منصة بديلة مستقلة بالكامل باستخدام Next.js وSupabase.',
      },
      {
        en: 'Trilingual customer experience (Arabic with full RTL, English, and Turkish) covering all 81 provinces in Türkiye.',
        ar: 'تجربة تسوق بثلاث لغات (العربية بواجهة RTL كاملة، والإنجليزية، والتركية) بتغطي الشحن لكل الـ 81 ولاية في تركيا.',
      },
      {
        en: 'Server-side order creation via PostgreSQL RPC with authoritative price, discount, shipping, and size-level stock validation.',
        ar: 'إنشاء الطلبات والتحقق من الأسعار وكوبونات الخصم والشحن والمخزون لكل مقاس مباشرة داخل قاعدة بيانات PostgreSQL.',
      },
      {
        en: 'Protected admin dashboard with magic-link authentication for managing products, multi-image uploads, stock, orders, and customer messages.',
        ar: 'لوحة تحكم محمية للإدارة بتدعم رفع الصور المتعددة، ومتابعة مخزون المقاسات، وإدارة الطلبات والخصومات والرسائل.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Running a niche clothing brand in Türkiye on generic SaaS e-commerce templates introduced recurring subscription overhead and limited control over trilingual (Arabic/English/Turkish) UX and local checkout flows.',
        ar: 'تشغيل علامة ملابس في تركيا على منصات جاهزة كان بيفرض تكاليف اشتراك مستمرة وقيود على تخصيص تجربة المستخدم بثلاث لغات (عربي/إنجليزي/تركي) وخطوات الدفع والشحن المحلي.',
      },
      analysis: {
        en: 'Analyzed the exact operational needs of the store: size-variant stock tracking, province-based shipping across Türkiye, discount validation, bank-transfer/pickup workflows, and a fast mobile catalog without mandatory customer account creation.',
        ar: 'حللنا الاحتياجات الفعلية للمتجر: متابعة المخزون لكل مقاس، وحساب الشحن حسب الولاية في تركيا، وتفعيل أكواد الخصم، وإتمام الطلب بسرعة من الموبايل بدون إجبار العميل على إنشاء حساب.',
      },
      solution: {
        en: 'Alongside the currently live Shopify storefront at duthur.co, architected and built a standalone Next.js App Router and Supabase commerce application seeded with real product and inventory data.',
        ar: 'بجانب المتجر الحالي العامل على duthur.co، صممت وبنيت تطبيق متجر مستقل بالكامل باستخدام Next.js App Router وSupabase ومجهز ببيانات المنتجات والمخزون الفعلية.',
      },
      implementation: {
        en: 'Implemented PostgreSQL RPC functions so cart totals, discount rules, and stock decrements are validated atomically on the server, paired with a role-guarded `/admin` portal using Supabase magic-link authentication.',
        ar: 'برمجت دوال PostgreSQL RPC عشان يتم التحقق من الأسعار والخصومات وخصم المخزون بأمان تام على السيرفر، مع لوحة تحكم `/admin` محمية بصلاحيات الدخول عبر Supabase.',
      },
    },
    needsVerification: [
      'Note: duthur.co currently serves the live storefront while the standalone Next.js + Supabase rebuild undergoes final end-to-end cutover testing.',
    ],
  },
  {
    slug: 'skillhours',
    order: 6,
    featured: true,
    status: 'published',
    title: {
      en: 'SkillHours',
      ar: 'SkillHours | ساعات المهارة',
    },
    shortTitle: 'SH',
    category: {
      en: 'Mobile Application · Offline-First Productivity',
      ar: 'تطبيق موبايل · إنتاجية وتتبع المهارات',
    },
    summary: {
      en: 'Offline-first React Native & Expo mobile app for tracking deliberate practice hours, live focus sessions, and skill milestones in English and Arabic.',
      ar: 'تطبيق موبايل يعمل بدون إنترنت (Offline-First) لتتبع ساعات التعلم وجلسات التركيز ومحطات التقدم باللغتين العربية والإنجليزية.',
    },
    role: {
      en: 'Creator & Mobile Engineer',
      ar: 'مؤسس ومطور تطبيقات الموبايل',
    },
    dates: {
      start: '2026-01',
    },
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Expo Router',
      'AsyncStorage',
      'Zustand',
      'Zod',
      'i18n / RTL',
    ],
    repoUrl: 'https://github.com/mokamaleldin/SkillHours',
    repoPublic: false,
    thumbnail: {
      src: '/images/projects/skillhours/cover.webp',
      alt: {
        en: 'SkillHours mobile app preview',
        ar: 'معاينة تطبيق SkillHours للموبايل',
      },
      placeholder: true,
    },
    hero: {
      src: '/images/projects/skillhours/hero.webp',
      alt: {
        en: 'SkillHours bilingual skill tracking interface',
        ar: 'واجهة تطبيق SkillHours لتتبع ساعات التعلم',
      },
      placeholder: true,
    },
    gallery: [],
    highlights: [
      {
        en: 'Offline-first architecture storing skills, target hours, and practice sessions locally on device with zero mandatory account signup.',
        ar: 'تصميم يعمل بالكامل بدون اتصال بالإنترنت ويحفظ المهارات والأهداف والجلسات محلياً على جهاز المستخدم بدون إجبار على تسجيل حساب.',
      },
      {
        en: 'Supports quick-log actions (+15m, +30m, +60m), custom session entries, and a persistent live timer with pause and resume.',
        ar: 'يدعم الإضافة السريعة للوقت (+15 أو +30 أو +60 دقيقة)، أو إدخال جلسة مخصصة، بالإضافة لمؤقت مباشر يدعم الإيقاف المؤقت والاستئناف.',
      },
      {
        en: 'Full English and Arabic localization with native right-to-left (RTL) layout adaptation and validated JSON backup export/import.',
        ar: 'دعم كامل للغتين العربية والإنجليزية مع تخطيط RTL أصلي، وإمكانية تصدير واستيراد نسخة احتياطية بصيغة JSON بعد التحقق من صحتها.',
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Learners building long-term proficiency in a language, instrument, or technical craft often struggle to measure cumulative hours without noisy gamification, forced subscriptions, or cloud lock-in.',
        ar: 'أي شخص بيتعلم مهارة على المدى الطويل — زي لغة جديدة أو برمجة أو قراءة — بيحتاج يتابع إجمالي الساعات اللي استثمرها بهدوء ووضوح، من غير تعقيد أو اشتراكات إجبارية أو ربط بياناته بسحابة خارجية.',
      },
      solution: {
        en: 'Designed and engineered SkillHours: a calm, bilingual mobile tracker focused on deliberate practice hours, weekly rhythm charts, milestone checkpoints (25%, 50%, 75%, 100%), and complete local data ownership.',
        ar: 'صممت وطورت تطبيق SkillHours ليكون أداة هادئة وثنائية اللغة بتركز على حساب ساعات التدريب الفعلي، وعرض التقدم الأسبوعي، ومحطات الإنجاز، مع ملكية كاملة للبيانات على الجهاز.',
      },
      implementation: {
        en: 'Built with React Native, Expo, TypeScript, and Expo Router, using Zustand and local storage for instant offline persistence and Zod schemas to validate JSON data imports safely.',
        ar: 'تم تطوير التطبيق باستخدام React Native وExpo وTypeScript وExpo Router، مع إدارة الحالة بـ Zustand والتحقق من ملفات النسخ الاحتياطي عبر Zod.',
      },
    },
    needsVerification: [
      'Supply iOS Simulator / device screenshots for the SkillHours gallery.',
      'Repository is currently private; public visitors see the full case study without needing GitHub access.',
    ],
  },
];

export const publishedProjects = projects
  .filter((p) => p.status === 'published')
  .sort((a, b) => a.order - b.order);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}
