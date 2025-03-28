"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const sideMenuRef = useRef();
  const menuButtonRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 shadow-md bg-white">
        <a
          href="#top"
          onClick={(e) => handleSmoothScroll(e, "top")}
          className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          aria-label="Go to top"
        >
          <Image
            src={assets.logo}
            alt="YOX Logo"
            width={160}
            height={40}
            className="w-32 sm:w-40 cursor-pointer"
            priority
          />
        </a>

        {/* Desktop Navigation - Increased font size */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 px-4 lg:px-8 py-2 mx-auto bg-white/80 backdrop-blur-sm rounded-full text-lg">
          {["top", "stores", "about", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="px-3 py-2 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                {item === "top"
                  ? "Home"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="w-7 h-7 text-gray-800" />
          ) : (
            <FaBars className="w-7 h-7 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu - Increased font size */}
      <div
        ref={sideMenuRef}
        className={`md:hidden fixed top-0 right-0 w-64 h-full z-40 bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={closeMenu}
            className="self-end p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            aria-label="Close menu"
          >
            <FaTimes className="w-6 h-6 text-gray-800" />
          </button>

          <ul className="flex flex-col gap-6">
            {["top", "stores", "about", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleSmoothScroll(e, item)}
                  className="block px-4 py-3 text-xl hover:bg-amber-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {item === "top"
                    ? "Home"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
