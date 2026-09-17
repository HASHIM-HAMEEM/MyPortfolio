export interface Project {
  id: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  href: string
  link?: string
  repoUrl?: string
  image: string
  tags: string[]
  featured?: boolean
  status?: 'Running' | 'In Development' | 'Open Source'
}

export const projects: Project[] = [
  {
    id: 'fiqhai',
    title: {
      en: 'Fiqh.ai - Citation-Safe Scholarly Search Engine',
      ar: 'Fiqh.ai - محرك بحث مرجعي موثّق للفقه الحنفي'
    },
    description: {
      en: 'Hybrid lexical + semantic search over 115k+ passages of classical Hanafi Fiqh texts. Reciprocal Rank Fusion, exact volume/page citations, split-screen reading pane, and Arabic-aware text-to-speech.',
      ar: 'بحث هجين (لفظي + دلالي) في أكثر من 115 ألف مقطع من كتب الفقه الحنفي الكلاسيكية. دمج الترتيب المتبادل، واستشهادات دقيقة بالجزء والصفحة، ولوحة قراءة مقسّمة، وقراءة صوتية للعربية.'
    },
    href: 'https://fiqhai-web.vercel.app/',
    link: 'https://fiqhai-web.vercel.app/',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/fiqhai',
    image: '/projects/generated/fiqhai-gpt.png',
    tags: ['Next.js', 'React', 'FastAPI', 'SQLite', 'Sentence Transformers', 'Hugging Face'],
    featured: true,
    status: 'Running'
  },
  {
    id: 'nile-learn',
    title: {
      en: 'Nile Learn - Nile Center Learning Platform',
      ar: 'Nile Learn - منصة تعلم مركز النيل'
    },
    description: {
      en: 'Learning platform with public course discovery, six role-based portals (student, teacher, registrar, HOD, branch admin, super admin), RBAC, i18n/RTL, Supabase persistence, and Moodle-backed quizzes, attendance, and grading.',
      ar: 'منصة تعليمية مع استكشاف عام للدورات، وست بوابات حسب الدور (طالب، معلم، مسجّل، رئيس قسم، مدير فرع، مدير عام)، وصلاحيات RBAC، ودعم i18n/RTL، وتخزين Supabase، واختبارات وحضور وتقييم عبر Moodle.'
    },
    href: 'https://nile-center-platform.vercel.app/',
    link: 'https://nile-center-platform.vercel.app/',
    repoUrl: 'https://github.com/scnz141/NilecenterPlatform',
    image: '/projects/generated/nile-learn-gpt.png',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Node.js', 'Moodle'],
    featured: true,
    status: 'Running'
  },
  {
    id: 'faiz-e-aam',
    title: {
      en: 'Faiz E Aam School Platform',
      ar: 'منصة مدرسة فيض عام'
    },
    description: {
      en: 'Integrated school website, admissions centre, guardian portal, and staff workspace. Fees, receipts, results, timetables, notices, and audit trails on a Supabase/PostgreSQL modular monolith with strict role-scoped authorization.',
      ar: 'موقع مدرسي متكامل مع مركز قبول، وبوابة أولياء الأمور، ومساحة عمل للموظفين. الرسوم والإيصالات والنتائج والجداول والإشعارات وسجلات التدقيق على بنية أحادية معيارية فوق Supabase/PostgreSQL مع صلاحيات صارمة حسب الدور.'
    },
    href: 'https://faizeaam.vercel.app',
    link: 'https://faizeaam.vercel.app',
    repoUrl: 'https://github.com/scnz313/FAIZ-A-AAM-',
    image: '/projects/generated/faiz-e-aam-gpt.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    featured: true,
    status: 'Running'
  },
  {
    id: 'poshsaaz',
    title: {
      en: 'Poshsaaz - Handmade Botanical Boutique',
      ar: 'Poshsaaz - متجر إكسسوارات نباتية يدوية'
    },
    description: {
      en: 'Editorial-style storefront for a Kashmiri handcrafted floral accessories brand: everlasting bouquets, curtain holdbacks, charms, and keepsakes with scroll-driven motion, Cloudinary media, and WhatsApp ordering.',
      ar: 'واجهة متجر بأسلوب تحريري لعلامة كشميرية للإكسسوارات النباتية اليدوية: باقات دائمة، وماسكات ستائر، وتعليقات، وهدايا تذكارية مع حركة مرتبطة بالتمرير، ووسائط Cloudinary، والطلب عبر واتساب.'
    },
    href: 'https://www.poshsaaz.live',
    link: 'https://www.poshsaaz.live',
    repoUrl: 'https://github.com/scnz141/poshsaaz',
    image: '/projects/generated/poshsaaz-gpt.png',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    status: 'Running'
  },
  {
    id: 'billexpert',
    title: {
      en: 'BillExpert - Professional Invoice & Billing Management',
      ar: 'BillExpert - إدارة الفواتير والمحاسبة الاحترافية'
    },
    description: {
      en: 'Invoice & billing management app with multi-currency support, PDF generation, and professional templates.',
      ar: 'تطبيق إدارة الفواتير والمحاسبة مع دعم متعدد العملات، وإنشاء PDF، وقوالب احترافية.'
    },
    href: 'https://play.google.com/store/apps/details?id=com.hashimhameem.billexpert&pcampaignid=web_share',
    link: 'https://play.google.com/store/apps/details?id=com.hashimhameem.billexpert&pcampaignid=web_share',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/BillExpertApp',
    image: '/projects/generated/billexpert-gpt.png',
    tags: ['Flutter', 'Riverpod', 'Hive', 'Material Design 3', 'AdMob']
  },
  {
    id: 'iqra-library',
    title: {
      en: 'IQRA Library Registration App - Mobile & Dashboard System',
      ar: 'تطبيق تسجيل مكتبة إقرأ - نظام الجوال ولوحة التحكم'
    },
    description: {
      en: 'Complete library management with mobile app and web dashboard. Features student management, QR scanning, and real-time sync.',
      ar: 'إدارة مكتبة كاملة مع تطبيق جوال ولوحة تحكم ويب. يتضمن إدارة الطلاب، ومسح QR، والمزامنة الفورية.'
    },
    href: 'https://github.com/HASHIM-HAMEEM/iqra-library-app',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/iqra-library-app',
    image: '/projects/generated/iqra-library-gpt.png',
    tags: ['Flutter', 'Supabase', 'Riverpod', 'Material Design 3', 'Clean Architecture'],
    featured: true
  },
  {
    id: 'library-dashboard',
    title: {
      en: 'Private Library Access System – Admin Dashboard',
      ar: 'نظام الوصول للمكتبة الخاصة - لوحة تحكم المسؤول'
    },
    description: {
      en: 'Admin dashboard for library access management with QR code entry/exit, analytics, and role-based authentication.',
      ar: 'لوحة تحكم المسؤول لإدارة الوصول للمكتبة مع دخول/خروج برمز QR، والتحليلات، والمصادقة القائمة على الأدوار.'
    },
    href: 'https://github.com/HASHIM-HAMEEM/LibraryApp',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/LibraryApp',
    image: '/projects/generated/library-dashboard-gpt.png',
    tags: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 'flutter-welcome-kit',
    title: {
      en: 'Flutter Welcome Kit',
      ar: 'Flutter Welcome Kit'
    },
    description: {
      en: 'Onboarding and tour guide kit for Flutter apps with spotlight overlays, tooltips, and extensive customization.',
      ar: 'مجموعة أدوات الترحيب والجولة الإرشادية لتطبيقات Flutter مع تراكبات الإضاءة والتلميحات والتخصيص الشامل.'
    },
    href: 'https://pub.dev/packages/flutter_welcome_kit',
    link: 'https://pub.dev/packages/flutter_welcome_kit',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/flutter_welcome_kit',
    image: '/projects/generated/flutter-welcome-kit-gpt.png',
    tags: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX', 'Accessibility'],
    featured: true
  },
  {
    id: 'islamic-kit',
    title: {
      en: 'Islamic Kit for Flutter',
      ar: 'Islamic Kit لـ Flutter'
    },
    description: {
      en: 'Islamic toolkit for Flutter with prayer times, Qibla compass, Hijri calendar, and Zakat calculator.',
      ar: 'مجموعة أدوات إسلامية لـ Flutter مع أوقات الصلاة، وبوصلة القبلة، والتقويم الهجري، وحاسبة الزكاة.'
    },
    href: 'https://pub.dev/packages/islamic_kit',
    link: 'https://pub.dev/packages/islamic_kit',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/islamic_kit',
    image: '/projects/generated/islamic-kit-gpt.png',
    tags: ['Flutter', 'Dart', 'Islamic APIs', 'Prayer Times', 'Qibla Compass']
  },
  {
    id: 'maududi-library',
    title: {
      en: 'Maududi Library',
      ar: 'مكتبة المودودي'
    },
    description: {
      en: "Mobile library app featuring Maulana Maududi's complete works with AI assistant, video player, and offline access.",
      ar: 'تطبيق مكتبة جوال يحتوي على أعمال المولانا المودودي الكاملة مع مساعد AI، ومشغل فيديو، والوصول دون اتصال.'
    },
    href: 'https://play.google.com/store/apps/details?id=com.molanamodudi.literature&pcampaignid=web_share',
    link: 'https://play.google.com/store/apps/details?id=com.molanamodudi.literature&pcampaignid=web_share',
    image: '/projects/generated/maududi-library-gpt.png',
    tags: ['Flutter', 'Dart', 'Gemini API', 'Firebase']
  },
  {
    id: 'iqbal-literature',
    title: {
      en: 'Iqbal Literature',
      ar: 'أدب إقبال'
    },
    description: {
      en: "Interactive poem analysis app with AI insights, bilingual support, and social sharing for Allama Iqbal's poetry.",
      ar: 'تطبيق تحليل القصائد التفاعلي مع رؤى AI، ودعم ثنائي اللغة، والمشاركة الاجتماعية لشعر علامة إقبال.'
    },
    href: 'https://play.google.com/store/apps/details?id=com.iqbalbook.iqbal_literature&pcampaignid=web_share',
    link: 'https://play.google.com/store/apps/details?id=com.iqbalbook.iqbal_literature&pcampaignid=web_share',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/iqbal-literature',
    image: '/projects/generated/iqbal-literature-gpt.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'DeepSeek API', 'Gemini API']
  },
  {
    id: 'file-management',
    title: {
      en: 'FILE MANAGEMENT',
      ar: 'إدارة الملفات'
    },
    description: {
      en: 'File management app for organizing documents, PDFs, and files with customizable themes and efficient categorization.',
      ar: 'تطبيق إدارة الملفات لتنظيم المستندات وملفات PDF والملفات مع سمات قابلة للتخصيص وتصنيف فعال.'
    },
    href: 'https://github.com/HASHIM-HAMEEM/file-management',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/file-management',
    image: '/projects/generated/file-management-gpt.png',
    tags: ['Flutter', 'Java', 'SQLite', 'Provider', 'Material Design 3']
  },
  {
    id: 'qatar-al-nada',
    title: {
      en: 'Qatar Al Nada',
      ar: 'قطر الندى'
    },
    description: {
      en: 'Mobile app for classical Arabic text study with customizable reading, offline access, and privacy-focused design.',
      ar: 'تطبيق جوال لدراسة النصوص العربية الكلاسيكية مع قراءة قابلة للتخصيص، والوصول دون اتصال، وتصميم يركز على الخصوصية.'
    },
    href: 'https://play.google.com/store/apps/details?id=com.qataralnada.app&pcampaignid=web_share',
    link: 'https://play.google.com/store/apps/details?id=com.qataralnada.app&pcampaignid=web_share',
    image: '/projects/generated/qatar-al-nada-gpt.png',
    tags: ['Flutter', 'Dart']
  },
  {
    id: 'hms',
    title: {
      en: 'HMS (Hostel Management System)',
      ar: 'HMS (نظام إدارة السكن)'
    },
    description: {
      en: 'Web application for hostel management with student operations, financial tracking, QR identification, and email service.',
      ar: 'تطبيق ويب لإدارة السكن مع عمليات الطلاب، وتتبع المالية، وتحديد QR، وخدمة البريد الإلكتروني.'
    },
    href: 'https://github.com/HASHIM-HAMEEM/hostel-management-system',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/hostel-management-system',
    image: '/projects/generated/hms-gpt.png',
    tags: ['Node.js', 'MongoDB']
  },
  {
    id: 'iqbal-poetry',
    title: {
      en: 'Dr. ALAMA IQBAL Digital Poetry Library',
      ar: 'مكتبة الشعر الرقمية للدكتور علامة إقبال'
    },
    description: {
      en: "Digital library for Allama Iqbal's poetry with responsive design, advanced search, and user authentication.",
      ar: 'مكتبة رقمية لشعر علامة إقبال مع تصميم متجاوب، وبحث متقدم، ومصادقة المستخدم.'
    },
    href: 'https://iqbal-poetry.vercel.app',
    link: 'https://iqbal-poetry.vercel.app',
    image: '/projects/generated/iqbal-poetry-gpt.png',
    tags: ['Next.js', 'Tailwind CSS', 'React.js', 'TypeScript']
  },
  {
    id: 'my-rental-find',
    title: {
      en: 'My Rental Find',
      ar: 'My Rental Find'
    },
    description: {
      en: 'Property management SaaS platform for modern property managers. Streamline operations, tenant portal, AI insights, maintenance tracking, digital leasing, and Stripe-powered payments.',
      ar: 'منصة SaaS لإدارة العقارات للمديرين المعاصرين. تبسيط العمليات، بوابة المستأجرين، رؤى الذكاء الاصطناعي، وتتبع الصيانة.'
    },
    href: 'https://www.myrentalfind.com/dev',
    link: 'https://www.myrentalfind.com/dev',
    image: '/projects/generated/my-rental-find-gpt.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'AI'],
    featured: true,
    status: 'Running'
  },
  {
    id: 'kamoos-app',
    title: {
      en: 'Kamoos App',
      ar: 'تطبيق القاموس'
    },
    description: {
      en: 'Arabic dictionary app with comprehensive definitions and clean, modern interface.',
      ar: 'تطبيق قاموس عربي مع تعريفات شاملة وواجهة حديثة ونظيفة.'
    },
    href: 'https://github.com/HASHIM-HAMEEM/kamoosApp',
    repoUrl: 'https://github.com/HASHIM-HAMEEM/kamoosApp',
    image: '/projects/generated/kamoos-app-gpt.png',
    tags: ['Flutter', 'Dart', 'Material Design 3'],
    status: 'Open Source'
  },
  {
    id: 'tafaseer',
    title: {
      en: 'Tafaseer - Quran Tafseer',
      ar: 'تفسير - تفسير القرآن'
    },
    description: {
      en: 'Comprehensive Quran interpretation app with 10 Tafseer sources from renowned scholars, bookmarks, and offline support.',
      ar: 'تطبيق شامل لتفسير القرآن مع 10 مصادر تفسير من علماء مرموقين، وإشارات مرجعية، ودعم دون اتصال.'
    },
    href: 'https://play.google.com/store/apps/details?id=com.tafaseer.app',
    link: 'https://tafaseer.web.app/',
    image: '/projects/generated/tafaseer-gpt.png',
    tags: ['Flutter', 'Dart', 'Firebase'],
    status: 'Running'
  },
  {
    id: 'iqbal-app',
    title: {
      en: 'Iqbal',
      ar: 'إقبال'
    },
    description: {
      en: "Explore Allama Iqbal's poetry, philosophy, and life through a curated collection in a clean, focused app.",
      ar: 'استكشف شعر وفلسفة وحياة علامة إقبال من خلال مجموعة مختارة في تطبيق نظيف ومركّز.'
    },
    href: 'https://play.google.com/store/apps/details?id=app.iqbal.quranichub',
    link: 'https://alamaiqbal.vercel.app/',
    image: '/projects/generated/iqbal-app-gpt.png',
    tags: ['Flutter', 'Dart'],
    status: 'Running'
  }
]

const STORE_LISTING_RE =
  /play\.google\.com\/store|apps\.apple\.com\/app/i

/** Store-backed listings in the portfolio catalog (auto-counted for stats). */
export function countStoreListedProjects(): number {
  return projects.filter((p) =>
    STORE_LISTING_RE.test(p.link || p.href || ''),
  ).length
}

export const getFeaturedProjects = () => projects.filter(p => p.featured)
