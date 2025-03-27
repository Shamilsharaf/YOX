"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const AboutUs = ({ id }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <section
      id={id}
      className="w-full pt-8 pb-16 md:py-16 bg-white scroll-mt-20"
    >
      {/* Added 2 empty spaces (2rem = 32px) before content */}
      <div className="h-8"></div> {/* First empty space */}
      <div className="h-8"></div> {/* Second empty space */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        </div>

        {/* History Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 h-auto">
            <Image
              src={assets.about}
              alt="YOX Store"
              width={500}
              height={350}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              From Humble Beginnings
            </h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Founded in 2010 as a small gents' wear shop in Irikkur, YOX has
                grown into a leading clothing brand over 12 remarkable years.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Today, our family of 20 dedicated professionals continues to
                drive the company forward, offering an extensive range of
                premium branded apparel to our valued customers.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center my-10">
          <button
            onClick={() => setShowFullContent(!showFullContent)}
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-600 transition-all shadow-md"
          >
            {showFullContent ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Collapsible Content */}
        {showFullContent && (
          <div className="animate-fadeIn">
            {/* Mission Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Vision for 2025
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">
                    Expansion Plans
                  </h3>
                  <p className="text-gray-600">
                    We're launching 10 new outlets across key locations
                    including Kannur, Iritty, Taliparamba, Kuthuparamba, and
                    Sreekandapuram (with 3 already operational). Our goal
                    includes 25% in-house garment production to ensure quality
                    control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">
                    Quality Commitment
                  </h3>
                  <p className="text-gray-600">
                    We're dedicated to providing premium-quality clothing at
                    competitive prices. Our focus remains on exceptional
                    fabrics, craftsmanship, and value that keeps our customers
                    returning.
                  </p>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">
                    Extensive Selection
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We offer 20+ styles of men's fashion, featuring top brands
                    like:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-gray-600">
                    <li>• Bennex Kingdom</li>
                    <li>• Ben Grossman</li>
                    <li>• Canwins</li>
                    <li>• Heniis</li>
                    <li>• Skyre Jeans</li>
                    <li>• And more...</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">
                    Custom Tailoring
                  </h3>
                  <p className="text-gray-600">
                    Our specialty wedding suits and custom orders are crafted
                    with precision and delivered within guaranteed timelines.
                    From measurement to final fitting, we handle every detail to
                    ensure your special occasion look is perfect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
