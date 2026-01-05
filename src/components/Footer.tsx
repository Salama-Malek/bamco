import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { companyInfo, locations, services, socialLinks } from '../data/staticData';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-footer.svg"
                alt="BAMCO Logo"
                className="w-50 mb-4 object-contain"
              />

            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              شركة سعودية رائدة متخصصة في توريد وتوزيع التجهيزات الطبية والمستلزمات والمحاليل والأجهزة الطبية لجميع القطاعات الصحية في المملكة العربية السعودية.
            </p>
            <div className="flex gap-3">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">نبذه عنا</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">خدماتنا</Link></li>
              <li>
                <a
                  title="سيفتح المتجر في نافذة جديدة"

                  href="https://salla.sa/bamco.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  المتجر
                </a>
              </li>

              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{location.name}</p>
                    <p className="text-gray-300 text-sm">{location.address}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-white/20">
                <h5 className="font-medium mb-2">مركز خدمة العملاء</h5>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors mb-2">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{companyInfo.phoneDisplay}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span
                    className="cursor-pointer hover:text-primary transition-colors"
                    title="اضغط لنسخ البريد الإلكتروني"
                    onClick={() => {
                      navigator.clipboard.writeText(companyInfo.email);
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 2500);
                    }}
                  >
                    {companyInfo.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{companyInfo.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6 flex flex-col items-center gap-2 text-center">

          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. جميع الحقوق محفوظة.
          </p>

          {/* Developer Credit */}
          <p className="text-gray-400 text-xs leading-relaxed">
            تم تصميم وتطوير الموقع بواسطة{' '}
            <a
              href="https://sm4tech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              SM4Tech
            </a>
            {' '}—{' '}
            <a
              href="mailto:salama.malek.dev@gmail.com"
              className="hover:underline"
            >
              salama.malek.dev@gmail.com
            </a>
            {' | '}
            <a
              href="mailto:salamahassanein@gmail.com"
              className="hover:underline"
            >
              salamahassanein@gmail.com
            </a>
          </p>

        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-secondary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
        <Mail className="w-4 h-4 text-primary" />
          <span className="text-sm">تم نسخ البريد الإلكتروني</span>
        </div>
      )}

    </footer>
  );
}
