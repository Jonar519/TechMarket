import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import CartProvider, { CartCount } from "@/components/CartProvider";
export const metadata: Metadata = { title: { default: "TechMarket", template: "%s · TechMarket" }, description: "Tecnología curada, con los 4 patrones de renderizado de Next.js a la vista." };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><CartProvider>
    <header className="nav"><Link href="/" className="logo">techmarket</Link>
      <nav><Link href="/buscar">Buscar</Link><Link href="/admin">Admin</Link><Link href="/comparativa">Comparativa</Link><Link href="/carrito">Carrito <CartCount /></Link></nav></header>
    <main>{children}</main><footer>TechMarket · proyecto educativo de patrones de renderizado</footer>
  </CartProvider></body></html>;
}
