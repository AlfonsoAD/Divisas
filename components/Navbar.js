import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logoDivisas.png";
import { Comfortaa } from "@next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav
      className={`bg-green-700 border-gray-200 px-4 sm:px-4 py-4 ${comfortaa.className}`}
    >
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <Link href="/home" className="flex items-center">
          <Image
            src={Logo}
            height="48"
            width="40"
            className="h-8 mr-3 sm:h-8"
            alt="Logo divisas app"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Divisas App
          </span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
