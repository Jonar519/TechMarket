// SSR: el resultado depende de la URL (?q y ?categoria), así que se renderiza en el servidor en cada petición.
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { db, categories } from "@/lib/products";
export const dynamic = "force-dynamic";
export const metadata = { title: "Buscar" };
export default async function Buscar({ searchParams }: { searchParams: Promise<{ q?: string; categoria?: string }> }) {
  const { q = "", categoria = "" } = await searchParams;
  const res = db.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && (!categoria || p.cat === categoria));
  return <>
    <Badge p="SSR" note="Renderizada en el servidor en cada petición" />
    <h1>Catálogo</h1>
    <form className="row" action="/buscar"><input name="q" defaultValue={q} placeholder="Buscar producto" />
      <select name="categoria" defaultValue={categoria}><option value="">Todas</option>{categories.map(c => <option key={c}>{c}</option>)}</select>
      <button className="btn">Filtrar</button></form>
    {res.length ? <div className="grid">{res.map(p => <Card key={p.id} p={p} />)}</div> : <p className="empty">Sin resultados. Prueba con otro nombre o quita el filtro de categoría.</p>}
  </>;
}
