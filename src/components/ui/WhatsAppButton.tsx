"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const phoneNumber = "34644762370";
  const message = "Hola Alicia, necesito asesoramiento legal.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0F1117] group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle size={28} className="relative z-10" />
      
      {/* Tooltip hover */}
      <span className="absolute right-full mr-4 bg-[#161B27] text-[#F5F0E8] text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
        ¿Hablamos?
      </span>
    </a>
  );
}
