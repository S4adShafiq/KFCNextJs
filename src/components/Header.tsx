"use client"
import Image from "next/image";
import { useState } from "react";
import CategoryList from "./CategoryList";

export default function Header() {
  const [selectedMode, setSelectedMode] = useState<"delivery" | "pickup">("delivery");

  return (
    <header className="w-full bg-black text-white flex items-center justify-between px-4 py-3 shadow-md">
      {/* Left: Menu + Logo */}
      <div className="flex items-center space-x-4">
        <button className="text-white text-2xl">&#9776;</button>
        <Image src="/logo.png" alt="Logo" width={120} height={10} />
      </div>

      {/* Middle: Delivery & Pickup toggle */}
      <div className="flex space-x-2">
        <button
          onClick={() => setSelectedMode("delivery")}
          className={`flex items-center space-x-2 px-4 py-1 rounded ${
            selectedMode === "delivery" ? "bg-red-600 border border-white" : "bg-[#1c1c1c]"
          }`}
        >
          <Image
            src="/del.png" // Replace with actual icon or use emoji
            alt="Delivery"
            width={20}
            height={20}
          />
          <span className="font-bold text-sm">DELIVERY</span>
        </button>

        <button
          onClick={() => setSelectedMode("pickup")}
          className={`flex items-center space-x-2 px-4 py-1 rounded transition-colors duration-200 ${
            selectedMode === "pickup"
              ? "bg-red-600 border border-white hover:bg-white hover:text-red-600"
              : "bg-[#1c1c1c] hover:bg-white hover:text-red-600"
          }`}
        >
          <Image
            src="/pick.png" // Replace with actual icon or use emoji
            alt="Pickup"
            width={20}
            height={20}
          />
          <span className="font-bold text-sm">PICKUP</span>
        </button>
      </div>
      <CategoryList />

      {/* Right: Cart + Login */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image src="/bucket.png" alt="Cart" width={30} height={30} />
          <span className="absolute -top-1 -right-2 bg-red-600 text-xs rounded-full px-1">
            0
          </span>
        </div>
        <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-1 px-4 rounded text-sm transition-colors duration-200">
          LOGIN
        </button>
      </div>
    </header>
  );
}
