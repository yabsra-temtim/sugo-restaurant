import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { allItems } from "../data/menu.js";
import { useCart } from "../context/CartContext.jsx";
import Photo from "./Photo.jsx";

const moods = [
  { label: "Fresh and light", dish: "Pesto Pasta" },
  { label: "Hearty", dish: "Lasagna" },
  { label: "Classic", dish: "Margherita" },
  { label: "Big appetite", dish: "Steak" },
  { label: "Something sweet", dish: "Tiramisu" },
];

export default function MoodPicker() {
  const [pick, setPick] = useState(null);
  const { add } = useCart();
  const dish = pick !== null ? allItems.find((d) => d.name === moods[pick].dish) : null;

  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Not sure what to order?</h2>
        <p className="mt-3 text-lg text-muted">Tell us what you feel like and we’ll pick for you.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {moods.map((m, i) => (
            <motion.button
              key={m.label}
              whileTap={{ scale: 0.93 }}
              onClick={() => setPick(i)}
              aria-pressed={pick === i}
              className={`rounded-full border px-5 py-2 font-semibold transition-colors ${
                pick === i ? "border-brand bg-brand text-on-brand" : "border-line hover:border-brand"
              }`}
            >
              {m.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="min-h-[22rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          {dish ? (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, rotate: -3, scale: 0.92 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 3, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <Photo id={dish.photo} alt={dish.name} emoji={dish.emoji} className="aspect-[16/10] w-full" />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{dish.name}</h3>
                  <p className="text-muted">{dish.desc}</p>
                </div>
                <button onClick={() => add(dish.name)} className="shrink-0 rounded-full bg-brand px-5 py-2 font-semibold text-on-brand">
                  Add
                </button>
              </div>
            </motion.article>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid min-h-[22rem] place-items-center rounded-3xl border-2 border-dashed border-line text-center text-muted"
            >
              <p className="px-6">Pick a mood and your dish shows up here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
