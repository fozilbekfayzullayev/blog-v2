import type { Post } from "@/payload-types";
import { calculateReadTime } from "./readTime";

export const FALLBACK_IMAGE =
  "https://cdn.prod.website-files.com/6240546a63932414bcd71bf5/6240a3d49d0194e1ec5e9d68_post-dont-close-your-eyes.jpg";

export type PostCardData = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string | null;
  publishedDate?: string | null;
  readTime: number;
  imageUrl: string;
};

export function toPostCardData(post: Post): PostCardData {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedDate: post.publishedDate,
    readTime: calculateReadTime(post.content),
    imageUrl:
      typeof post.coverImage === "object" && post.coverImage?.url
        ? post.coverImage.url
        : FALLBACK_IMAGE,
  };
}
