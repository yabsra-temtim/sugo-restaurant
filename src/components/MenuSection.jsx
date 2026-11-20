import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "../data/menu.js";
import { useCart } from "../context/CartContext.jsx";
import Photo from "./Photo.jsx";

export default function MenuSection() {
  const [active, setActive] = useState(categories[0].id);
  const { add } = useCart();
  const category = categories.find((c) => c.id === active);

  return (
    <div>
      <div role="tablist" aria-label="Menu categories" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === active}
            onClick={() => setActive(c.id)}
            className="relative rounded-full px-5 py-2 text-sm font-semibold"
          >
            {c.id === active && (
              <motion.span
                layoutId="menu-tab"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className={`relative ${c.id === active ? "text-on-brand" : "text-ink"}`}>{c.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-8 divide-y divide-line border-y border-line"
        >
          {category.items.map((item) => (
            <li key={item.name} className="group flex items-center gap-4 py-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                <Photo
                  id={item.photo}
                  alt={item.name}
                  emoji={item.emoji}
                  w={300}
                  className="h-full w-full text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  {item.price && (
                    <>
                      <span aria-hidden="true" className="flex-1 -translate-y-1 border-b border-dotted border-muted" />
                      <span className="font-semibold text-brand">{item.price} ETB</span>
                    </>
                  )}
                </div>
                <p className="text-muted">{item.desc}</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.8, rotate: 90 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => add(item.name)}
                aria-label={`Add ${item.name} to order`}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-xl text-on-brand"
              >
                +
              </motion.button>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
