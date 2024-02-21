import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: "2024-02-21T19:00:00.021Z",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
