"use client";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

const ContactUs = ({ id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("border-gray-200", "shadow-lg");
            setTimeout(() => {
              entry.target.classList.remove("border-gray-200", "shadow-lg");
            }, 1500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main Contact Section with optimized scroll */}
      <section
        id={id}
        ref={sectionRef}
        className="w-full bg-gray-50 scroll-mt-[85px] py-12 md:py-16 transition-all duration-300 border-4 border-transparent"
        style={{ scrollMarginTop: "150px" }} // Adjust based on your navbar height
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-md font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-gray-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Our Stores
                  </h4>
                  <p className="text-gray-600">
                    Iritty, Irikkur, Mattannur, Kannur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-gray-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-gray-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@yoxclothing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-gray-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Working Hours
                  </h4>
                  <p className="text-gray-600">Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">YOX</h3>
              <p className="text-gray-400 text-sm">
                Premium men's fashion for style and comfort since 2010.
              </p>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Stores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3 mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-1 rounded-l-lg w-full text-gray-900 text-sm"
                />
                <button className="bg-gray-600 text-white px-3 rounded-r-lg text-sm hover:bg-gray-700">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} YOX Clothing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
