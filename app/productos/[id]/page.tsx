// ISR: el producto se pre-genera en build y se regenera cada 60 s (o al instante desde /admin con revalidatePath).
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import { AddButton } from "@/components/CartProvider";
import { db, money } from "@/lib/products";
export const revalidate = 60;
export const generateStaticParams = () => db.map(p => ({ id: p.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const p = db.find(x => x.id === id); return { title: p?.name ?? "Producto", description: p?.desc };
}
export default async function Producto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const p = db.find(x => x.id === id); if (!p) notFound();
  return <>
    <Badge p="ISR" note="Estática, se regenera cada 60 s" />
    <div className="detail"><div className="thumb big">{p.emoji}</div>
      <div><small>{p.cat}</small><h1>{p.name}</h1><p>{p.desc}</p>
        <p className="price">{money(p.price)}</p><p className={p.stock < 5 ? "warn" : ""}>{p.stock > 0 ? `${p.stock} unidades disponibles` : "Sin stock"}</p>
        <AddButton id={p.id} name={p.name} price={p.price} emoji={p.emoji} disabled={p.stock === 0} /></div></div>
  </>;
}
