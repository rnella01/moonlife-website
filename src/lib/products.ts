import type { ArtTone, GarmentKind } from "@/components/garment-art";

export type Product = {
  id: string;
  name: string;
  price: number; // INR
  rating: number;
  reviews: number;
  kind: GarmentKind;
  tone: ArtTone;
};

export type Category = {
  slug: string;
  title: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "women",
    title: "Women",
    products: [
      { id: "w1", name: "Chanderi Kurta Set", price: 2499, rating: 4.8, reviews: 132, kind: "kurta", tone: "terracotta" },
      { id: "w2", name: "Mul Cotton Saree", price: 3299, rating: 4.9, reviews: 87, kind: "saree", tone: "sage" },
      { id: "w3", name: "A-line Midi Dress", price: 1899, rating: 4.6, reviews: 210, kind: "dress", tone: "tan" },
      { id: "w4", name: "Block-print Dupatta", price: 899, rating: 4.7, reviews: 64, kind: "dupatta", tone: "ivory" },
    ],
  },
  {
    slug: "men",
    title: "Men",
    products: [
      { id: "m1", name: "Everyday Crew Tee", price: 699, rating: 4.5, reviews: 340, kind: "tee", tone: "sage" },
      { id: "m2", name: "Linen Festive Kurta", price: 1999, rating: 4.8, reviews: 96, kind: "kurta", tone: "ivory" },
      { id: "m3", name: "Midnight Panel Tee", price: 799, rating: 4.6, reviews: 155, kind: "tee", tone: "slate" },
      { id: "m4", name: "Handloom Kurta", price: 2299, rating: 4.7, reviews: 71, kind: "kurta", tone: "tan" },
    ],
  },
  {
    slug: "kids",
    title: "Kids",
    products: [
      { id: "k1", name: "Playdate Dungarees", price: 999, rating: 4.9, reviews: 58, kind: "kids", tone: "tan" },
      { id: "k2", name: "Mini Kurta Set", price: 1199, rating: 4.8, reviews: 43, kind: "kids", tone: "terracotta" },
      { id: "k3", name: "Twirl Frock", price: 1099, rating: 4.7, reviews: 66, kind: "dress", tone: "sage" },
      { id: "k4", name: "Soft Cotton Tee", price: 499, rating: 4.6, reviews: 124, kind: "tee", tone: "ivory" },
    ],
  },
];

export const CATEGORY_PILLS = [
  { label: "Women", dot: "#c47a5a" },
  { label: "Men", dot: "#9aa88f" },
  { label: "Kids", dot: "#d9b28c" },
  { label: "Ethnic wear", dot: "#a8846a" },
  { label: "New arrivals", dot: "#332f2d" },
];

export function formatINR(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
