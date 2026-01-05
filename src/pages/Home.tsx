import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Stethoscope, Syringe, FlaskConical, Monitor, Wrench, Truck } from 'lucide-react';
import { companyInfo, stats, services, features } from '../data/staticData';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Stethoscope,
  Syringe,
  FlaskConical,
  Monitor,
  Wrench,
  Truck,
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary min-h-[600px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-secondary via-secondary to-secondary-dark"></div>
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {companyInfo.slogan}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {companyInfo.name}
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {companyInfo.nameEn}
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {companyInfo.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('مرحباً، أرغب في الاستفسار عن مبيعات الجملة')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  تواصل معنا الآن لمبيعات الجملة
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <a href={`tel:${companyInfo.phone}`} className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-secondary flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  تواصل معنا
                </a>
              </div>
            </div>

            {/* Hero Image/Icons */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <Syringe className="w-16 h-16 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <Stethoscope className="w-16 h-16 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <FlaskConical className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div dir="ltr" key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">حلول متكاملة للقطاع الصحي</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات والمنتجات الطبية لتلبية احتياجات المستشفيات والمراكز الصحية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Stethoscope;
              return (
                <div key={service.id} className="card group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              عرض جميع الخدمات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">لماذا تختارنا</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">شريكك الموثوق في التجهيزات الطبية</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                نحن في بيت التجهيز الطبية نلتزم بتقديم أعلى معايير الجودة والخدمة لعملائنا. خبرتنا الطويلة في السوق السعودي وشراكاتنا مع أفضل العلامات التجارية العالمية تجعلنا الخيار الأمثل لاحتياجاتكم الطبية.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-8">
                اعرف المزيد عنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">+5 سنة من الخبرة</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                نفتخر بخدمة أكثر من 300 عميل من المستشفيات والمراكز الصحية والعيادات في جميع أنحاء المملكة العربية السعودية
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">+300 عميل راضٍ</span>
                <div className="flex -space-x-2 mr-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-secondary"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج إلى استشارة؟</h2>
          <p className="text-lg mb-8 opacity-90">
            فريقنا جاهز لمساعدتك في اختيار المنتجات المناسبة لاحتياجاتك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              تواصل معنا
            </Link>
            <a dir="ltr" href={`tel:${companyInfo.phone}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {companyInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
