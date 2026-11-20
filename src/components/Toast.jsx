import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";

export default function Toast() {
  const { toast } = useCart();
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 z-40 flex justify-center px-5"
      style={{ bottom: "calc(5.5rem + env(safe-area-inset-bottom))" }}
    >
      <AnimatePresence>
        {toast && (
          <motion.p
            key={toast}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-bg shadow-xl"
          >
            {toast}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
