"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PrivacidadPage() {
  const t = useTranslations("Privacy");

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-[#1A1D24] p-8 md:p-12 rounded-2xl border border-[#C9974A]/20 mt-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#C9974A] mb-8 border-b border-[#C9974A]/30 pb-4">
          {t("title")}
        </h1>
        
        <div className="space-y-6 text-[#F5F0E8]/80 leading-relaxed">
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios sobre nuestra política de privacidad con el objetivo de garantizar la protección de sus datos personales.
          </p>
          
          <h2 className="text-xl font-semibold text-[#F5F0E8] mt-8">1. Responsable del Tratamiento</h2>
          <p>
            Alicia González García, con domicilio a efectos de notificaciones en Granada, España, es la responsable del tratamiento de los datos personales recogidos a través de este sitio web. Puedes contactarnos en <strong>gonzalezalicia403@gmail.com</strong>.
          </p>

          <h2 className="text-xl font-semibold text-[#F5F0E8] mt-8">2. Finalidad</h2>
          <p>
            Los datos personales facilitados por el usuario serán utilizados exclusivamente para gestionar las consultas recibidas, concertar citas, o mantener cualquier comunicación directa solicitada por el usuario relacionada con nuestros servicios jurídicos.
          </p>

          <h2 className="text-xl font-semibold text-[#F5F0E8] mt-8">3. Derechos del Usuario</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a la dirección facilitada, adjuntando una copia de tu DNI o documento equivalente para verificar tu identidad.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
