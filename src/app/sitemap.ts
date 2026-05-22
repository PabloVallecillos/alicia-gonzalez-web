import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aliciagonzalezgarcia.vercel.app';
  
  const locales = ['es', 'en'];
  const routes = [
    '',
    '/blog',
    '/consulta',
    '/contacto',
    '/politica-privacidad',
    '/servicios',
    '/sobre-mi'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
