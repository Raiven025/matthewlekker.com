import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matthewlekker.com';
  const lastBuild = new Date('2026-06-09');

  return [
    {
      url: baseUrl,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/residential`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/exterior`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/commercial`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/hospitality`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastBuild,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Blog excluded until content exists   currently noindex
  ];
}
