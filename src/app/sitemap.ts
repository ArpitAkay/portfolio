import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: "2024-02-16T09:32:34.986Z",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
