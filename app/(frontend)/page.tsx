/* eslint-disable react/no-unescaped-entities */
import BlogSection from "@/components/sections/BlogSection";
import GallerySection from "@/components/sections/GallerySection";
import Container from "@/components/shared/Container";
import Image from "next/image";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ArtLiveImg from "@/public/images/art-live.svg";

export default function Home() {
  return (
    <Container>
      <div className="pt-10">
        <Image
          src={ArtLiveImg}
          alt="Bannerdagi ART&LIFE rasmi"
          width={1358}
          height={183}
          className="w-full mb-10 object-cover mx-auto"
          priority
        />
        <div className="w-full bg-black text-white flex items-center py-3 md:py-6 overflow-hidden">
          <p className="font-bold px-3 whitespace-nowrap shrink-0 text-sm md:text-lg">
            QUOTE+++
          </p>
          <div className="flex overflow-hidden whitespace-nowrap w-full">
            <div className="flex animate-marquee shrink-0">
              <p className="text-sm md:text-lg flex shrink-0">
                <span className="px-5">
                  "Katta kuch katta masuliyat demakdir" -Ben Parker
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  "Katta kuch katta masuliyat demakdir" -Ben Parker
                </span>
                <span className="px-5">++++</span>
              </p>
              <p
                className="text-sm md:text-lg flex shrink-0"
                aria-hidden="true"
              >
                <span className="px-5">
                  "Katta kuch katta masuliyat demakdir" -Ben Parker
                </span>
                <span className="px-5">++++</span>
                <span className="px-5">
                  "Katta kuch katta masuliyat demakdir" -Ben Parker
                </span>
                <span className="px-5">++++</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
      <GallerySection />
      <AboutMeSection />
    </Container>
  );
}
