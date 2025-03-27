"use client";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header id="top" /> {/* Added ID */}
      <Stores id="stores" /> {/* Added ID */}
      <AboutUs id="about" /> {/* Added ID */}
      <ContactUs id="contact" /> {/* Added ID */}
    </>
  );
}
