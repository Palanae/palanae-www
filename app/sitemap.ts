import type { MetadataRoute } from "next";

// One page, hand-listed. If this site ever grows routes, add them here — Next
// does not discover them.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.palanae.com", changeFrequency: "monthly", priority: 1 }];
}
