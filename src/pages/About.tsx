import { Target, Eye, Heart, Award, Users } from 'lucide-react';
import { companyInfo, stats, values } from '../data/staticData';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">نبذه عنا</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            تعرف على قصة نجاحنا ورؤيتنا لمستقبل الرعاية الصحية في المملكة
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">من نحن</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{companyInfo.name}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تأسست شركة بيت التجهيز الطبية (BAMCO) لتكون الشريك الموثوق للقطاع الصحي في المملكة العربية السعودية. نحن متخصصون في توريد وتوزيع التجهيزات الطبية والمستلزمات والمحاليل والأجهزة الطبية لجميع المنشآت الصحية.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                على مدار أكثر من 5 أعوام بنينا سمعة قوية في السوق السعودي من خلال التزامنا بالجودة والموثوقية وخدمة العملاء المتميزة. نفتخر بشراكاتنا مع أفضل العلامات التجارية العالمية في مجال التجهيزات الطبية.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نسعى دائماً لتقديم حلول متكاملة تلبي احتياجات عملائنا من المستشفيات والمراكز الصحية والعيادات، مع الحرص على توفير أحدث التقنيات والمنتجات المعتمدة من هيئة الغذاء والدواء.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div dir="ltr" key={index} className="card text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشركة الرائدة في مجال التجهيزات الطبية في المملكة العربية السعودية والخليج العربي، ونساهم في تطوير منظومة الرعاية الصحية من خلال توفير أحدث التقنيات والمنتجات الطبية عالية الجودة.
              </p>
            </div>
            <div className="card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم حلول متكاملة في مجال التجهيزات الطبية تلبي احتياجات القطاع الصحي، مع الالتزام بأعلى معايير الجودة والسلامة، وبناء شراكات طويلة الأمد مع عملائنا قائمة على الثقة والموثوقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">قيمنا</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">المبادئ التي نؤمن بها</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const icons = [Award, Heart, Target, Users];
              const IconComponent = icons[index % icons.length];
              return (
                <div key={index} className="card text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-light font-medium">شهاداتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">اعتمادات وشهادات الجودة</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-300">شهادة نظام إدارة الجودة</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">SFDA</h3>
              <p className="text-gray-300">معتمد من هيئة الغذاء والدواء</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 13485</h3>
              <p className="text-gray-300">شهادة الأجهزة الطبية</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
