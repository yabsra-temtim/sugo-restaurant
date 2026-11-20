import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Photo from "./Photo.jsx";
import { IMG } from "../data/images.js";

const ease = [0.2, 0.7, 0.2, 1];
const chips = [
  { label: "Pesto Pasta", img: IMG.pesto, emoji: "🍝", cls: "-left-3 top-14 md:-left-12" },
  { label: "Margherita", img: IMG.margherita, emoji: "🍕", cls: "-right-2 bottom-20 md:-right-10" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const lift = useTransform(scrollY, [0, 600], [0, -70]);
  const spin = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section className="overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-14 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <motion.h1
            aria-label="Sugo"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-[clamp(5.5rem,24vw,13rem)] font-semibold leading-[0.85] tracking-tight text-brand"
          >
            {"Sugo".split("").map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block cursor-default"
                whileHover={{ y: -14, rotate: i % 2 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <div className="mt-8 max-w-md border-l-2 border-brand pl-5 font-display">
              <p className="text-xl italic">
                su·go <span className="not-italic text-muted">/ˈsuːɡo/</span>
              </p>
              <p className="mt-1 text-muted">
                <span className="italic">noun.</span> Italian for sauce, and the part of the plate we spend the most time on.
              </p>
            </div>
            <p className="mt-6 max-w-md text-lg text-muted">
              Pasta and pizza built around slow-cooked sauces, in Summit, Addis Ababa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-brand px-7 py-3 font-semibold text-on-brand transition-transform hover:scale-105">
                See the menu
              </Link>
              <Link to="/contact" className="rounded-full border border-line px-7 py-3 font-semibold transition-colors hover:border-brand hover:text-brand">
                Reserve a table
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            aria-hidden="true"
            style={{ rotate: spin }}
            className="absolute -inset-6 rounded-full border-2 border-dashed border-brand/50"
          />
          <motion.div
            style={{ y: lift }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-line bg-surface"
          >
            <Photo id={IMG.pizza} alt="A pizza fresh from the oven" w={1000} emoji="🍕" className="h-full w-full" />
          </motion.div>
          {chips.map((c, i) => (
            <motion.div
              key={c.label}
              className={`absolute ${c.cls}`}
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link
                to="/menu"
                className="flex items-center gap-2 rounded-full border border-line bg-bg/90 py-1.5 pl-1.5 pr-4 text-sm font-semibold shadow-lg backdrop-blur transition-transform hover:scale-110"
              >
                <Photo id={c.img} alt="" emoji={c.emoji} w={200} className="h-10 w-10 rounded-full text-xl" />
                {c.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
