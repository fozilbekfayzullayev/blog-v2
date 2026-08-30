"use client";
import Link from "next/link";
import Container from "./Container";
import { FaLinkedin, FaPinterest, FaTelegram } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    if (isOpen) setIsOpen(!isOpen);
    else setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky md:static top-0 bg-white z-50">
      <Container>
        <div className="flex items-center justify-between pt-5 md:pt-8 pb-5">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="fozilbek.blog logo"
              width={145}
              height={32}
              className="w-full object-cover"
            />
          </Link>
          {/* MENU */}
          <Button
            variant={"ghost"}
            size={"icon-lg"}
            className="cursor-pointer z-50"
            onClick={menuHandler}
          >
            {!isOpen ? (
              <IoIosMenu className="block md:hidden cursor-pointer w-8! h-8!" />
            ) : (
              <IoIosClose className="block md:hidden cursor-pointer w-8! h-8!" />
            )}
          </Button>

          {/* DESKTOP MENU */}
          <div className="items-center gap-5 hidden md:flex">
            {/* LINKS */}
            <ul className="flex gap-10 text-xl">
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
            <div className="w-10 h-px bg-gray-500"></div>
            {/* SOCIAL MEDIA LINKS */}
            <ul className="flex gap-5">
              <li>
                <Link
                  href={"https://www.linkedin.com/in/ffozilbek/"}
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link href={"https://t.me/wzworld"} target="_blank">
                  <FaTelegram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.pinterest.com/fayZekart/"}
                  target="_blank"
                >
                  <FaPinterest size={24} />
                </Link>
              </li>
            </ul>
          </div>

          {/* MOBILE MENU */}

          <div
            className={`fixed inset-0 w-full h-screen bg-white/70 z-49 backdrop-blur-md flex md:hidden items-center flex-col transform ${!isOpen ? "-translate-y-full" : "translate-y-0"} transition-transform duration-270 ease-in`}
          >
            <ul className="flex flex-col items-center gap-10 py-40 text-2xl">
              <li onClick={menuHandler}>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li onClick={menuHandler}>
                <Link href={"/gallery"}>Arts</Link>
              </li>
              <li onClick={menuHandler}>
                <Link href={"/about-me"}>About Me</Link>
              </li>
            </ul>
            {/* PATTERT */}
            <div className="w-20 h-px bg-gray-500 mb-10"></div>
            {/* SOCIAL MEDIA LINKS */}
            <ul className="flex gap-10">
              <li onClick={menuHandler}>
                <Link
                  href={"https://www.linkedin.com/in/ffozilbek/"}
                  target="_blank"
                >
                  <FaLinkedin size={32} />
                </Link>
              </li>
              <li onClick={menuHandler}>
                <Link href={"https://t.me/wzworld"} target="_blank">
                  <FaTelegram size={32} />
                </Link>
              </li>
              <li onClick={menuHandler}>
                <Link
                  href={"https://www.pinterest.com/fayZekart/"}
                  target="_blank"
                >
                  <FaPinterest size={32} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="bg-black" />
      </Container>
    </nav>
  );
}
