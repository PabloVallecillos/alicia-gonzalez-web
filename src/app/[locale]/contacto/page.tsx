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

        <div className="max-w-2xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </div>
  );
}
