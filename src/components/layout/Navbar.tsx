"use client";

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';

export function Navbar() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/sobre-mi', label: t('about') },
    { href: '/servicios', label: t('services') },
    { href: '/blog', label: t('blog') },
    { href: '/contacto', label: t('contact') },
  ];

  const switchLocale = () => {
    const nextLocale = currentLocale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-[#0F1117]/80 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-1 group">
            <span className="font-headings text-2xl font-bold text-[#F5F0E8] group-hover:text-[#C9974A] transition-colors">
              Alicia González
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9974A] mt-2"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#C9974A]",
                  pathname === link.href ? "text-[#C9974A]" : "text-[#F5F0E8]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={switchLocale}
              className="text-xs font-medium text-[#8B9AB0] hover:text-[#C9974A] transition-colors px-2 py-1 uppercase"
            >
              {currentLocale === 'es' ? 'EN' : 'ES'}
            </button>
            <Button asChild>
              <Link href="/consulta">
                {currentLocale === 'es' ? 'Solicitar consulta' : 'Request Consultation'}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={switchLocale}
              className="text-xs font-medium text-[#8B9AB0] hover:text-[#C9974A] transition-colors uppercase"
            >
              {currentLocale === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5F0E8] hover:text-[#C9974A] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#161B27] border-b border-white/10 absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#F5F0E8] hover:text-[#C9974A] hover:bg-white/5 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-4 border-t border-white/10">
              <Button asChild className="w-full">
                <Link href="/consulta" onClick={() => setIsOpen(false)}>
                  {currentLocale === 'es' ? 'Solicitar consulta' : 'Request Consultation'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
