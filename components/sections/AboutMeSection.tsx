import Image from "next/image";
import HeaderButton from "../shared/HeaderButton";

export default function AboutMeSection() {
  return (
    <section className="pt-8 md:pt-12 pb-20">
      <div className="flex justify-between mb-20">
        <h2 className="text-5xl md:text-8xl font-bold uppercase">About Me</h2>
        <HeaderButton text="About me" link="/about-me" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 divide-y lg:divide-y-0 lg:divide-x divide-black">
        <div className="flex items-center pr-10 gap-5 pb-5 lg:pb-0">
          <div className="w-25 h-25 sm:w-35 sm:h-35 aspect-square bg-stone-200 overflow-hidden cursor-pointer rounded-full border-5 border-black">
            <Image
              src="/images/me.png"
              alt="Profile picture"
              width={640}
              height={640}
              objectFit="cover"
              className="hover:scale-105 transition duration-200 ease-in"
            />
          </div>
          <h2 className="text-2xl">Fozilbek Fayzullayev</h2>
        </div>
        <div className="flex items-center gap-5 lg:ml-10 ">
          <div className="w-25 h-25 sm:w-35 sm:h-35 aspect-square bg-stone-200 overflow-hidden cursor-pointer rounded-full border-5 border-black">
            <Image
              src="/images/image.jpg"
              alt="Profile picture"
              width={640}
              height={640}
              objectFit="cover"
              className="hover:scale-105 transition duration-200 ease-in"
            />
          </div>
          <h2 className="text-2xl">fayZek</h2>
        </div>
      </div>
    </section>
  );
}
