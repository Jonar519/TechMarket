import Link from "next/link";
import { Product, money } from "@/lib/products";
export default function Card({ p }: { p: Product }) {
  return <Link href={`/productos/${p.id}`} className="card"><div className="thumb">{p.emoji}</div><small>{p.cat}</small><h3>{p.name}</h3><p>{money(p.price)}</p></Link>;
}
