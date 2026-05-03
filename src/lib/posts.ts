import type { ComponentType } from "react";
import * as bondiFormwork from "@/content/posts/carpentry-formwork-bondi-eastern-suburbs";

export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date (YYYY-MM-DD)
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  readingMinutes: number;
};

export type PostModule = {
  meta: PostMeta;
  PostBody: ComponentType;
};

const all: PostModule[] = [bondiFormwork];

export const posts: PostModule[] = [...all].sort(
  (a, b) => +new Date(b.meta.publishedAt) - +new Date(a.meta.publishedAt),
);

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.meta.slug === slug);

export const allPostSlugs = () => posts.map((p) => p.meta.slug);
