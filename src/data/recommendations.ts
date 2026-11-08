import type { LocalizedText } from './types';

export interface Recommendation {
  id: string;
  order: number;
  featuredOnHome: boolean;
  authorName: LocalizedText;
  role: LocalizedText;
  date: string;
  quote: LocalizedText;
}

export const recommendations: Recommendation[] = [
  {
    id: 'ahmed-hamzawi',
    order: 1,
    featuredOnHome: true,
    authorName: {
      en: 'Ahmed Hamzawi',
      ar: 'Ahmed Hamzawi',
    },
    role: {
      en: 'Chief AI Architect & Product Innovation Lead / CEO, GreenHills Tech',
      ar: 'كبير معماريي الذكاء الاصطناعي وقائد ابتكار المنتجات / الرئيس التنفيذي في GreenHills Tech',
    },
    date: '2024-08',
    quote: {
      en: 'His work ethic, ability to adapt quickly, and creativity never ceased to impress. He is an asset because he works well with people and has both talent and a pleasant attitude to each task at hand.',
      ar: 'أخلاقيات عمله، وقدرته على التكيف السريع، وإبداعه كانت دائمًا محل إعجاب. هو قيمة حقيقية لأي فريق لأنه يتعاون بسلاسة مع الآخرين، ويجمع بين الكفاءة والمرونة في كل مهمة.',
    },
  },
  {
    id: 'abdulrahman-sharara',
    order: 2,
    featuredOnHome: true,
    authorName: {
      en: 'AbdulRahman Sharara',
      ar: 'AbdulRahman Sharara',
    },
    role: {
      en: 'Motion Graphics Designer, ID8 Media',
      ar: 'مصمم موشن جرافيك في ID8 Media',
    },
    date: '2024-04',
    quote: {
      en: "Mohamed's expertise in both front-end and back-end development was invaluable to our team. He consistently delivered high-quality code and demonstrated a strong problem-solving ability, contributing significantly to the success of our projects.",
      ar: 'كانت خبرته في تطوير الواجهات الأمامية والـ Back-end ذات قيمة كبيرة لفريقنا في ID8 Media؛ إذ كان يسلّم كودًا عالي الجودة باستمرار، ويُظهر قدرة قوية على حل المشكلات، مما أسهم بوضوح في نجاح مشاريعنا.',
    },
  },
  {
    id: 'abdullah-naifeh',
    order: 3,
    featuredOnHome: true,
    authorName: {
      en: 'Abdullah Naifeh',
      ar: 'Abdullah Naifeh',
    },
    role: {
      en: 'Frontend Developer',
      ar: 'مطور واجهات أمامية',
    },
    date: '2024-08',
    quote: {
      en: "Mohamed consistently impressed me with his technical expertise, problem-solving skills, and commitment to quality. He's a great communicator and an even better teammate, always bringing positivity and innovation to the table.",
      ar: 'أبهرني محمد باستمرار بخبرته التقنية، ومهاراته في حل المشكلات، والتزامه بالجودة؛ فهو متواصل ممتاز، ويضيف دائمًا حلولًا مبتكرة وروحًا إيجابية إلى العمل.',
    },
  },
  {
    id: 'daria-shishkina',
    order: 4,
    featuredOnHome: false,
    authorName: {
      en: 'Daria Shishkina',
      ar: 'Daria Shishkina',
    },
    role: {
      en: 'Correspondent & Translator',
      ar: 'مراسلة صحفية ومترجمة',
    },
    date: '2024-04',
    quote: {
      en: 'He was completing tasks before the deadline, and is very ambitious and using creativity to achieve work goals alongside a pleasant personality.',
      ar: 'يلتزم بمهامه باستمرار وينجزها قبل الموعد النهائي، ويجمع بين الطموح والإبداع لتحقيق أهداف العمل.',
    },
  },
  {
    id: 'youssof-gehad',
    order: 5,
    featuredOnHome: false,
    authorName: {
      en: 'Youssof Gehad',
      ar: 'Youssof Gehad',
    },
    role: {
      en: 'Graphic Designer & Illustrator',
      ar: 'مصمم جرافيك ورسام توضيحي',
    },
    date: '2024-04',
    quote: {
      en: 'Mohamed is a very hard working Developer who consistently pushes the boundaries of his skills and capabilities, always seeking the opinions of people working in different areas from him.',
      ar: 'مطور مجتهد يطوّر مهاراته وقدراته باستمرار، ويحرص دائمًا على الاستماع إلى آراء المتخصصين في المجالات الأخرى وطرح الأسئلة للوصول إلى أفضل نتيجة.',
    },
  },
];

export const featuredRecommendations = recommendations.filter(
  (r) => r.featuredOnHome
);
