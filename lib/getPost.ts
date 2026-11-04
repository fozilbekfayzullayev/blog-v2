import { cache } from "react";
import { getPayloadClient } from "./getPayload";

export const getPost = cache(async (slug: string) => {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "posts",
    where: {
      and: [{ status: { equals: "published" } }, { slug: { equals: slug } }],
    },
    limit: 1,
  });

  return docs[0] ?? null;
});
