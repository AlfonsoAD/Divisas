import Image from "next/image";
import { Comfortaa } from "@next/font/google";
import Link from "next/link";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={` bg-zinc-200 ${comfortaa.className} text-xl font-bold`}>
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; Divisas app, 2022.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2 border-l"> App version 0.0.1</span>
          </div>
          <div className="order-1 md:order-2">
            <Link href="https://www.frankfurter.app/" prefetch>
              <span className="px-2 border-l">Sources: Frankfurter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
