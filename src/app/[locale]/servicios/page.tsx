"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ServiciosPage() {
  const t = useTranslations("Services");
  const tIndex = useTranslations("Index");

  const faqs = [1, 2, 3, 4];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const areas = [
    { title: tIndex("practiceAreasLaboralTitle"), desc: tIndex("practiceAreasLaboralDesc") },
    { title: tIndex("practiceAreasFiscalTitle"), desc: tIndex("practiceAreasFiscalDesc") },
    { title: tIndex("practiceAreasCivilTitle"), desc: tIndex("practiceAreasCivilDesc") },
    { title: tIndex("practiceAreasEmpresaTitle"), desc: tIndex("practiceAreasEmpresaDesc") },
    { title: tIndex("practiceAreasMediacionTitle"), desc: tIndex("practiceAreasMediacionDesc") }
  ];

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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

        {/* Áreas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1A1D24] p-8 rounded-xl border border-[#C9974A]/20 hover:border-[#C9974A]/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-[#C9974A] mb-4">{area.title}</h3>
              <p className="text-[#F5F0E8]/70 leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#C9974A] mb-10">
            {t("faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq} className="border border-[#C9974A]/30 rounded-lg overflow-hidden bg-[#1A1D24]">
                <button
                  onClick={() => setOpenFaq(openFaq === faq ? null : faq)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-lg pr-4">{t(`faq${faq}Q` as any)}</span>
                  <span className="text-[#C9974A] text-2xl font-light">
                    {openFaq === faq ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === faq && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-[#F5F0E8]/70"
                    >
                      {t(`faq${faq}A` as any)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
