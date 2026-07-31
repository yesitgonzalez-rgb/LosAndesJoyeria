# /assets

```
assets/
  images/
    hero/          → banners e imágenes destacadas de Inicio (a futuro, además del hero actual)
    products/       → fotografía oficial de las 27 piezas del catálogo, en uso ✓
    categories/      → miniaturas por categoría, para filtros/menús futuros (vacío por ahora)
    banners/         → banners promocionales o de campaña (vacío por ahora)
  icons/            → íconos de marca (favicon extra, app icons) — los íconos de UI van inline en el HTML
  logos/            → logo oficial en sus variantes (losandes-icon.png para favicon, .webp para uso en página)
  backgrounds/      → texturas o fondos decorativos (sin uso todavía; el fondo actual es solo CSS)
```

**Estado actual:** el catálogo completo (27 piezas en 8 colecciones) vive en
`images/products/`, referenciado desde el arreglo `PRODUCTS` en `js/app.js`.
Estas ya no son fotos de stock — son la biblioteca premium oficial del proyecto.

**Para agregar o reemplazar una pieza:** sube el archivo `.webp` a `images/products/`
con un nombre descriptivo (ver convención abajo) y añade o edita su entrada en el
arreglo `PRODUCTS` de `js/app.js` (id, nombre, colección, precio, descripción, `img`).
No hace falta tocar el HTML ni el CSS — el catálogo se renderiza dinámicamente
agrupado por colección, en el orden definido en `COLLECTIONS`.

**Convención de nombres:** `tipo-nombre.webp` en minúsculas con guiones,
nunca nombres de cámara/captura (`IMG_1234.jpg`, `foto1.png`). Ejemplos:
`ring-amore.webp`, `necklace-esmerald.webp`, `wedding-band-armony.webp`.
