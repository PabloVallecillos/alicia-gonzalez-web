"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Scale, GraduationCap, MapPin } from 'lucide-react';

export function StatsBar() {
  const t = useTranslations('Index');

  const stats = [
    { label: t('statsAreas'), icon: Scale },
    { label: t('statsMaster'), icon: GraduationCap },
    { label: t('statsLocation'), icon: MapPin }
  ];

  return (
    <section className="border-y border-white/10 bg-white/5 backdrop-blur-md py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center space-y-4 group"
            >
              <div className="p-4 bg-[#C9974A]/10 rounded-full text-[#C9974A] transition-colors group-hover:bg-[#C9974A]/20">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="text-lg font-semibold text-[#F5F0E8]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
