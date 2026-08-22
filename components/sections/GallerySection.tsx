import Image from "next/image";
import HeaderButton from "../shared/HeaderButton";
import { Separator } from "../ui/separator";

export default function GallerySection() {
  return (
    <section className="pt-8 md:pt-12 pb-20">
      <div className="flex justify-between mb-20">
        <h2 className="text-5xl md:text-8xl font-bold uppercase">Gallery</h2>
        <HeaderButton text="All arts" link="/gallery" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-15">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-full aspect-9/16 group cursor-pointer">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={`/images/${i + 1}.jpg`}
                alt="Image"
                fill
                className="object-cover mix-blend-multiply grayscale-75 group-hover:grayscale-0 transition duration-200 ease-in group-hover:scale-105"
              />
              <div className="absolute w-15 h-10 bottom-5 left-5">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-white"></div>
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white"></div>
                <p className="text-white absolute left-2 bottom-2">2026</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Separator className="bg-black" />
    </section>
  );
}
