import Container from "@/components/shared/Container";
import GoBackButton from "@/components/shared/GoBackButton";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Container>
      <div className="mt-10 mb-20">
        <Image
          src={"/images/about-me.svg"}
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
                  objectFit="cover"
                  className="hover:scale-105 transition duration-200 ease-in"
                />
              </div>
              <h2 className="text-[24px] lg:text-4xl font-semibold flex flex-col">
                <span>Fozilbek</span>
                <span>Fayzullayev</span>
              </h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              repellat, corporis esse, vero neque ab tempore optio quas fuga
              deleniti iure voluptate suscipit debitis, dolor facilis
              perspiciatis inventore cupiditate beatae doloremque. Asperiores
              obcaecati quos hic veritatis harum minima voluptas, dolorum ut ea
              similique placeat doloribus minus quod cupiditate alias delectus
              repudiandae nihil vero natus, culpa odio ex. Vero dignissimos vel
              ad ullam accusantium quis eum facilis. Ullam ut amet natus quidem
              ipsum sequi doloribus minus, veritatis repellat eligendi fugit ex.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              repellat, corporis esse, vero neque ab tempore optio quas fuga
              deleniti iure voluptate suscipit debitis, dolor facilis
              perspiciatis inventore cupiditate beatae doloremque. Asperiores
              obcaecati quos hic veritatis harum minima voluptas, dolorum ut ea
              similique placeat doloribus minus quod cupiditate alias delectus
              repudiandae nihil vero natus, culpa odio ex. Vero dignissimos vel
              ad ullam accusantium quis eum facilis. Ullam ut amet natus quidem
              ipsum sequi doloribus minus, veritatis repellat eligendi fugit ex.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
