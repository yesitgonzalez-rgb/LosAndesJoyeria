# /assets

```
assets/
  images/
    hero/          → banners e imágenes destacadas de Inicio (a futuro, además del hero actual)
    products/       → fotografía de producto ya aprobada por el cliente (vacío por ahora)
    categories/      → miniaturas por categoría (Anillos, Collares, etc.) para filtros/menús futuros
    banners/         → banners promocionales o de campaña
  icons/            → íconos de marca (favicon extra, app icons) — los íconos de UI van inline en el HTML
  logos/            → logo oficial en sus variantes (losandes-logo.png para favicon, .webp para uso en página)
  placeholders/     → fotografía de stock temporal del catálogo actual — ver README dentro de esta carpeta
  backgrounds/      → texturas o fondos decorativos (sin uso todavía; el fondo actual es solo CSS)
```

**Estado actual:** todo el catálogo vive en `placeholders/` porque el cliente aún no
ha entregado fotografía oficial. Las carpetas `images/*`, `icons/` y `backgrounds/`
están listas (con `.gitkeep`) para cuando haya contenido real que clasificar ahí —
por ejemplo, cuando `images/products/` reciba fotos oficiales, `js/app.js` puede
apuntar sus `img` a esa carpeta en vez de `placeholders/`.

**Convención de nombres:** `tipo-material-##.webp` en minúsculas con guiones,
nunca nombres de cámara/captura (`IMG_1234.jpg`, `foto1.png`). Ejemplos:
`ring-emerald-01.webp`, `necklace-emerald-01.webp`, `category-rings.webp`.
