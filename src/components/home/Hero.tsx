"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('Index');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1117]/50 pointer-events-none" />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headings font-bold text-[#F5F0E8] leading-[1.1]">
            {t('heroHeadline')}
          </h1>
          <p className="text-xl text-[#8B9AB0] max-w-lg leading-relaxed">
            {t('heroSubheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg w-full sm:w-auto h-14 px-8">
              {t('ctaPrimary')}
            </Button>
            <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto h-14 px-8">
              {t('ctaSecondary')}
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[750px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1117]/80 via-transparent to-transparent z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" 
            alt="Despacho de abogados"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
