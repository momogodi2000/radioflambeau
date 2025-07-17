
// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.radioflambeaubanka.com';

const pages = [
  {
    path: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString()
  },
  {
    path: '/#apropos',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    path: '/#programmes',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  {
    path: '/#equipe',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  {
    path: '/#actualites',
    changefreq: 'daily',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    path: '/#contact',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap généré avec succès !');
};

generateSitemap();