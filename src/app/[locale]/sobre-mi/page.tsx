"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SobreMiPage() {
  const t = useTranslations("About");

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#C9974A] mb-6">
            {t("heroHeadline")}
          </h1>
          <p className="text-lg md:text-xl text-[#F5F0E8]/80 max-w-2xl mx-auto">
            {t("heroSubheadline")}
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#C9974A] mb-6 border-b border-[#C9974A]/30 pb-2">
              {t("educationTitle")}
            </h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative pl-6 border-l border-[#C9974A]/30">
                  <div className="absolute w-3 h-3 bg-[#C9974A] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(201,151,74,0.6)]"></div>
                  <h3 className="text-xl font-medium text-[#F5F0E8]">{t(`edu${item}Title` as any)}</h3>
                  <p className="text-[#F5F0E8]/70 mt-1">{t(`edu${item}Place` as any)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#C9974A] mb-6 border-b border-[#C9974A]/30 pb-2">
              {t("experienceTitle")}
            </h2>
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="relative pl-6 border-l border-[#C9974A]/30">
                  <div className="absolute w-3 h-3 bg-[#C9974A] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(201,151,74,0.6)]"></div>
                  <h3 className="text-xl font-medium text-[#F5F0E8]">{t(`exp${item}Title` as any)}</h3>
                  <p className="text-[#F5F0E8]/70 mt-1">{t(`exp${item}Place` as any)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
