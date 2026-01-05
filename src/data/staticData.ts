// بيانات الشركة
// export const companyInfo = {
//   name: 'بيت التجهيز الطبية',
//   nameEn: 'BAMCO',
//   slogan: 'شريكك الموثوق في التجهيزات الطبية',
//   description: 'نقدم حلولاً متكاملة في مجال التجهيزات الطبية والمستلزمات والمحاليل والأجهزة الطبية لجميع القطاعات الصحية في المملكة العربية السعودية',
//   phone: '112978287',
//   email: 'info@bamco.sa',
//   whatsapp: '552771374',
//   workingHours: 'السبت - الخميس: 9 ص - 5 م',
// };
export const companyInfo = {
  name: "بيت التجهيز الطبية",
  nameEn: "BAMCO",
  slogan: "شريكك الموثوق في التجهيزات الطبية",
  description:
    "شركة سعودية رائدة متخصصة في توريد وتوزيع التجهيزات الطبية والمستلزمات والمحاليل والأجهزة الطبية.",

  email: "info@bamco.sa",

  // 📞 technical values (NO spaces, NO +)
  phone: "966552771374", // رقم التواصل
  customerService: "966112978287", // خدمة العملاء
  whatsapp: "966552771374",

  // 📞 display values (UI only)
  phoneDisplay: "+966 55 277 1374",
  customerServiceDisplay: "+966 11 297 8287",

  workingHours: "السبت - الخميس من 9 إلى 5",
};

export const socialLinks = {
  twitter: "https://x.com/bamco_sa?s=11",
  instagram: "https://www.instagram.com/bamco_sa",
};

// المكاتب والفروع
export const locations = [
  {
    id: 1,
    name: "مكتب الرياض",
    address: "الرياض، المملكة العربية السعودية",
    type: "office",
  },
  {
    id: 2,
    name: "مكتب القصيم",
    address: "القصيم، المملكة العربية السعودية",
    type: "office",
  },
  {
    id: 3,
    name: "المستودع الرئيسي",
    address: "الرياض، المملكة العربية السعودية",
    type: "warehouse",
  },
];

// الإحصائيات
export const stats = [
  { value: "+300", label: "عميل" },
  { value: "+5", label: "سنة خبرة" },
  { value: "+30", label: "موظف" },
  { value: "+800", label: "منتج" },
];

// الخدمات
export const services = [
  {
    id: 1,
    title: "التجهيزات الطبية",
    description:
      "توريد وتركيب التجهيزات الطبية المتكاملة للمستشفيات والمراكز الصحية",
    icon: "Stethoscope",
  },
  {
    id: 2,
    title: "المستلزمات الطبية",
    description:
      "مستلزمات طبية عالية الجودة من أفضل العلامات التجارية العالمية",
    icon: "Syringe",
  },
  {
    id: 3,
    title: "المحاليل الطبية",
    description: "محاليل طبية معتمدة ومطابقة للمواصفات والمعايير الصحية",
    icon: "FlaskConical",
  },
  {
    id: 4,
    title: "الأجهزة الطبية",
    description: "أحدث الأجهزة الطبية والتشخيصية بتقنيات متطورة",
    icon: "Monitor",
  },
  {
    id: 5,
    title: "خدمة ما بعد البيع",
    description: "صيانة دورية وقطع غيار أصلية مع فريق فني متخصص",
    icon: "Wrench",
  },
  {
    id: 6,
    title: "التوصيل والتوزيع",
    description: "شبكة توزيع واسعة تغطي جميع مناطق المملكة",
    icon: "Truck",
  },
];

// فئات المنتجات
export const categories = [
  {
    id: 1,
    name: "التجهيزات الطبية",
    slug: "equipment",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "المستلزمات الطبية",
    slug: "supplies",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "المحاليل الطبية",
    slug: "solutions",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "الأجهزة الطبية",
    slug: "devices",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "أدوات الجراحة",
    slug: "surgery",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "معدات المختبرات",
    slug: "lab",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
  },
];

// المنتجات
export const products = [
  {
    id: 1,
    name: "جهاز قياس الضغط الرقمي",
    category: "الأجهزة الطبية",
    categorySlug: "devices",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "سماعة طبية احترافية",
    category: "التجهيزات الطبية",
    categorySlug: "equipment",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "قفازات طبية (علبة 100)",
    category: "المستلزمات الطبية",
    categorySlug: "supplies",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    name: "محلول ملحي 500مل",
    category: "المحاليل الطبية",
    categorySlug: "solutions",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    name: "جهاز قياس الأكسجين",
    category: "الأجهزة الطبية",
    categorySlug: "devices",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 6,
    name: "كمامات طبية N95 (50 قطعة)",
    category: "المستلزمات الطبية",
    categorySlug: "supplies",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: 7,
    name: "ميزان حرارة رقمي",
    category: "الأجهزة الطبية",
    categorySlug: "devices",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: 8,
    name: "مجموعة الإسعافات الأولية",
    category: "المستلزمات الطبية",
    categorySlug: "supplies",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    featured: false,
  },
];

// القيم
export const values = [
  {
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا",
  },
  {
    title: "الموثوقية",
    description: "شريك موثوق لأكثر من 300 عميل في المملكة",
  },
  {
    title: "الابتكار",
    description: "نواكب أحدث التقنيات والتطورات في المجال الطبي",
  },
  { title: "خدمة العملاء", description: "فريق دعم متخصص على مدار الساعة" },
];

// المميزات
export const features = [
  "منتجات معتمدة من هيئة الغذاء والدواء",
  "ضمان شامل على جميع المنتجات",
  "فريق دعم فني متخصص على مدار الساعة",
  "أسعار تنافسية وعروض حصرية",
  "توصيل سريع لجميع مناطق المملكة",
  "خدمات تدريب وتأهيل الكوادر الطبية",
];
