""
import { API } from "@/lib/api";
import { notFound } from "next/navigation";
import FoodDetailModal from "./FoodDetailModal";

export async function generateStaticParams() {
  const res = await API.get("/food-items");
  return res.data.data.map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await API.get(`/food-items?filters[slug][$eq]=${slug}&populate=*`);
  const food = res.data.data[0];

  if (!food) return {};

  return {
    title: food.metaTitle,
    description: food.metaDesc,
  };
}

export default async function FoodDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await API.get(`/food-items?filters[slug][$eq]=${slug}&populate=*`);
  const food = res.data.data[0];

  if (!food) return notFound();

  return <FoodDetailModal food={food} />;
}
