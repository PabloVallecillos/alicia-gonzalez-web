"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Briefcase, Calculator, Home as HomeIcon, Building2 } from 'lucide-react';

export function PracticeAreas() {
  const t = useTranslations('Index');

  const areas = [
    { title: t('practiceAreasLaboralTitle'), desc: t('practiceAreasLaboralDesc'), icon: Briefcase },
    { title: t('practiceAreasFiscalTitle'), desc: t('practiceAreasFiscalDesc'), icon: Calculator },
    { title: t('practiceAreasCivilTitle'), desc: t('practiceAreasCivilDesc'), icon: HomeIcon },
    { title: t('practiceAreasEmpresaTitle'), desc: t('practiceAreasEmpresaDesc'), icon: Building2 },
  ];

  return (
    <section className="py-24 relative z-20 bg-[#0F1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-headings font-bold text-[#F5F0E8] mb-6"
          >
            {t('practiceAreasTitle')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#C9974A] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-lg border-white/10 bg-white/5 hover:border-[#C9974A]/40 group">
                <CardHeader>
                  <div className="mb-6 text-[#C9974A] transition-colors duration-300">
                    <area.icon size={48} strokeWidth={1.2} />
                  </div>
                  <CardTitle className="text-2xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[#8B9AB0]">
                    {area.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
