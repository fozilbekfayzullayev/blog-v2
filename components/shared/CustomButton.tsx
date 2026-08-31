import Link from "next/link";

interface CustomButtonProps {
  text: string;
  link: string;
}

export default function CustomButton({ link, text }: CustomButtonProps) {
  return (
    <Link
      href={link}
      className="shrink-0 bg-black text-white border border-black rounded-lg group py-1 px-2 w-fit hover:bg-white hover:text-black transition duration-100 ease-in"
    >
      {text}
      <span className="sr-only"> — {link}</span>
    </Link>
  );
}
