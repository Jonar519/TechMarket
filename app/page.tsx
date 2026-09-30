// SSG: la portada casi nunca cambia, se genera una sola vez en build y se sirve desde CDN.
import Link from "next/link";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { db, categories } from "@/lib/products";
export const dynamic = "force-static";
export default function Home() {
  return <>
    <Badge p="SSG" note="Página estática creada en build" />
    <section className="hero"><h1>Tecnología que se siente bien usar.</h1>
      <p>Una selección corta de audio, pantallas y portátiles. Cada página de esta tienda usa el patrón de renderizado que mejor le corresponde.</p>
      <div className="row"><Link href="/buscar" className="btn">Explorar catálogo</Link><Link href="/comparativa" className="btn ghost">Ver los 4 patrones</Link></div></section>
    <div className="chips">{categories.map(c => <Link key={c} href={`/buscar?categoria=${c}`}>{c}</Link>)}</div>
    <h2>Destacados</h2><div className="grid">{db.slice(0, 4).map(p => <Card key={p.id} p={p} />)}</div>
  </>;
}
