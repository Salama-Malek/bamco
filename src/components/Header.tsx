import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { companyInfo } from '../data/staticData';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'نبذه عنا' },
  { path: '/services', label: 'خدماتنا' },
  {
    path: 'https://salla.sa/bamco.sa',
    label: 'المتجر',
    external: true,
  },
  { path: '/contact', label: 'تواصل معنا' },
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2">
        <div className="container-custom flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">

          {/* Sentence */}
          <span className="font-medium text-center sm:text-right">
            شركاؤك الموثوقون في التجهيزات الطبية
          </span>

          {/* Phone */}
          <a
            href={`tel:${companyInfo.customerService}`}
            className="flex items-center justify-center sm:justify-start gap-2 font-semibold hover:text-primary-light transition-colors"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span dir="ltr" className="whitespace-nowrap">
              +966 11 297 8287
            </span>
          </a>

        </div>
      </div>


      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="BAMCO Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-primary font-bold text-xl">{companyInfo.nameEn}</h1>
              <p className="text-secondary text-sm">{companyInfo.name}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}

          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium py-2 text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium py-2 transition-colors ${location.pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
