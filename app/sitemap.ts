import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://milestac.com";
  const now = new Date().toISOString();

  return [
    // ── Core Pages ──────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Table Top Models ────────────────────────────────
    {
      url: `${baseUrl}/products/galaxy-pro-v1`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/pro-v1-cafe-speciality`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Standing / Floor Models ─────────────────────────
    {
      url: `${baseUrl}/products/galaxy-pro-v2`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v4-a`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v4-b`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v6`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v8`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Mobile Cart Models ──────────────────────────────
    {
      url: `${baseUrl}/products/galaxy-ev`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v2c`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/galaxy-pro-v4c`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ── Specialty Products ──────────────────────────────
    {
      url: `${baseUrl}/products/gelato-panini`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
