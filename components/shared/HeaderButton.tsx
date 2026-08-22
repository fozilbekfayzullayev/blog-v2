import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

interface HeaderButtonProps {
  text: string;
  link: string;
}

export default function HeaderButton({ link, text }: HeaderButtonProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 font-bold group py-2 w-fit"
    >
      <span className="hidden sm:block">{text}</span>
      <IoMdArrowForward className="group-hover:translate-x-1.5 duration-75 ease-in text-2xl sm:text-xl" />
    </Link>
  );
}
