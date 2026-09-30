// Panel para demostrar ISR on-demand: al guardar, revalidatePath regenera la página del producto al instante.
import { revalidatePath } from "next/cache";
import Badge from "@/components/Badge";
import { db } from "@/lib/products";
export const dynamic = "force-dynamic";
export const metadata = { title: "Admin" };
async function actualizar(fd: FormData) {
  "use server";
  const p = db.find(x => x.id === fd.get("id")); if (!p) return;
  p.price = Number(fd.get("price")); p.stock = Number(fd.get("stock"));
  revalidatePath(`/productos/${p.id}`); revalidatePath("/");
}
export default function Admin() {
  return <>
    <Badge p="SSR" note="Panel dinámico" />
    <h1>Actualizar producto</h1><p>Cambia precio o stock y abre la página del producto: se regenera sin esperar los 60 s.</p>
    {db.map(p => <form action={actualizar} className="line" key={p.id}><input type="hidden" name="id" value={p.id} />
      <span>{p.emoji} {p.name}</span><input name="price" type="number" defaultValue={p.price} aria-label="Precio" /><input name="stock" type="number" defaultValue={p.stock} aria-label="Stock" /><button className="btn">Guardar</button></form>)}
  </>;
}
