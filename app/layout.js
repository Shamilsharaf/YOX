import { Outfit } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa"; // Add this import

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "YOX Mens Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        {children}

        {/* WhatsApp Floating Button - Add this component */}
        <div className="fixed bottom-6 right-6 z-50 group">
          <a
            href="https://wa.me/+918891910531?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            aria-label="WhatsApp Us"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="absolute right-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              WhatsApp Us
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
