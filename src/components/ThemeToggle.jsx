import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const current = () =>
  document.documentElement.dataset.theme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

export default function ThemeToggle() {
  const [theme, setTheme] = useState(current);
  const night = theme === "dark";

  const toggle = () => {
    const next = night ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage unavailable, theme still applies for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={night ? "Switch to light mode" : "Switch to night mode"}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-lg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 16, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -16, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {night ? "☀️" : "🌙"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
