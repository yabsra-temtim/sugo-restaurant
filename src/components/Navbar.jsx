import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();
  const cls = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-brand ${isActive ? "text-brand" : "text-muted"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-2xl font-bold text-brand">
          Sugo
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={cls}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            key={count}
            initial={{ scale: count ? 1.25 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            onClick={() => openCart(true)}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand"
          >
            Your order{count > 0 && ` (${count})`}
          </motion.button>
          <button
            className="rounded-lg border border-line px-3 py-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-5">
              {links.map(([to, label]) => (
                <NavLink key={to} to={to} end={to === "/"} className={cls} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
