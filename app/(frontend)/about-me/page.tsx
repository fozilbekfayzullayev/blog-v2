/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import GoBackButton from "@/components/shared/GoBackButton";
import Image from "next/image";
import AboutMeImg from "@/public/images/about-me.svg";

export default function AboutMe() {
  return (
    <Container>
      <div className="mt-10 mb-20">
        <Image
          src={AboutMeImg}
          alt="Bannerdagi ABOUT ME rasmi"
          width={884}
          height={183}
          className="w-full mb-10 object-cover mx-auto"
          priority
        />
        <GoBackButton link="/" text="Back" />
        <div className="flex gap-5 flex-col lg:flex-row mt-10">
          <div className="flex flex-col gap-5 bg-black/90 py-8 px-5 md:px-10 text-white">
            <div className="flex gap-5 items-center">
              <div className="w-25 h-25 sm:w-35 sm:h-35 aspect-square bg-stone-200 rounded-full overflow-hidden cursor-pointer border-5">
                <Image
                  src="/images/me.png"
                  alt="Profile picture"
                  width={640}
                  height={640}
                  className="object-cover hover:scale-105 transition duration-200 ease-in"
                />
              </div>
              <h2 className="text-[24px] lg:text-4xl font-semibold flex flex-col">
                <span>Fozilbek</span>
                <span>Fayzullayev</span>
              </h2>
            </div>
            <p>
              Salom! Mening blog sahifam va ijodiy ishlarim jamlangan saytimga
              xush kelibsiz! Men dasturlashga qiziqadigan va doim nimanidir
              o'rganib yuradigan odamman. Hozirda ko'proq web dasturlash bilan
              shug'ullanyapman. JavaScript, React, Next.js va boshqa zamonaviy
              texnologiyalar bilan ishlash menga yoqadi. Hozir asosiy
              e'tiborimni web dasturlashni chuqurroq o'rganishga qaratganman.
              Yangi texnologiyalarni sinab ko'rish, kichik loyihalar qilish va
              xatolar orqali o'rganish — mening eng ko'p foydalanadigan
              o'rganish usulim. Dasturlashdan tashqari, yangi texnologiyalar,
              internetdagi qiziqarli loyihalar va turli xil g'oyalar meni
              qiziqtiradi. Ba'zan biror narsani shunchaki qiziq bo'lgani uchun
              o'rganib ketaman. Natijada kichik bir qiziqish yangi loyiha yoki
              yangi bilimga aylanib qoladi. Masalan elektronika, bu boyicha
              qilgan kichik ishlarimni telegram kanalimda ko'rishingiz mumkin.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-teal-900 py-8 px-5 md:px-10 text-white">
            <div className="flex gap-5 items-center">
              <div className="w-25 h-25 sm:w-35 sm:h-35 aspect-square bg-stone-200 rounded-full overflow-hidden cursor-pointer border-5">
                <Image
                  src="/images/image.jpg"
                  alt="Profile picture"
                  width={640}
                  height={640}
                  objectFit="cover"
                  className="hover:scale-105 transition duration-200 ease-in"
                />
              </div>
              <h2 className="text-[24px] lg:text-4xl font-semibold">fayZek</h2>
            </div>
            <p>
              Salom! Bu fayZek mening ijodkorroq tarafim. Arts bo'limida shu
              nicknameni ko'rishingiz mumkin, fayZek_art. Buni 2019 yil twitter
              uchun nickname qilib beradikan saytda yasab olganman, keyin
              o'yinlar uchun nickname sifatida ishlatdim keyin rasmlarga ham.
              Nickname? bunday oliftagarchilik nega kerak deyishingiz mumkin, ha
              shunday ko'rinishi mumkin, lekin men yoshligimdan street
              artistlarni kuzatganim uchun men ham nickname qo'ydim. Misol:
              Inkuzart, Gawxart, Wexxart, Banksy. Xullas shunday gaplar. Enjoy
              my art ;)
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
