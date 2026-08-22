import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

interface LinkButtonProps {
  text: string;
  link: string;
}

export default function LinkButton({ link, text }: LinkButtonProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 font-bold group py-2 w-fit shrink-0"
    >
      <span>{text}</span>
      <IoMdArrowForward className="group-hover:translate-x-1.5 duration-75 ease-in text-xl" />
    </Link>
  );
}
