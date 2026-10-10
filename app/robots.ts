import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://vish-studio.github.io/nxt-sspower-pros";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
