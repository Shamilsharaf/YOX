"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Stores = ({ id }) => {
  // Added id prop for navigation
  const storeLocations = [
    { image: assets.store1, name: "IRITTY" },
    { image: assets.store2, name: "IRIKKUR" },
    { image: assets.store3, name: "MATTANNUR" },
    { image: assets.store4, name: "KANNUR" },
  ];

  return (
    <section id={id} className="w-full py-16 md:py-24 bg-white scroll-mt-20">
      {" "}
      {/* Added id and scroll-margin */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Stores
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>{" "}
          {/* Added divider */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at these premium locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {storeLocations.map((store, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={store.image}
                alt={`YOX Store in ${store.name}`}
                width={500}
                height={500}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 2} // Optimize loading for first 2 images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {store.name}
                  </h3>
                </div>
                {/* Added subtle CTA */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-800 transition-all
                      hover:shadow-lg active:scale-95" // Enhanced button states
          >
            View All Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stores;
