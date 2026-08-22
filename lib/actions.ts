// app/(frontend)/blogs/actions.ts
"use server";

import { getPayloadClient } from "@/lib/getPayload";

const IMAGE_PER_PAGE = 8;

export async function loadMoreImages(page: number) {
  const payload = await getPayloadClient();

  const { docs, hasNextPage } = await payload.find({
    collection: "gallery",
    sort: "-createdAt",
    limit: IMAGE_PER_PAGE,
    page,
  });

  const images = docs
    .map((item) => {
      const img = typeof item.image === "object" ? item.image : null;
      return img?.url
        ? { url: img.url, alt: img.alt || item.title || "Gallery rasm" }
        : null;
    })
    .filter((img): img is { url: string; alt: string } => img !== null);

  return { images, hasNextPage };
}
