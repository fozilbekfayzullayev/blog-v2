import Link from "next/link";
import Image from "next/image";
import ProfileImg from "@/public/images/image.jpg";

export default function SideContent() {
  return (
    <div className="static lg:sticky top-10 flex-col items-center mx-auto w-fit bg-white shadow-md rounded-lg overflow-hidden flex sm:hidden xl:flex">
      <div className="flex flex-col items-center bg-stone-900 w-full py-5">
        <div className="w-25 h-25 bg-white rounded-full mb-4 relative overflow-hidden">
          <Image
            src={ProfileImg}
            alt="Profile picture"
            width={640}
            height={640}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <p className="font-medium text-lg text-white">Stajor Dasturchi</p>
      </div>
      <div className="flex flex-col px-5 py-8 gap-3">
        <div className="flex flex-col">
          <Link
            href={"https://t.me/stajordasturchi"}
            className="text-blue-500"
            target="_blank"
          >
            t.me/stajordasturchi
          </Link>
          <span className="text-muted-foreground">Link</span>
        </div>
        <p>Dasturlash va livestyle haqidagi blog</p>
        <div className="flex flex-col">
          <Link
            href={"https://fozilbek.dev"}
            className="text-blue-500"
            target="_blank"
          >
            https://fozilbek.dev
          </Link>
          <Link
            href={"http://github.com/ffozilbek"}
            className="text-blue-500"
            target="_blank"
          >
            http://github.com/ffozilbek
          </Link>
          <span className="text-muted-foreground">Description</span>
        </div>
        <Link
          href={"https://fozilbek.dev"}
          className="text-blue-500 uppercase border border-stone-600 text-center p-1 rounded-md"
          target="_blank"
        >
          View Channel
        </Link>
      </div>
    </div>
  );
}
