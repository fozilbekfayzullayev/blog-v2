import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Users } from "./collections/Users";
import { Posts } from "./collections/Posts";
import { Gallery } from "./collections/Gallery";
import { Media } from "./collections/Media";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Posts, Gallery, Media],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
});
