"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Header = ({ id }) => {
  const openInstagram = () => {
    window.open("https://www.instagram.com/yox.mensstore/", "_blank");
  };

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex flex-col md:flex-row"
    >
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-50 order-2 md:order-1">
        <div className="text-center md:text-left max-w-md w-full">
          <h1 className="mb-4">
            <span className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-600">
              Welcome to{" "}
            </span>
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 block mt-2">
              YOX
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-xl text-gray-600 mb-8 leading-relaxed">
            Premium men's fashion for style and comfort
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={openInstagram}
              className="group bg-black text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-bold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Shop Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative order-1 md:order-2">
        <Image
          src={assets.background}
          alt="YOX Clothing"
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default Header;
