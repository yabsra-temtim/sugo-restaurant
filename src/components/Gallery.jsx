import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo.jsx";
import { IMG } from "../data/images.js";

// Replace ids with Sugo's own photos (e.g. "/images/interior.jpg").
const tiles = [
  { id: IMG.pizza, label: "Pizza from the oven", emoji: "🍕", span: "col-span-2 row-span-2" },
  { id: IMG.spaghetti, label: "Pasta al sugo", emoji: "🍝" },
  { id: IMG.lasagna, label: "Baked lasagna", emoji: "🧀" },
  { id: IMG.interior, label: "The dining room", emoji: "🕯️", span: "col-span-2" },
  { id: IMG.steak, label: "From the grill", emoji: "🥩" },
  { id: IMG.tiramisu, label: "Tiramisu", emoji: "🍰" },
  { id: IMG.kitchen, label: "The kitchen", emoji: "👩‍🍳" },
  { id: IMG.interior2, label: "A table for friends", emoji: "🍷" },
];

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const isOpen = open !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % tiles.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + tiles.length) % tiles.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const step = (d) => setOpen((i) => (i + d + tiles.length) % tiles.length);

  return (
    <>
      <div className="grid auto-rows-[8.5rem] grid-cols-2 gap-3 md:auto-rows-[11rem] md:grid-cols-4">
        {tiles.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setOpen(i)}
            aria-label={`View photo: ${t.label}`}
            className={`group relative overflow-hidden rounded-2xl ${t.span || ""}`}
          >
            <Photo
              id={t.id}
              alt={t.label}
              emoji={t.emoji}
              w={800}
              className="h-full w-full transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
              {t.label}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[78vh] max-w-full overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Photo
                id={tiles[open].id}
                alt={tiles[open].label}
                emoji={tiles[open].emoji}
                w={1600}
                className="max-h-[78vh] min-h-[16rem] min-w-[16rem] max-w-full"
              />
            </motion.div>
            <p className="font-display text-xl text-white">{tiles[open].label}</p>
            <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => step(-1)} aria-label="Previous photo" className="h-11 w-11 rounded-full bg-white/15 text-white">‹</button>
              <button onClick={() => setOpen(null)} className="rounded-full bg-white/15 px-5 text-white">Close</button>
              <button onClick={() => step(1)} aria-label="Next photo" className="h-11 w-11 rounded-full bg-white/15 text-white">›</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
