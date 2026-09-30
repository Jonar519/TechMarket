"use client"; // CSR: datos privados del usuario, se leen del navegador tras la hidratación.
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { money } from "@/lib/products";
export default function Carrito() {
  const { items, remove, clear } = useCart(); const [t, setT] = useState("…");
  useEffect(() => setT(new Date().toISOString().slice(11, 19)), []);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return <>
    <div className="badge CSR"><b>CSR</b><span>Renderizada en el navegador · montada a las {t} UTC</span></div>
    <h1>Tu carrito</h1>
    {!items.length ? <p className="empty">Aún no hay productos. Añade alguno desde el catálogo.</p> : <>
      {items.map(i => <div className="line" key={i.id}><span>{i.emoji} {i.name} × {i.qty}</span><span>{money(i.price * i.qty)}</span><button className="link" onClick={() => remove(i.id)}>Quitar</button></div>)}
      <div className="line total"><span>Total</span><span>{money(total)}</span><button className="link" onClick={clear}>Vaciar</button></div></>}
  </>;
}
