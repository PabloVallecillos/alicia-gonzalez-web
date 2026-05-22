import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

// Harcoded posts for the assignment
const POSTS = [
  {
    slug: "despido-improcedente",
    title: "Cómo reclamar un despido improcedente",
    description: "Conoce tus derechos y los pasos exactos para reclamar y obtener la indemnización que te corresponde frente a un despido injustificado.",
    category: "Derecho Laboral",
    date: "24 May 2026"
  },
  {
    slug: "gastos-deducibles-autonomo",
    title: "¿Qué gastos puedo deducirme como autónomo?",
    description: "Una guía clara sobre qué gastos acepta Hacienda para reducir la carga fiscal en tus declaraciones trimestrales.",
    category: "Fiscalidad",
    date: "15 May 2026"
  },
  {
    slug: "divorcio-mutuo-acuerdo",
    title: "Divorcio de mutuo acuerdo: plazos y costes",
    description: "Descubre las ventajas de la vía más rápida y económica para poner fin a tu matrimonio de forma amistosa.",
    category: "Derecho Civil",
    date: "02 May 2026"
  }
];

export default function BlogIndex() {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-headings text-gold mb-6">
            Blog Jurídico
          </h1>
          <p className="text-lg text-muted">
            Artículos, guías y consejos legales escritos por profesionales para ayudarte a entender tus derechos y obligaciones de forma clara y accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
              <Card className="h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-gold tracking-wider uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-gold transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
