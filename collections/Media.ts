// collections/Media.ts
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  upload: true, // staticDir emas
  fields: [{ name: "alt", type: "text" }],
};
