import type { LocalizedText } from './types';

export interface Recommendation {
  id: string;
  order: number;
  featuredOnHome: boolean;
  authorName: LocalizedText;
  authorNote?: LocalizedText;
  role: LocalizedText;
  date: string;
  relationship: LocalizedText;
  quote: LocalizedText;
  needsVerification?: string;
}

export const recommendations: Recommendation[] = [
  {
    id: 'ahmed-hamzawi',
    order: 1,
    featuredOnHome: true,
    authorName: {
      en: 'Ahmed Hamzawi',
      ar: 'أحمد حمزاوي (Ahmed Hamzawi)',
    },
    role: {
      en: 'Chief AI Architect & Product Innovation Lead / CEO, GreenHills Tech',
      ar: 'كبير معماريي الذكاء الاصطناعي وقائد ابتكار المنتجات / الرئيس التنفيذي في GreenHills Tech',
    },
    date: '2024-08',
    relationship: {
      en: 'Managed Mohamed directly',
      ar: 'مدير مباشر لمحمد',
    },
    quote: {
      en: 'I am really thankful that I worked together with Mohamed. His work ethic, ability to adapt quickly, and creativity never ceased to impress. He is an asset because he works well with people and has both talent and a pleasant attitude to each task at hand. I strongly recommend him and will be eager to see how his career evolves further.',
      ar: 'ممتن جداً لعملي مع محمد. أخلاقيات عمله، وقدرته على التكيف السريع، وإبداعه كانت دائماً محل إعجاب. هو إضافة حقيقية لأي فريق لأنه يتعامل بروح ممتازة مع زملائه ويجمع بين الموهبة والمرونة في كل مهمة. أوصي به بشدة ومتحمس لرؤية تطور مسيرته المهنية.',
    },
  },
  {
    id: 'abderraouf-ziraoui',
    order: 2,
    featuredOnHome: true,
    authorName: {
      en: 'Abderraouf Ziraoui',
      ar: 'عبد الرؤوف زيراوي (Abderraouf Ziraoui)',
    },
    role: {
      en: 'Robotics Engineer / Project Manager at ARIXA Robotics',
      ar: 'مهندس روبوتات ومدير مشاريع في ARIXA Robotics',
    },
    date: '2024-09',
    relationship: {
      en: 'Instructed and supervised Mohamed during robotics training',
      ar: 'أشرف على محمد خلال تدريب هندسة الروبوتات',
    },
    quote: {
      en: 'During a robotics course I was giving, I had the pleasure of working with Mohamed, whose creativity and ingenuity stood out from the very beginning. One particular project that impressed me was when he developed a system that identified colors and enabled the robot to pick up the specified color through voice commands.',
      ar: 'خلال دورة روبوتات كنت أقدمها، سعدت بالعمل مع محمد، حيث برز إبداعه وطريقته الذكية في حل المشكلات منذ البداية. ومن المشاريع التي أبهرتني تطويره لنظام يتعرف على الألوان ويمكّن الروبوت من التقاط اللون المحدد عبر الأوامر الصوتية.',
    },
  },
  {
    id: 'abdulrahman-sharara',
    order: 3,
    featuredOnHome: true,
    authorName: {
      en: 'AbdulRahman Sharara',
      ar: 'عبد الرحمن شرارة (AbdulRahman Sharara)',
    },
    role: {
      en: 'Motion Graphics Designer at ID8 Media',
      ar: 'مصمم موشن جرافيك في ID8 Media',
    },
    date: '2024-04',
    relationship: {
      en: 'Worked alongside Mohamed at ID8 Media',
      ar: 'زميل عمل في ID8 Media',
    },
    quote: {
      en: "I had the pleasure of working alongside Mohamed Kamaleldin at ID8 Media, where he showcased exceptional skills as a Full Stack Developer. Mohamed's expertise in both front-end and back-end development was invaluable to our team. He consistently delivered high-quality code and demonstrated a strong problem-solving ability, contributing significantly to the success of our projects. Mohamed's dedication to staying updated with the latest technologies and his passion for innovation make him a standout professional in the field. His collaborative nature and positive attitude also made him a pleasure to work with. I highly recommend Mohamed Kamaleldin for any Full Stack Developer role. He would undoubtedly be a valuable asset to any team.",
      ar: 'سعدت بالعمل إلى جانب محمد كمال الدين في ID8 Media، حيث أظهر مهارات متميزة كمطور برمجيات. خبرته في الواجهات الأمامية والباك إند كانت ذات قيمة كبيرة لفريقنا، وكان دائماً يسلّم كود عالي الجودة ويقدم حلولاً قوية للمشاكل التقنية مما ساهم في نجاح مشاريعنا. التزامه بمواكبة أحدث التقنيات وروحه المتعاونة الإيجابية جعلا العمل معه تجربة ممتعة.',
    },
  },
  {
    id: 'abdullah-naifeh',
    order: 4,
    featuredOnHome: false,
    authorName: {
      en: 'Abdullah Naifeh',
      ar: 'عبد الله نايفة (Abdullah Naifeh)',
    },
    role: {
      en: 'Frontend Developer',
      ar: 'مطور واجهات أمامية (Frontend Developer)',
    },
    date: '2024-08',
    relationship: {
      en: 'Teammate',
      ar: 'زميل في نفس الفريق',
    },
    quote: {
      en: "I had the pleasure of working with Mohamed Kamaleldin on several projects, and it was an amazing experience. Mohamed consistently impressed me with his technical expertise, problem-solving skills, and commitment to quality. He's a great communicator and an even better teammate, always bringing positivity and innovation to the table. I highly recommend Mohamed for any team looking for a talented and dedicated professional.",
      ar: 'سعدت بالعمل مع محمد كمال الدين في عدة مشاريع وكانت تجربة رائعة. أبهرني محمد باستمرار بخبرته التقنية، ومهاراته في حل المشكلات، والتزامه بالجودة. هو متواصل ممتاز وزميل فريق داعم يضيف دائماً طاقة إيجابية وأفكاراً مبتكرة. أوصي به بشدة لأي فريق يبحث عن محترف موهوب وملتزم.',
    },
  },
  {
    id: 'mohamed-ayman',
    order: 5,
    featuredOnHome: false,
    authorName: {
      en: 'Mohamed Ayman',
      ar: 'محمد أيمن (Mohamed Ayman)',
    },
    role: {
      en: 'Senior Software Engineer — Full Stack & AI',
      ar: 'مهندس برمجيات أول — Full Stack & AI',
    },
    date: '2024-05',
    relationship: {
      en: 'Teammate',
      ar: 'زميل في نفس المشاريع',
    },
    quote: {
      en: 'I have been working with Mohamed on the same projects for a while now. He is a very ambitious person, always seeking to learn new things and expand his knowledge and expertise in the software domain. With such determination and commitment, Mohamed will have a very bright future in his professional career.',
      ar: 'عملت مع محمد في نفس المشاريع لفترة، وهو شخص طموح جداً يسعى دائماً لتعلم أشياء جديدة وتوسيع معرفته وخبرته في مجال البرمجيات. بهذا الإصرار والالتزام، ينتظر محمد مستقبل مهني مشرق.',
    },
  },
  {
    id: 'enas-khaled',
    order: 6,
    featuredOnHome: false,
    authorName: {
      en: 'Enas Khaled',
      ar: 'إيناس خالد (Enas Khaled)',
    },
    role: {
      en: 'Frontend Developer',
      ar: 'مطورة واجهات أمامية (Frontend Developer)',
    },
    date: '2024-05',
    relationship: {
      en: 'Teammate',
      ar: 'زميلة في نفس الفريق',
    },
    quote: {
      en: 'I worked with Mohammed. We were working on the same team. I had a very beautiful experience with him. Mohammed is an excellent full-stack developer. He used to provide the team with new and gorgeous ideas. Also, he is really a hardworking person and he always makes sure that everything in the project is done perfectly. Mohammed always deserves to be in the best places according to his abilities and knowledge. I highly recommend Mohammed for any project or team. He will make significant contributions wherever he goes. I think any company would be lucky to have Mohammed.',
      ar: 'عملت مع محمد في نفس الفريق وكانت تجربة عمل جميلة جداً. محمد مطور متميز وكان دائماً يمد الفريق بأفكار جديدة ورائعة، كما أنه شخص مجتهد للغاية ويحرص على إتمام كل تفصيلة في المشروع بأفضل شكل. أوصي بمحمد لأي مشروع أو فريق، فوجوده يمثل إضافة قوية لأي شركة.',
    },
    needsVerification:
      'Verify preferred public display surname ("Enas Khaled" vs "Enas Abuiweimer" from LinkedIn export).',
  },
  {
    id: 'imad-al-khawam',
    order: 7,
    featuredOnHome: false,
    authorName: {
      en: 'Imad Al Khawam',
      ar: 'عماد الخوام (Imad Al Khawam)',
    },
    role: {
      en: 'Computer Engineer / Software Developer',
      ar: 'مهندس حاسوب ومطور برمجيات',
    },
    date: '2024-04',
    relationship: {
      en: 'Teammate',
      ar: 'زميل فريق',
    },
    quote: {
      en: 'Mohammed is an ambitious and hard working person, he possesses great skills in the front end domain and provides great value to any team.',
      ar: 'محمد شخص طموح ومجتهد، يمتلك مهارات قوية في تطوير الواجهات الأمامية ويقدم قيمة حقيقية لأي فريق يعمل معه.',
    },
  },
  {
    id: 'youssof-gehad',
    order: 8,
    featuredOnHome: false,
    authorName: {
      en: 'Youssof Gehad',
      ar: 'يوسف جهاد (Youssof Gehad)',
    },
    role: {
      en: 'Graphic Designer & Illustrator',
      ar: 'مصمم جرافيك ورسام توضيحي',
    },
    date: '2024-04',
    relationship: {
      en: 'Worked across collaborating teams',
      ar: 'تعاون مشترك بين الفرق',
    },
    quote: {
      en: 'Mohamed is a very hard working Developer who consistently pushes the boundaries of his skills and capabilities. He is a very active team member, always seeking the opinions of people who are working in different areas from him, and asks questions. He is very friendly and helpful, and it was a joy working with him.',
      ar: 'محمد مطور مجتهد جداً يطور مهاراته وقدراته باستمرار. هو عضو فاعل في الفريق، يحرص دائماً على الاستماع لآراء المتخصصين في المجالات الأخرى وطرح الأسئلة لتقديم أفضل نتيجة. شخص ودود ومتعاون وكان العمل معه ممتعاً.',
    },
  },
  {
    id: 'daria-shishkina',
    order: 9,
    featuredOnHome: false,
    authorName: {
      en: 'Daria Shishkina',
      ar: 'داريا شيشكينا (Daria Shishkina)',
    },
    role: {
      en: 'Correspondent / Translator',
      ar: 'مراسلة صحفية ومترجمة',
    },
    date: '2024-04',
    relationship: {
      en: 'Colleague',
      ar: 'زميلة عمل',
    },
    quote: {
      en: 'Our extremely motivated employee, he is busy with the tasks all the time and was completing them before the deadline. Aside from this, Mohamed is having a very nice and pleasant personality, he is very ambitious and using creativity to achieve work goals.',
      ar: 'زميل متحمس وملتزم لأقصى درجة، ينجز مهامه دائماً قبل الموعد النهائي. إلى جانب ذلك، يتمتع محمد بشخصية لطيفة وطموحة ويستخدم الإبداع لتحقيق أهداف العمل.',
    },
  },
];

export const featuredRecommendations = recommendations.filter(
  (r) => r.featuredOnHome
);
