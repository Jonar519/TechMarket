export type Product = { id: string; name: string; desc: string; price: number; stock: number; cat: string; emoji: string };
const raw: [string, string, string, number, number, string, string][] = [
  ["1","Auriculares Aura ANC","Cancelación activa de ruido y 40 h de batería.",249,14,"Audio","🎧"],
  ["2","Teclado Forge 75","Mecánico compacto, switches lineales y aluminio.",139,22,"Periféricos","⌨️"],
  ["3","Monitor Lumen 27 4K","Panel IPS 144 Hz con calibración de fábrica.",529,6,"Pantallas","🖥️"],
  ["4","Ratón Glide Pro","Sensor de 26 000 DPI, 58 g, inalámbrico.",89,31,"Periféricos","🖱️"],
  ["5","Altavoz Orbit","Sonido 360° resistente al agua.",119,18,"Audio","🔊"],
  ["6","Portátil Vector 14","Ultraligero, 32 GB de RAM y 1 TB SSD.",1499,4,"Portátiles","💻"],
  ["7","Cámara Nova 6K","Sensor full-frame con estabilización de 5 ejes.",1899,3,"Foto","📷"],
  ["8","Tableta Slate 11","Pantalla OLED y lápiz de baja latencia.",699,12,"Portátiles","📱"],
];
const g = globalThis as unknown as { __db?: Product[] };
// Almacén en memoria compartido: simula la base de datos que edita el panel admin.
export const db: Product[] = (g.__db ??= raw.map(([id,name,desc,price,stock,cat,emoji]) => ({ id,name,desc,price,stock,cat,emoji })));
export const categories = [...new Set(raw.map(r => r[5]))];
export const money = (n: number) => new Intl.NumberFormat("es-CO",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);
