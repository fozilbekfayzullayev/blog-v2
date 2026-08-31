import Link from "next/link";
import Container from "./Container";
import { FaLinkedin, FaPinterest, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white py-20 relative">
      <Container>
        <div className="flex items-start justify-between">
          <Link href={"/"} className="text-4xl font-bold flex flex-col">
            <span>ART</span>
            <span>&LIFE</span>
          </Link>
          <div className="flex gap-10">
            <ul className="flex gap-2 md:text-xl flex-col">
              <li className="h-7 overflow-hidden">
                <Link
                  href={"/blogs"}
                  className="flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1/2"
                >
                  <span className="h-7">Blogs</span>
                  <span className="h-7">Blogs</span>
                </Link>
              </li>
              <li className="h-7 overflow-hidden">
                <Link
                  href={"/gallery"}
                  className="flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1/2"
                >
                  <span className="h-7">Arts</span>
                  <span className="h-7">Arts</span>
                </Link>
              </li>
              <li className="h-7 overflow-hidden">
                <Link
                  href={"/about-me"}
                  className="flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1/2"
                >
                  <span className="h-7">About Me</span>
                  <span className="h-7">About Me</span>
                </Link>
              </li>
            </ul>
            {/* PATTERT */}
            <div className="w-px h-auto bg-gray-500"></div>
            {/* SOCIAL MEDIA LINKS */}
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"https://www.linkedin.com/in/ffozilbek/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profilim"
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://t.me/wzworld"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram profilim"
                >
                  <FaTelegram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.pinterest.com/fayZekart/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest profilim"
                >
                  <FaPinterest size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <p className="text-sm absolute bottom-2 translate-x-[-50%] left-[50%]">
        Created by fayzek
      </p>
    </div>
  );
}
