"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ConsultaPage() {
  const t = useTranslations("Consultation");

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] flex flex-col justify-center items-center py-20 px-4 sm:px-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <div className="w-24 h-24 bg-[#C9974A]/10 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(201,151,74,0.15)]">
          <svg className="w-12 h-12 text-[#C9974A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[#C9974A] mb-8 leading-tight tracking-tight">
          {t("heroHeadline")}
        </h1>
        <p className="text-xl md:text-2xl text-[#F5F0E8]/80 mb-14 max-w-2xl mx-auto">
          {t("heroSubheadline")}
        </p>

        <a 
          href="https://wa.me/34644762370" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-[#0F1117] bg-[#C9974A] rounded-full hover:bg-[#D4A35B] hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(201,151,74,0.3)]"
        >
          <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          {t("whatsappButton")}
        </a>
      </motion.div>
    </div>
  );
}
