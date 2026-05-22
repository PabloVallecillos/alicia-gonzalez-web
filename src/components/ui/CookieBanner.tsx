"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import { useParams } from 'next/navigation';

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const params = useParams();
  const currentLocale = params.locale as string;

  useEffect(() => {
    // Only show if consent has not been given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-6 bg-[#161B27]/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#8B9AB0] flex-1">
          {currentLocale === 'es' ? (
            <p>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Puede obtener más información en nuestra <Link href="/politica-privacidad" className="text-[#C9974A] hover:underline">Política de Privacidad</Link>.
            </p>
          ) : (
            <p>
              We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analyzing your browsing habits. You can find more information in our <Link href="/politica-privacidad" className="text-[#C9974A] hover:underline">Privacy Policy</Link>.
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={rejectCookies}>
            {currentLocale === 'es' ? 'Rechazar' : 'Reject'}
          </Button>
          <Button variant="default" size="sm" onClick={acceptCookies}>
            {currentLocale === 'es' ? 'Aceptar' : 'Accept'}
          </Button>
        </div>
      </div>
    </div>
  );
}
