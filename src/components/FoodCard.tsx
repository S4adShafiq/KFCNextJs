"use client";

import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ food }: any) {
  const f = food.attributes || food;
  const imageObj = f.image?.[0];
  const img = imageObj?.formats?.medium?.url || imageObj?.url || null;

  return (
    <div className="relative w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[250px] flex-shrink-0">
      {/* Clickable Card */}
      <Link href={`/food/${f.slug}`} className="block h-64 sm:h-72 md:h-80 relative bg-[#1a1a1a] rounded overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Decorative red tabs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-1 mt-2">
          <div className="w-3 h-8 bg-red-600"></div>
          <div className="w-3 h-8 bg-red-600"></div>
          <div className="w-3 h-8 bg-red-600"></div>
        </div>

        {/* Food Image */}
        {img && (
          <div
            className="flex justify-center items-center h-48 sm:h-52 md:h-56"
            style={{
              marginTop:
                f.imageMarginTop !== undefined ? f.imageMarginTop : "5rem",
            }}
          >
            <Image
              src={`http://localhost:1337${img}`}
              alt={f.name}
              width={300}
              height={150}
              className="object-cover max-h-full"
            />
          </div>
        )}

        {/* Food Title */}
        <div className="absolute top-10 left-3 z-20 text-white">
          <h2 className="text-base sm:text-lg font-bold">{f.name}</h2>
        </div>

        {/* Price Ribbon */}
        <div className="absolute top-16 right-0 bg-red-600 text-white font-bold px-3 py-1 rounded-l-full shadow-lg z-10 text-sm sm:text-base">
          Rs {f.price}
        </div>
      </Link>

      {/* Floating Button */}
      <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ease-in-out">
        <button className="bg-red-600 text-white text-sm px-6 py-2 rounded-md hover:bg-white hover:text-red-600 transition-colors duration-300 font-semibold shadow-md whitespace-nowrap">
          + Add to Bucket
        </button>
      </div>
    </div>
  );
}
