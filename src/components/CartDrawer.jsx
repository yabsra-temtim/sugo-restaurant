import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import { waLink } from "../lib/whatsapp.js";

export default function CartDrawer() {
  const { items, add, remove, clear, open, setOpen } = useCart();
  const names = Object.keys(items);

  const send = () => {
    const lines = names.map((n) => `- ${items[n]} × ${n}`).join("\n");
    window.open(waLink(`Hello Sugo, I’d like to order:\n${lines}`), "_blank", "noopener");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <motion.aside
          key="panel"
          role="dialog"
          aria-label="Your order"
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg p-6 shadow-2xl"
          style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 32, stiffness: 320 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Your order</h2>
            <button onClick={() => setOpen(false)} className="rounded-lg border border-line px-3 py-1" aria-label="Close">
              ✕
            </button>
          </div>

          {names.length === 0 ? (
            <div className="mt-10 text-muted">
              <p>Your order is empty.</p>
              <Link to="/menu" onClick={() => setOpen(false)} className="mt-3 inline-block font-semibold text-brand underline">
                Pick dishes from the menu
              </Link>
            </div>
          ) : (
            <>
              <ul className="mt-6 flex-1 divide-y divide-line overflow-y-auto">
                {names.map((n) => (
                  <li key={n} className="flex items-center justify-between py-3">
                    <span className="font-semibold">{n}</span>
                    <span className="flex items-center gap-3">
                      <button onClick={() => remove(n)} aria-label={`Remove one ${n}`} className="h-8 w-8 rounded-full border border-line">−</button>
                      <span className="w-4 text-center">{items[n]}</span>
                      <button onClick={() => add(n)} aria-label={`Add one ${n}`} className="h-8 w-8 rounded-full border border-line">+</button>
                    </span>
                  </li>
                ))}
              </ul>
              <button onClick={send} className="mt-4 rounded-full bg-brand px-6 py-3 font-semibold text-on-brand">
                Send order on WhatsApp
              </button>
              <button onClick={clear} className="mt-3 text-sm text-muted underline">
                Clear order
              </button>
            </>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
