"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactoPage() {
  const t = useTranslations("Contact");

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1D24] p-8 rounded-xl border border-[#C9974A]/20"
          >
            <form action="mailto:gonzalezalicia403@gmail.com" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t("formName")}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#0F1117] border border-[#C9974A]/30 rounded-lg px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9974A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("formEmail")}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#0F1117] border border-[#C9974A]/30 rounded-lg px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9974A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("formMessage")}</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-[#0F1117] border border-[#C9974A]/30 rounded-lg px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9974A] transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C9974A] text-[#0F1117] font-semibold py-3 px-6 rounded-lg hover:bg-[#D4A35B] transition-colors"
              >
                {t("formSubmit")}
              </button>
            </form>
          </motion.div>

          {/* Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold text-[#C9974A] mb-2">
              {t("directInfoTitle")}
            </h2>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#C9974A]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#C9974A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="font-medium text-[#C9974A]">{t("phoneTitle")}</h3>
                <p className="text-[#F5F0E8]/80 mt-1">+34 600 000 000</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#C9974A]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#C9974A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-medium text-[#C9974A]">{t("emailTitle")}</h3>
                <p className="text-[#F5F0E8]/80 mt-1">gonzalezalicia403@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#C9974A]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#C9974A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-medium text-[#C9974A]">{t("locationTitle")}</h3>
                <p className="text-[#F5F0E8]/80 mt-1">Granada, España</p>
                <a href="https://maps.google.com/?q=Granada,España" target="_blank" rel="noopener noreferrer" className="text-[#C9974A] text-sm hover:underline mt-2 inline-block">
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
