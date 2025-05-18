"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FoodCard from "@/components/FoodCard";

export default function HomePage() {
  const [category, setCategory] = useState<string | null>(null);
  const [foods, setFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const catFilter = category ? `&filters[category][slug][$eq]=${category}` : "";
    setLoading(true);
    fetch(`http://localhost:1337/api/food-items?populate=*&filters[available][$eq]=true${catFilter}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return (
    <>
      {/* <Header selectedCategory={category} onCategoryChange={setCategory} /> */}

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading && <p>Loading foods...</p>}
        {!loading && foods.length === 0 && <p>No foods found for selected category.</p>}

        {!loading &&
          foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
      </main>
    </>
  );
}
