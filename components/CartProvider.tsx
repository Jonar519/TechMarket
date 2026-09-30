"use client"; // CSR: el carrito es estado privado del navegador (localStorage), no tiene sentido en el servidor.
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
export type Item = { id: string; name: string; price: number; emoji: string; qty: number };
type Ctx = { items: Item[]; add: (i: Omit<Item, "qty">) => void; remove: (id: string) => void; clear: () => void };
const C = createContext<Ctx>({ items: [], add() {}, remove() {}, clear() {} });
export const useCart = () => useContext(C);
export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem("cart") || "[]")); } catch {} }, []);
  const save = (n: Item[]) => { setItems(n); localStorage.setItem("cart", JSON.stringify(n)); };
  const add: Ctx["add"] = i => save(items.some(x => x.id === i.id) ? items.map(x => x.id === i.id ? { ...x, qty: x.qty + 1 } : x) : [...items, { ...i, qty: 1 }]);
  return <C.Provider value={{ items, add, remove: id => save(items.filter(x => x.id !== id)), clear: () => save([]) }}>{children}</C.Provider>;
}
export function CartCount() { const { items } = useCart(); return <span className="count">{items.reduce((s, i) => s + i.qty, 0)}</span>; }
export function AddButton(p: Omit<Item, "qty"> & { disabled?: boolean }) {
  const { add } = useCart(); const [ok, setOk] = useState(false);
  return <button className="btn" disabled={p.disabled} onClick={() => { add(p); setOk(true); setTimeout(() => setOk(false), 1200); }}>{ok ? "Añadido al carrito" : p.disabled ? "Agotado" : "Añadir al carrito"}</button>;
}
