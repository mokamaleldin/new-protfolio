import type { LocalizedText } from './types';

export interface Recommendation {
  id: string;
  order: number;
  featuredOnHome: boolean;
  authorName: LocalizedText;
  role: LocalizedText;
  date: string;
  relationship: LocalizedText;
  quote: LocalizedText;
}

export const recommendations: Recommendation[] = [
  {
    id: 'ahmed-hamzawi',
    order: 1,
    featuredOnHome: true,
    authorName: {
      en: 'Ahmed Hamzawi',
      ar: 'أحمد حمزاوي',
    },
    role: {
      en: 'CEO & Chief AI Architect, GreenHills Tech',
      ar: 'الرئيس التنفيذي في GreenHills Tech',
    },
    date: '2024-08',
    relationship: {
      en: 'Former direct manager',
      ar: 'مدير مباشر سابق',
    },
    quote: {
      en: 'His work ethic, ability to adapt quickly, and creativity never ceased to impress. He is an asset because he works well with people and has both talent and a pleasant attitude to each task at hand.',
      ar: 'أخلاقيات عمله، وقدرته على التكيف السريع، وإبداعه كانت دائمًا محل إعجاب. هو إضافة حقيقية لأي فريق لأنه يتعامل بروح ممتازة مع زملائه ويجمع بين الموهبة والمرونة في كل مهمة.',
    },
  },
  {
    id: 'abdullah-naifeh',
    order: 2,
    featuredOnHome: true,
    authorName: {
      en: 'Abdullah Naifeh',
      ar: 'عبد الله نايفة',
    },
    role: {
      en: 'Frontend Developer',
      ar: 'مطور واجهات أمامية',
    },
    date: '2024-08',
    relationship: {
      en: 'Teammate',
      ar: 'زميل فريق',
    },
    quote: {
      en: "Mohamed consistently impressed me with his technical expertise, problem-solving skills, and commitment to quality. He's a great communicator and an even better teammate, always bringing positivity and innovation to the table.",
      ar: 'أبهرني محمد باستمرار بخبرته التقنية، ومهاراته في حل المشكلات، والتزامه بالجودة. هو متواصل ممتاز وزميل فريق داعم يضيف دائمًا طاقة إيجابية وأفكارًا مبتكرة.',
    },
  },
  {
    id: 'abdulrahman-sharara',
    order: 3,
    featuredOnHome: false,
    authorName: {
      en: 'AbdulRahman Sharara',
      ar: 'عبد الرحمن شرارة',
    },
    role: {
      en: 'Motion Graphics Designer, ID8 Media',
      ar: 'مصمم موشن جرافيك في ID8 Media',
    },
    date: '2024-04',
    relationship: {
      en: 'Colleague at ID8 Media',
      ar: 'زميل في ID8 Media',
    },
    quote: {
      en: 'He consistently delivered high-quality code and demonstrated a strong problem-solving ability, contributing significantly to the success of our projects. His collaborative nature and positive attitude also made him a pleasure to work with.',
      ar: 'كان يسلّم دائمًا كودًا عالي الجودة ويقدم حلولًا قوية للمشكلات التقنية، مما ساهم بوضوح في نجاح مشاريعنا، كما أن روحه المتعاونة الإيجابية جعلت العمل معه تجربة مثمرة.',
    },
  },
  {
    id: 'daria-shishkina',
    order: 4,
    featuredOnHome: false,
    authorName: {
      en: 'Daria Shishkina',
      ar: 'داريا شيشكينا',
    },
    role: {
      en: 'Correspondent & Translator',
      ar: 'مراسلة صحفية ومترجمة',
    },
    date: '2024-04',
    relationship: {
      en: 'Media colleague',
      ar: 'زميلة من البيئة الإعلامية',
    },
    quote: {
      en: 'He is busy with the tasks all the time and was completing them before the deadline. Aside from this, Mohamed is having a very nice and pleasant personality, he is very ambitious and using creativity to achieve work goals.',
      ar: 'زميل متحمس وملتزم لأقصى درجة، ينجز مهامه دائمًا قبل الموعد النهائي، ويتمتع بشخصية متعاونة وطموحة توظف الإبداع لتحقيق أهداف العمل.',
    },
  },
  {
    id: 'youssof-gehad',
    order: 5,
    featuredOnHome: false,
    authorName: {
      en: 'Youssof Gehad',
      ar: 'يوسف جهاد',
    },
    role: {
      en: 'Graphic Designer & Illustrator',
      ar: 'مصمم جرافيك ورسام توضيحي',
    },
    date: '2024-04',
    relationship: {
      en: 'Cross-functional collaboration',
      ar: 'تعاون بين تخصصات مختلفة',
    },
    quote: {
      en: 'Mohamed is a very hard working Developer who consistently pushes the boundaries of his skills and capabilities. He is a very active team member, always seeking the opinions of people who are working in different areas from him, and asks questions.',
      ar: 'مطور مجتهد يطوّر مهاراته وقدراته باستمرار، وعضو فاعل يحرص دائمًا على الاستماع لآراء المتخصصين في المجالات الأخرى وطرح الأسئلة للوصول إلى أفضل نتيجة.',
    },
  },
];

export const featuredRecommendations = recommendations.filter(
  (r) => r.featuredOnHome
);
