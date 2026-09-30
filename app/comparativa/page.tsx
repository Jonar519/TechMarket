// SSG: contenido de referencia que no cambia.
import Link from "next/link";
import Badge from "@/components/Badge";
export const metadata = { title: "Comparativa de patrones" };
const rows = [
  ["CSR", "En el navegador, tras cargar el JS", "Más lento (HTML vacío)", "Débil", "Bajo", "Al momento", "/carrito", "Carrito y datos privados"],
  ["SSR", "En el servidor, en cada petición", "Medio", "Excelente", "Alto", "Siempre fresco", "/buscar?q=a", "Búsqueda y filtros"],
  ["SSG", "Una vez, en build", "Muy rápido (CDN)", "Excelente", "Mínimo", "Solo al recompilar", "/", "Portada y páginas fijas"],
  ["ISR", "En build y se regenera en segundo plano", "Muy rápido (CDN)", "Excelente", "Bajo", "Según revalidate", "/productos/1", "Ficha de producto"],
];
export default function Comparativa() {
  return <>
    <Badge p="SSG" note="Página estática" />
    <h1>Los cuatro patrones, lado a lado</h1>
    <div className="scroll"><table><thead><tr><th>Patrón</th><th>Cuándo se genera el HTML</th><th>TTFB</th><th>SEO</th><th>Costo de servidor</th><th>Frescura</th><th>Ejemplo en la app</th></tr></thead>
      <tbody>{rows.map(r => <tr key={r[0]}><td><span className={`pill ${r[0]}`}>{r[0]}</span></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td><td><Link href={r[6]}>{r[7]}</Link></td></tr>)}</tbody></table></div>
  </>;
}
