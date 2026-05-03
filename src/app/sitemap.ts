import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { suburbs } from "@/lib/suburbs";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/blog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const suburbRoutes = suburbs.map((s) => ({
    url: `${base}/areas/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.meta.slug}`,
    lastModified: new Date(p.meta.updatedAt || p.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...suburbRoutes, ...postRoutes];
}
