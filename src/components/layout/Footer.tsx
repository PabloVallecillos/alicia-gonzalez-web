"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useParams } from 'next/navigation';

export function Footer() {
  const t = useTranslations('Navigation');
  const params = useParams();
  const currentLocale = params.locale as string;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0D14] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1 group inline-flex">
              <span className="font-headings text-2xl font-bold text-[#F5F0E8] group-hover:text-[#C9974A] transition-colors">
                Alicia González
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A] mt-2"></span>
            </Link>
            <p className="text-[#8B9AB0] max-w-xs">
              {currentLocale === 'es' 
                ? 'Derecho Laboral · Fiscal · Civil · Asesoría Empresarial en Granada.'
                : 'Employment Law · Tax · Civil Law · Business Consulting in Granada.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F5F0E8] font-semibold mb-4 font-headings text-lg">
              {currentLocale === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#8B9AB0] hover:text-[#C9974A] transition-colors">{t('home')}</Link></li>
              <li><Link href="/sobre-mi" className="text-[#8B9AB0] hover:text-[#C9974A] transition-colors">{t('about')}</Link></li>
              <li><Link href="/servicios" className="text-[#8B9AB0] hover:text-[#C9974A] transition-colors">{t('services')}</Link></li>
              <li><Link href="/blog" className="text-[#8B9AB0] hover:text-[#C9974A] transition-colors">{t('blog')}</Link></li>
              <li><Link href="/contacto" className="text-[#8B9AB0] hover:text-[#C9974A] transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F0E8] font-semibold mb-4 font-headings text-lg">
              {currentLocale === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#8B9AB0]">
                <Phone size={18} className="text-[#C9974A]" />
                <a href="tel:+34644762370" className="hover:text-[#C9974A] transition-colors">+34 644 76 23 70</a>
              </li>
              <li className="flex items-center gap-3 text-[#8B9AB0]">
                <Mail size={18} className="text-[#C9974A]" />
                <a href="mailto:gonzalezalicia403@gmail.com" className="hover:text-[#C9974A] transition-colors">gonzalezalicia403@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-[#8B9AB0]">
                <MapPin size={18} className="text-[#C9974A]" />
                <span>Granada, España</span>
              </li>
              <li className="flex items-center gap-3 text-[#8B9AB0] pt-2">
                <a href="https://linkedin.com/in/aliciagonzalezgarcia99" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9974A] transition-colors">
                  <Globe size={20} className="text-[#C9974A]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#8B9AB0]">
          <p>© {currentYear} Alicia González García. {currentLocale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="hover:text-[#C9974A] transition-colors">
              {currentLocale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
