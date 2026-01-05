import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { companyInfo, locations } from '../data/staticData';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      alert('إعدادات البريد غير مكتملة');
      setLoading(false);
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة لاحقاً.');
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-6">معلومات التواصل</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">الهاتف</h3>
                      <a dir="ltr" href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                        {companyInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">البريد الإلكتروني</h3>
                      <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-primary transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">ساعات العمل</h3>
                      <p className="text-gray-600">{companyInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">مواقعنا</h2>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div key={location.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">أرسل لنا رسالة</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-600 mb-4">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:underline"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label dir="ltr" className="block text-sm font-medium mb-2">الاسم الكامل *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="أدخل اسمك"
                        />
                      </div>
                      <div>
                        <label dir="ltr" className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                      <div>
                        <label dir="ltr" className="block text-sm font-medium mb-2">الموضوع *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="">اختر الموضوع</option>
                          <option value="inquiry">استفسار عام</option>
                          <option value="quote">طلب عرض سعر</option>
                          <option value="support">الدعم الفني</option>
                          <option value="complaint">شكوى</option>
                          <option value="other">أخرى</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label dir="ltr" className="block text-sm font-medium mb-2">الرسالة *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn-primary flex items-center gap-2 ${loading ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                    >
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
