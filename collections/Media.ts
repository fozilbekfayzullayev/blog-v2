// collections/Media.ts
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "media", // yoki S3/R2 ishlatsangiz alohida sozlanadi
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
