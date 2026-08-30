// media-to-gallery.mjs
//
// Media collection'dagi (bulk upload qilingan) barcha rasmlarni
// Gallery collection'ga title bilan avtomatik ko'chiradi.
//
// ISHLATISH:
// 1. Quyidagi konfiguratsiyani o'z loyihangizga moslang (field va collection nomlari)
// 2. Terminalda: node media-to-gallery.mjs
//
// ESLATMA: Bu skript loyiha papkasi ichida, Payload config yonida ishga tushirilishi kerak
// (chunki getPayload local config'ni o'qiydi).

import { getPayload } from 'payload'
import config from './payload.config.ts'
import fs from 'node:fs'
import path from 'node:path'

process.stdout.write('SKRIPT BOSHLANDI...\n')

// .env faylni qo'lda yuklash (standalone skript Next.js kabi avtomatik o'qimaydi)
const envPath = path.resolve('.env')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    let value = trimmed.slice(eqIdx + 1).trim()
    value = value.replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
  process.stdout.write('.env fayl yuklandi.\n')
} else {
  process.stdout.write('OGOHLANTIRISH: .env fayl topilmadi! ' + envPath + '\n')
}

// ===== SOZLAMALAR (o'zingizning schema'ngizga qarab o'zgartiring) =====
const MEDIA_COLLECTION = 'media'      // Media collection slug'i
const GALLERY_COLLECTION = 'gallery'  // Gallery collection slug'i
const GALLERY_IMAGE_FIELD = 'image'   // Gallery'dagi rasm relationship maydoni nomi
const GALLERY_TITLE_FIELD = 'title'   // Gallery'dagi title maydoni nomi
const SKIP_ALREADY_LINKED = true      // Allaqachon Gallery'ga qo'shilgan rasmlarni qayta qo'shmaslik
// ========================================================================

async function run() {
  const payload = await getPayload({ config })

  console.log('Media collection\'dan rasmlar olinmoqda...')

  let existingImageIds = new Set()
  if (SKIP_ALREADY_LINKED) {
    const existingGalleryItems = await payload.find({
      collection: GALLERY_COLLECTION,
      limit: 0, // hammasini olish uchun keyin pagination bilan almashtiriladi
      depth: 0,
    })
    // Katta hajm bo'lsa pagination kerak bo'lishi mumkin — pastda to'liq versiyasi bor
    for (const item of existingGalleryItems.docs) {
      const imgField = item[GALLERY_IMAGE_FIELD]
      const imgId = typeof imgField === 'object' ? imgField?.id : imgField
      if (imgId) existingImageIds.add(imgId)
    }
  }

  let page = 1
  let hasNext = true
  let created = 0
  let skipped = 0
  let counter = 1 // title sifatida ishlatiladigan ketma-ket raqam

  while (hasNext) {
    const result = await payload.find({
      collection: MEDIA_COLLECTION,
      limit: 100,
      page,
      sort: 'createdAt', // upload qilingan tartibda 1,2,3... beriladi
    })

    for (const media of result.docs) {
      if (SKIP_ALREADY_LINKED && existingImageIds.has(media.id)) {
        skipped++
        continue
      }

      const title = String(counter)
      counter++

      await payload.create({
        collection: GALLERY_COLLECTION,
        data: {
          [GALLERY_TITLE_FIELD]: title,
          [GALLERY_IMAGE_FIELD]: media.id,
        },
      })

      created++
      console.log(`✓ Yaratildi: "${title}" (media id: ${media.id})`)
    }

    hasNext = result.hasNextPage
    page++
  }

  console.log(`\nTayyor! ${created} ta Gallery yozuvi yaratildi, ${skipped} ta o'tkazib yuborildi (allaqachon mavjud).`)
  process.exitCode = 0
}

run()
  .then(() => {
    process.stdout.write('SKRIPT TUGADI.\n')
  })
  .catch((err) => {
    console.error('XATOLIK YUZ BERDI:')
    console.error(err)
    process.exitCode = 1
  })
