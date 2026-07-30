# Placeholders — reemplazo sin tocar código

Estas imágenes son fotografía de stock con licencia libre (no son productos reales
de Los Andes Joyería). Se usan solo para vender el concepto visual de la app.

Cuando el cliente entregue fotografía oficial de sus piezas:

1. Toma la foto oficial de cada pieza.
2. Recórtala a formato cuadrado (1:1) y conviértela a `.webp`.
3. Guárdala con **el mismo nombre exacto** del archivo que reemplaza (ver tabla).
4. Sube el archivo a esta misma carpeta, sobrescribiendo el placeholder.

No hay que tocar `index.html` ni `js/app.js` — las rutas ya apuntan aquí.

| Archivo                        | Producto                     |
|---------------------------------|-------------------------------|
| `hero-banner.webp`              | Imagen destacada de Inicio    |
| `ring-emerald-01.webp`          | Anillo Halo Esmeralda         |
| `ring-emerald-02.webp`          | Anillo Solitario Andes        |
| `earrings-emerald-01.webp`      | Aretes Gota Esmeralda         |
| `necklace-emerald-01.webp`      | Collar Cascada Esmeralda      |
| `gem-emerald-01.webp`           | Esmeralda Suelta Premium      |
| `bracelet-gold-01.webp`         | Pulsera Línea Esmeralda       |

Al agregar una pieza nueva al catálogo, añade su objeto en el arreglo `PRODUCTS`
de `js/app.js` con un `img` apuntando a un nuevo archivo en esta carpeta.
