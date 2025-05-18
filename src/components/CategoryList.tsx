"use client";

import { useState, useEffect } from "react";
import { API } from "@/lib/api";  // adjust as needed

export default function CategoryList() {
  const [categories, setCategories] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await API.get("/categories");
        console.log("Fetched categories:", res.data.data);
        if (res?.data?.data) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`px-4 py-2 rounded transition text-white font-semibold ${
          open ? "bg-red text-red-600 border border-red-600 hover:bg-gray-100" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        Categories
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50 max-h-60 overflow-auto">
          {categories.length === 0 ? (
            <p className="p-4 text-center text-gray-500">Loading...</p>
          ) : (
            categories.map((cat) => (
              <div
                key={cat.id}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {cat.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
