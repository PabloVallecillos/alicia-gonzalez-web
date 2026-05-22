"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
export function FinalCTA() {
  const t = useTranslations('Index');

  return (
    <section className="py-32 relative overflow-hidden bg-[#C9974A] z-20">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headings font-bold text-[#0F1117] leading-tight">
            {t('finalCtaTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-[#0F1117]/80 max-w-2xl">
            {t('finalCtaDesc')}
          </p>
          <Button size="lg" className="bg-[#0F1117] text-[#F5F0E8] hover:bg-[#1A1D27] hover:scale-105 transition-all text-xl px-12 py-8 h-auto rounded-xl border-none shadow-xl" asChild>
            <Link href="/consulta">{t('finalCtaButton')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
