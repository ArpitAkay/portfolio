import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: "2024-02-28T17:00:00.021Z",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}linkedin`,
      lastModified: "2024-02-28T17:00:00.021Z",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}github`,
      lastModified: "2024-02-28T17:00:00.021Z",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}resume`,
      lastModified: "2024-02-28T17:00:00.021Z",
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
