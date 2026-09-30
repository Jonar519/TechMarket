// Componente de SERVIDOR: la hora mostrada es la del momento en que se generó el HTML.
export default function Badge({ p, note }: { p: "SSG" | "ISR" | "SSR"; note: string }) {
  return <div className={`badge ${p}`}><b>{p}</b><span>{note} · HTML generado a las {new Date().toISOString().slice(11, 19)} UTC</span></div>;
}
