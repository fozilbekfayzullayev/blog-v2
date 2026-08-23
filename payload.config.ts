import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Users } from "./collections/Users";
import { Posts } from "./collections/Posts";
import { Gallery } from "./collections/Gallery";
import { Media } from "./collections/Media";

const payloadSecret = process.env.PAYLOAD_SECRET;
const databaseUrl = process.env.DATABASE_URL;
const blobReadWriteToken = process.env.BLOB_READ_WRITE_TOKEN;

if (!databaseUrl)
  throw new Error("DATABASE_URL environment variable topilmadi");
if (!payloadSecret)
  throw new Error("PAYLOAD_SECRET environment variable topilmadi");
if (!blobReadWriteToken)
  throw new Error("BLOB_READ_WRITE_TOKEN environment variable topilmadi");

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Posts, Gallery, Media],
  secret: payloadSecret,
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
  }),
  plugins: [
    vercelBlobStorage({
      collections: { media: true },
      token: blobReadWriteToken,
    }),
  ],
  sharp,
});
