import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateY(16rem)";
  };

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 shadow-md bg-white">
        <a href="top">
          <Image
            src={assets.logo}
            alt=""
            className="w-40 cursor-pointer mr-10"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 mx-auto text-xl">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Stores">Stores</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <div>
          <button className="block md:hidden ml-3 " onClick={openMenu}>
            <Image src={assets.menu} alt="" className="w-6" />
          </button>
        </div>

        {/* ------mobile menu------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 
        bottom-0 -right-64 w-64 z-50 h-screen bg-yellow-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#About">
              About Us
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Stores">
              Stores
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
