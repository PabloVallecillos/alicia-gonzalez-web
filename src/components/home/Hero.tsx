"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
export function Hero() {
  const t = useTranslations('Index');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1117]/50 pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-8 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headings font-bold text-[#F5F0E8] leading-[1.1]">
            {t('heroHeadline')}
          </h1>
          <p className="text-xl md:text-2xl text-[#8B9AB0] max-w-2xl leading-relaxed">
            {t('heroSubheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto justify-center">
            <Button size="lg" className="text-lg w-full sm:w-auto h-14 px-8" asChild>
               <Link href="/consulta">{t('ctaPrimary')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto h-14 px-8" asChild>
               <Link href="/servicios">{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
