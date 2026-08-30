// collections/Gallery.ts
import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  upload: true, // <-- shu qo'shildi: endi Gallery Media kabi bulk upload'ni qabul qiladi
  fields: [
    {
      name: "title",
      type: "text",
      required: false, // <-- majburiy emas qilindi, aks holda bulk upload'da 155 tasiga birma-bir title yozishga majbur bo'lasiz
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
