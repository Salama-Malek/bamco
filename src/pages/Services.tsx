import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Syringe, FlaskConical, Monitor, Wrench, Truck, CheckCircle } from 'lucide-react';
import { services } from '../data/staticData';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Stethoscope,
  Syringe,
  FlaskConical,
  Monitor,
  Wrench,
  Truck,
};

const serviceDetails = [
  {
    id: 1,
    features: [
      'غرف العمليات المتكاملة',
      'وحدات العناية المركزة',
      'أقسام الطوارئ',
      'غرف الولادة',
      'عيادات الأسنان',
    ],
  },
  {
    id: 2,
    features: [
      'قفازات طبية بجميع الأنواع',
      'كمامات ومعدات الحماية',
      'أدوات الفحص والتشخيص',
      'مستلزمات التعقيم',
      'الضمادات والأربطة',
    ],
  },
  {
    id: 3,
    features: [
      'محاليل الوريد',
      'محاليل غسيل الكلى',
      'محاليل التعقيم',
      'محاليل التغذية',
      'محاليل التخدير',
    ],
  },
  {
    id: 4,
    features: [
      'أجهزة مراقبة المرضى',
      'أجهزة التنفس الصناعي',
      'أجهزة التصوير الطبي',
      'أجهزة المختبرات',
      'أجهزة العلاج الطبيعي',
    ],
  },
  {
    id: 5,
    features: [
      'صيانة دورية وقائية',
      'إصلاح الأعطال',
      'قطع غيار أصلية',
      'عقود صيانة سنوية',
      'دعم فني على مدار الساعة',
    ],
  },
  {
    id: 6,
    features: [
      'توصيل لجميع مناطق المملكة',
      'شحن سريع وآمن',
      'تتبع الشحنات',
      'تخزين مبرد للمنتجات الحساسة',
      'توصيل طارئ',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات والحلول الطبية لتلبية جميع احتياجاتكم
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Stethoscope;
              const details = serviceDetails.find((d) => d.id === service.id);
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    {details && (
                      <ul className="space-y-3">
                        {details.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px] ${isReversed ? 'lg:order-1' : ''}`}>
                    <IconComponent className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تبحث عن خدمة معينة؟</h2>
          <p className="text-lg mb-8 opacity-90">
            تواصل معنا وسنساعدك في إيجاد الحل المناسب لاحتياجاتك
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            تواصل معنا
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
