"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SobreMiPage() {
  const t = useTranslations("About");

  const education = [
    {
      title: "Máster en Abogacía y Procura",
      place: "Universidad de Granada",
      date: "Septiembre 2023 – Actualidad"
    },
    {
      title: "Máster en Contabilidad y Fiscalidad",
      place: "Escuela Internacional de Posgrado",
      date: "Noviembre 2024"
    },
    {
      title: "Grado en Derecho",
      place: "Universidad de Granada",
      date: "Septiembre 2018 – Junio 2023"
    },
    {
      title: "Curso de Contratación, Nóminas, Finiquitos y Seguros Sociales",
      place: "Instituto Europeo de Asesoría Fiscal",
      date: "Octubre 2023"
    }
  ];

  const experience = [
    {
      title: "By Abogados",
      date: "Febrero 2024 – Mayo 2024",
      tasks: [
        "Requerimientos y contestación a demandas de distintas ramas jurisdiccionales.",
        "Archivo y clasificación de documentación jurídica.",
        "Confección y presentación de impuestos."
      ]
    },
    {
      title: "Despacho Jesús Muñoz Muñoz",
      date: "Septiembre 2022 – Marzo 2023",
      tasks: [
        "Análisis de conflictos legales.",
        "Gestión documental de procedimientos judiciales.",
        "Archivo y clasificación de documentación del despacho."
      ]
    }
  ];

  const skills = [
    "Buena comunicación",
    "Pensamiento analítico",
    "Resolución de problemas",
    "Capacidad de redacción",
    "Investigación jurídica",
    "Dominio del ordenador",
    "Manejo de herramientas ofimáticas (nivel intermedio)"
  ];

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#F5F0E8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 mt-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-[#C9974A]/20 pb-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#C9974A] mb-6">
                Perfil Profesional
              </h1>
              <p className="text-lg text-[#F5F0E8]/80 leading-relaxed">
                Graduada en Derecho por la Universidad de Granada y actualmente cursando el Máster en Abogacía y Procura, con especial interés en Derecho Laboral, fiscalidad y asesoría. Experiencia en despachos jurídicos realizando gestión documental, análisis de conflictos legales, redacción jurídica y confección de impuestos. Persona analítica, organizada y orientada al aprendizaje continuo y al desarrollo profesional en un entorno estable.
              </p>
            </div>
            <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-2 border-[#C9974A]/30 shadow-[0_0_30px_rgba(201,151,74,0.15)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/perfil.png" 
                alt="Alicia González García"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-[#C9974A] mb-8">
              Formación Académica
            </h2>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-6 border-l border-[#C9974A]/30">
                  <div className="absolute w-3 h-3 bg-[#C9974A] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(201,151,74,0.6)]"></div>
                  <h3 className="text-xl font-medium text-[#F5F0E8]">{item.title}</h3>
                  <p className="text-[#C9974A]/80 mt-1">{item.place}</p>
                  <p className="text-[#F5F0E8]/50 text-sm mt-1">{item.date}</p>
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
            <h2 className="text-3xl font-semibold text-[#C9974A] mb-8">
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-6 border-l border-[#C9974A]/30">
                  <div className="absolute w-3 h-3 bg-[#C9974A] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(201,151,74,0.6)]"></div>
                  <h3 className="text-xl font-medium text-[#F5F0E8]">{item.title}</h3>
                  <p className="text-[#F5F0E8]/50 text-sm mt-1 mb-3">{item.date}</p>
                  <ul className="list-disc pl-4 space-y-2 text-[#F5F0E8]/80">
                    {item.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#C9974A]/20 pt-12"
        >
          {/* Skills */}
          <div className="bg-[#161B27] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-medium text-[#C9974A] mb-6">Competencias</h3>
            <ul className="space-y-3 text-[#F5F0E8]/80">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#C9974A] mt-1">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-[#161B27] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-medium text-[#C9974A] mb-6">Idiomas</h3>
            <ul className="space-y-4 text-[#F5F0E8]/80">
              <li>
                <span className="block text-[#F5F0E8] font-medium mb-1">Castellano</span>
                <span className="text-[#C9974A]/80">Nativo</span>
              </li>
              <li>
                <span className="block text-[#F5F0E8] font-medium mb-1">Inglés</span>
                <span className="text-[#C9974A]/80">Nivel intermedio</span>
              </li>
            </ul>
          </div>

          {/* Other Data */}
          <div className="bg-[#161B27] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-medium text-[#C9974A] mb-6">Otros Datos</h3>
            <ul className="space-y-3 text-[#F5F0E8]/80">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🚗</span> Permiso de conducir B
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🔑</span> Vehículo propio
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
