"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Header = ({ id }) => {
  // Added id prop
  const openInstagram = () => {
    window.open("https://www.instagram.com/yox.mensstore/", "_blank");
  };

  return (
    <section id={id} className="relative w-full h-screen flex">
      {" "}
      {/* Added id attribute */}
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 bg-gray-50">
        <div className="text-left max-w-md w-full">
          <h1 className="mb-4">
            <span className="text-2xl md:text-3xl font-medium text-gray-600">
              Welcome to{" "}
            </span>
            <span className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600">
              YOX
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Premium men's fashion for style and comfort
          </p>

          <div className="flex justify-center">
            <button
              onClick={openInstagram}
              className="group bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Shop Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      {/* Right side - Image */}
      <div className="hidden md:block md:w-1/2 h-full relative">
        <Image
          src={assets.background}
          alt="YOX Clothing"
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="50vw"
        />
      </div>
    </section>
  );
};

export default Header;
