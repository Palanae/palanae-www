import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.palanae.com", changeFrequency: "monthly", priority: 1 },
    { url: "https://www.palanae.com/pricing", changeFrequency: "monthly", priority: 0.8 },
  ];
}
