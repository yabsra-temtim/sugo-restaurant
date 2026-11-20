import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Photo from "./Photo.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function DishCard({ dish }) {
  const { add } = useCart();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 18 });

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Photo
          id={dish.photo}
          alt={dish.name}
          emoji={dish.emoji}
          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold">{dish.name}</h3>
        <p className="mt-1 text-muted">{dish.desc}</p>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => add(dish.name)}
          className="mt-5 self-start rounded-full border border-line px-5 py-2 text-sm font-semibold transition-colors hover:border-brand hover:bg-brand hover:text-on-brand"
        >
          Add to order
        </motion.button>
      </div>
    </motion.article>
  );
}
