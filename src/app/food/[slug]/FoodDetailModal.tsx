"use client";

import Image from "next/image";
import { useState } from "react";

export default function FoodDetailModal({ food }: { food: any }) {
  const [quantity, setQuantity] = useState(1);
  const img = food.image?.[0]?.url;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-60">
      <div className="bg-[#1a1a1a] text-white w-full max-w-5xl rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden relative p-4">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-4 overflow-y-auto max-h-[90vh] pr-4">
          {["Fries", "1st drink", "2nd drink"].map((section, i) => (
            <div key={i} className="bg-red-600 rounded text-white p-3 font-bold">
              {section} <span className="text-sm font-normal">(Required)</span>
            </div>
          ))}

          <div className="bg-red-600 rounded text-white p-3 font-bold">
            Add Ons <span className="text-sm font-normal">(Optional)</span>
          </div>

          <div className="space-y-4">
            {food.addons?.map((addon: any) => (
              <div key={addon.id} className="flex justify-between items-center bg-black p-2 rounded">
                <div>
                  <p className="font-semibold">{addon.name}</p>
                  <p className="text-sm text-gray-400">(+Rs {addon.price})</p>
                </div>
                <button className="bg-red-600 px-4 py-1 rounded">ADD</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between text-center p-4">
          {img && (
            <Image
              src={`http://localhost:1337${img}`}
              alt={food.name}
              width={300}
              height={200}
              className="rounded object-cover"
            />
          )}
          <h2 className="text-xl font-bold mt-4">{food.name}</h2>
          <p className="text-sm text-gray-300">{food.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4 space-x-4">
            <button onClick={decrement} className="w-8 h-8 bg-black border text-white text-lg">−</button>
            <span className="text-lg font-bold">{quantity}</span>
            <button onClick={increment} className="w-8 h-8 bg-black border text-white text-lg">+</button>
          </div>

          {/* Price and Add Button */}
          <div className="flex items-center justify-center mt-4 space-x-4 w-full">
            <span className="bg-red-600 px-4 py-2 rounded-full font-bold">Rs {food.price * quantity}</span>
            <button className="bg-red-600 flex items-center gap-2 px-6 py-2 rounded-full font-bold text-white hover:bg-red-700">
              ADD TO BUCKET →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
