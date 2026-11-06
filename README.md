Next.js va Payload CMS asosida qurilgan blog sayti. Maqolalar, rasmlar galereyasi va "Men haqimda" bo'limi bor. Kontentni admin panel orqali boshqarish mumkin.

## Skrinshotlar

### Bosh sahifa
![Bosh sahifa](<img width="2561" height="7282" alt="FireShot Capture 041 - Fozilbek - Blog -  www fozilbek dev" src="https://github.com/user-attachments/assets/acf87e51-abc0-4cd4-9eda-9c4b024207dd" />)
<!-- [SCREENSHOT: bosh sahifa] -->

### Bloglar ro'yxati
![Bloglar](<img width="2561" height="2901" alt="FireShot Capture 042 - Fozilbek - Blog -  www fozilbek dev" src="https://github.com/user-attachments/assets/904d5d7a-3005-4d88-bbe0-fc0d73079e82" />)
<!-- [SCREENSHOT: bloglar ro'yxati] -->

### Blog posti
![Blog posti](<img width="2561" height="3783" alt="FireShot Capture 045 - Birinchi hackathon (yoki hakaton) - Fozilbek -  www fozilbek dev" src="https://github.com/user-attachments/assets/ce88abde-8132-428f-a007-87f7832e07dd" />)
<!-- [SCREENSHOT: bitta blog posti sahifasi] -->

### Galereya
![Galereya](<img width="2561" height="4145" alt="FireShot Capture 043 - Fozilbek - Blog -  www fozilbek dev" src="https://github.com/user-attachments/assets/63cce938-310d-45fb-89d4-58a26836d27c" />)
<!-- [SCREENSHOT: galereya sahifasi] -->

### About me sahifa
![About me](<img width="2561" height="1938" alt="FireShot Capture 044 - Fozilbek - Blog -  www fozilbek dev" src="https://github.com/user-attachments/assets/00b24689-4b2e-46d1-a38c-74d7e1a2b92f" />)
<!-- [SCREENSHOT: /about me] -->

## Imkoniyatlar

- Blog postlarini yaratish, tahrirlash va nashr qilish (qoralama va nashr holati)
- Rich text editor bilan boy formatlangan kontent
- Postlar uchun muqova rasmi va qisqa tavsif
- Galereya: rasmlarni bulk upload qilish va tavsiflash
- "Men haqimda" sahifasi
- Admin panel va REST/GraphQL API

## Texnologiyalar

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 va TypeScript
- [Payload CMS](https://payloadcms.com) 3
- PostgreSQL
- Vercel Blob (media saqlash)
- Tailwind CSS 4 va shadcn/ui

## Loyiha tuzilishi

```
app/
  (frontend)/   Sayt sahifalari: /, /about-me, /blogs, /gallery
  (payload)/    Admin panel (/admin) va API
collections/    Posts, Gallery, Media, Users
components/     Bo'limlar va umumiy komponentlar
lib/            Yordamchi funksiyalar
payload.config.ts
```

## O'rnatish

Talablar: Node.js 20+, pnpm 10, PostgreSQL.

```bash
git clone https://github.com/fozilbekfayzullayev/blog-v2.git
cd blog-v2
pnpm install
```

Loyiha ildizida `.env` fayl yarating:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/blog
PAYLOAD_SECRET=your-secret-here
BLOB_READ_WRITE_TOKEN=
```

- `DATABASE_URL` — PostgreSQL ulanish manzili (majburiy)
- `PAYLOAD_SECRET` — Payload uchun maxfiy kalit (majburiy)
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob tokeni (lokalda ixtiyoriy, production'da majburiy)

Ishga tushirish:

```bash
pnpm dev
```

- Sayt: http://localhost:3000
- Admin panel: http://localhost:3000/admin (birinchi kirishda admin foydalanuvchi yaratasiz)

## Skriptlar

| Buyruq       | Vazifasi                     |
| ------------ | ---------------------------- |
| `pnpm dev`   | Development server           |
| `pnpm build` | Production build             |
| `pnpm start` | Production serverni ishga tushirish |
| `pnpm lint`  | Kodni tekshirish (ESLint)    |

## Deploy

Loyiha Vercel'ga deploy qilish uchun tayyor. Vercel'da yuqoridagi muhit o'zgaruvchilarini sozlang.

## Muallif

**Fozilbek Fayzullayev** — [GitHub](https://github.com/fozilbekfayzullayev)
