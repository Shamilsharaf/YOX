"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateY(16rem)";
  };

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMenu(); // Close mobile menu after click
  };

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 shadow-md bg-white">
        <a href="#top" onClick={(e) => handleSmoothScroll(e, "top")}>
          <Image
            src={assets.logo}
            alt="YOX Logo"
            className="w-40 cursor-pointer mr-10"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 mx-auto text-xl">
          <li>
            <a href="#top" onClick={(e) => handleSmoothScroll(e, "top")}>
              Home
            </a>
          </li>
          <li>
            <a href="#stores" onClick={(e) => handleSmoothScroll(e, "stores")}>
              Stores
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu button remains same */}
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 z-50 h-screen bg-yellow-50 transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image src={assets.close} alt="" className="w-5 cursor-pointer" />
        </div>
        <li>
          <a href="#top" onClick={(e) => handleSmoothScroll(e, "top")}>
            Home
          </a>
        </li>
        <li>
          <a href="#stores" onClick={(e) => handleSmoothScroll(e, "stores")}>
            Stores
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
