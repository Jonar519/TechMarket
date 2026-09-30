# TechMarket · patrones de renderizado en Next.js 15

    npm install
    npm run build && npm start   # SSG e ISR solo se comportan bien en producción

| Patrón | Ruta | Cómo verlo |
|---|---|---|
| SSG | `/`, `/comparativa` | En el build aparece ○ (estática). La hora del badge no cambia al recargar. |
| ISR | `/productos/[id]` | ● en el build. Edita un precio en `/admin` y la ficha se regenera al instante; sin ello, cada 60 s. |
| SSR | `/buscar` | ƒ en el build. La hora del badge cambia en cada recarga. |
| CSR | `/carrito` | "Ver código fuente": el HTML no trae los productos; se pintan tras hidratar. |

Nota: el almacén de datos es en memoria (`lib/products.ts`), por eso los cambios de `/admin` se pierden al reiniciar.
