import { createContext, useContext, useRef, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const timer = useRef(null);

  const add = (name) => {
    setItems((s) => ({ ...s, [name]: (s[name] || 0) + 1 }));
    setToast(`${name} added to your order`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 1800);
  };
  const remove = (name) =>
    setItems((s) => {
      const next = { ...s };
      if (next[name] > 1) next[name] -= 1;
      else delete next[name];
      return next;
    });
  const clear = () => setItems({});
  const count = Object.values(items).reduce((a, b) => a + b, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, count, open, setOpen, toast }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
