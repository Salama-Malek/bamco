import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/staticData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('مرحباً، أرغب في الاستفسار عن منتجاتكم')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
      title="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        تواصل معنا
      </span>
    </a>
  );
}
