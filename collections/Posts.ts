// collections/Posts.ts
import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedDate", "status"],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: "published" } };
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
      validate: (value: string | null | undefined) => {
        if (!value) return "Slug talab qilinadi";
        if (!/^[a-z0-9-]+$/.test(value)) {
          return "Slug faqat kichik harflar, raqamlar va chiziqchadan iborat bo'lishi kerak (masalan, ingliz tili yordamida yoki apostrofsiz o'zbek tili)";
        }

        return true;
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: {
        description: "Qisqa tavsif — ro'yxat sahifasida ko'rinadi",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
