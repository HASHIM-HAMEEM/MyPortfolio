const fs = require('fs');
const path = require('path');

const domain = 'https://hashimhameem.site';
const date = new Date().toISOString();
const dateUTC = new Date().toUTCString();

// Load blogs for sitemap
const blogsPath = path.join(__dirname, '../data/blogs.ts');
const blogsContent = fs.readFileSync(blogsPath, 'utf8');
const slugMatches = blogsContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const blogSlugs = [...slugMatches].map(m => m[1]);

// Generate sitemap.xml
const sitemapUrls = [
  { loc: domain, changefreq: 'weekly', priority: 1.0 },
  { loc: `${domain}/projects`, changefreq: 'monthly', priority: 0.8 },
  { loc: `${domain}/blogs`, changefreq: 'weekly', priority: 0.7 },
  ...blogSlugs.map(slug => ({
    loc: `${domain}/blogs/${slug}`,
    changefreq: 'monthly',
    priority: 0.6
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Generate rss.xml
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hashim Hameem</title>
    <link>${domain}</link>
    <description>Updates from Hashim Hameem's portfolio - Flutter, React, and Node.js projects with cutting-edge technologies</description>
    <language>en-us</language>
    <lastBuildDate>${dateUTC}</lastBuildDate>
    <atom:link href="${domain}/rss.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>BillExpert - Invoice &amp; Billing Management</title>
      <link>${domain}/projects</link>
      <pubDate>${dateUTC}</pubDate>
      <guid>${domain}/projects/billexpert</guid>
      <description>Professional invoice and billing management mobile app with multi-currency support, PDF generation, and offline-first architecture.</description>
    </item>
    
    <item>
      <title>IQRA Library Management System</title>
      <link>${domain}/projects</link>
      <pubDate>${dateUTC}</pubDate>
      <guid>${domain}/projects/iqra-library</guid>
      <description>Complete library management solution with mobile app and web dashboard featuring real-time sync and QR code scanning.</description>
    </item>
    
    <item>
      <title>Iqbal Literature - Poetry Analysis App</title>
      <link>${domain}/projects</link>
      <pubDate>${dateUTC}</pubDate>
      <guid>${domain}/projects/iqbal-literature</guid>
      <description>Interactive poem analysis app with AI-powered insights and bilingual support for Allama Iqbal's poetry.</description>
    </item>
  </channel>
</rss>`;

const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss);

console.log('Generated sitemap.xml and rss.xml in public/');
