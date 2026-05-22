import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alicia González García | Abogada",
  description: "Despacho especialista en Laboral, Fiscal y Civil en Granada",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieBanner } from "@/components/ui/CookieBanner";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "name": "Alicia González García | Abogada",
        "url": "https://aliciagonzalezgarcia.vercel.app",
        "telephone": "+34644762370",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Granada",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "Person",
        "name": "Alicia González García",
        "jobTitle": "Abogada",
        "url": "https://aliciagonzalezgarcia.vercel.app",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Granada",
          "addressCountry": "ES"
        }
      }
    ]
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased bg-[#0F1117] text-[#F5F0E8] min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
