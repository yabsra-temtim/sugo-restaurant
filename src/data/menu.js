// Sample menu. Replace with Sugo's real dishes. Set price to a number (ETB) to show it.
import { IMG } from "./images.js";

export const categories = [
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Pesto Pasta", desc: "Fresh basil pesto, parmesan", price: null, emoji: "🍝", photo: IMG.pesto, featured: true },
      { name: "Lasagna", desc: "Layered pasta, slow meat sauce, baked", price: null, emoji: "🧀", photo: IMG.lasagna, featured: true },
      { name: "Pasta al Sugo", desc: "The house tomato sauce, basil", price: null, emoji: "🍅", photo: IMG.spaghetti },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Margherita", desc: "Tomato, mozzarella, basil", price: null, emoji: "🍕", photo: IMG.margherita },
      { name: "Pepperoni", desc: "Pepperoni, mozzarella, tomato", price: null, emoji: "🍕", photo: IMG.pepperoni },
      { name: "House Special", desc: "Ask your server for today’s", price: null, emoji: "⭐", photo: IMG.pizza },
    ],
  },
  {
    id: "grill",
    name: "Grill",
    items: [
      { name: "Steak", desc: "With your choice of side", price: null, emoji: "🥩", photo: IMG.steak, featured: true },
      { name: "Grilled Chicken", desc: "Herbs, lemon, side", price: null, emoji: "🍗", photo: IMG.chicken },
    ],
  },
  {
    id: "sweet",
    name: "Drinks and Dessert",
    items: [
      { name: "Macchiato", desc: "Ethiopian beans, Italian style", price: null, emoji: "☕", photo: IMG.coffee },
      { name: "Fresh Juice", desc: "Seasonal fruit", price: null, emoji: "🧃", photo: IMG.juice },
      { name: "Tiramisu", desc: "Made in house", price: null, emoji: "🍰", photo: IMG.tiramisu },
    ],
  },
];

export const allItems = categories.flatMap((c) => c.items);
export const featured = allItems.filter((i) => i.featured);
