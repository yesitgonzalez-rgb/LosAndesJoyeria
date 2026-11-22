/* ========================================================
   LOS ANDES JOYERÍA — Demo Comercial (sin backend)
   Solo navegación entre vistas + enlaces de WhatsApp.
   ======================================================== */

var WHATSAPP_NUMBER = '573132091591';

/* Joyas destacadas del Home — ids de PRODUCTS (no se duplican datos). */
var FEATURED_IDS = ['victoria', 'queen', 'magestic', 'muzo', 'imperial', 'verde-real'];

/* Galería fotográfica real — Anillo Victoria. Las imágenes son copias de los originales. */
var VICTORIA_GALLERY = [
  { src: 'assets/images/products/victoria-gallery/victoria-principal.png', alt: 'Anillo Victoria, vista frontal' },
  { src: 'assets/images/products/victoria-gallery/victoria-angulo-1.png', alt: 'Anillo Victoria, vista inclinada' },
  { src: 'assets/images/products/victoria-gallery/victoria-angulo-2.png', alt: 'Anillo Victoria, segunda vista inclinada con baguettes' },
  { src: 'assets/images/products/victoria-gallery/victoria-modelo.png', alt: 'Modelo luciendo el Anillo Victoria' }
];

/* Servicios — vista Colección, después del índice de colecciones. */
var MAJESTIC_GALLERY = [
  { src: 'assets/images/products/majestic/majestic-anillo.png', alt: 'Anillo Majestic lucido por la modelo' },
  { src: 'assets/images/products/majestic/majestic-1.png', alt: 'Anillo Majestic, plano fotográfico 1' },
  { src: 'assets/images/products/majestic/majestic-2.png', alt: 'Anillo Majestic, plano fotográfico 2' },
  { src: 'assets/images/products/majestic/majestic-3.png', alt: 'Anillo Majestic, plano fotográfico 3' }
];

/* Galería fotográfica real — Anillo ISABELLA (plata 925). Copias de los originales en
   RECURSOS GRÁFICOS/COLECCIONES EN PLATA ANILLOS DE MUJER 2. */
var ISABELLA_GALLERY = [
  { src: 'assets/images/products/isabella/isabella-principal.png', alt: 'Anillo ISABELLA, vista frontal' },
  { src: 'assets/images/products/isabella/isabella-angulo-1.png', alt: 'Anillo ISABELLA, vista de tres cuartos' },
  { src: 'assets/images/products/isabella/isabella-angulo-2.png', alt: 'Anillo ISABELLA, vista lateral' },
  { src: 'assets/images/products/isabella/isabella-modelo.png', alt: 'Anillo ISABELLA en la mano de una modelo' }
];

/* Galería fotográfica real — Anillo DESTELLO (plata). Copias en assets/images/products/destello. */
var DESTELLO_GALLERY = [
  { src: 'assets/images/products/destello/destello-portada.png', alt: 'Anillo DESTELLO, vista frontal' },
  { src: 'assets/images/products/destello/destello-angulo-1.png', alt: 'Anillo DESTELLO, primer ángulo' },
  { src: 'assets/images/products/destello/destello-angulo-2.png', alt: 'Anillo DESTELLO, segundo ángulo' },
  { src: 'assets/images/products/destello/destello-modelo.png', alt: 'Anillo DESTELLO en la mano de una modelo' }
];

/* Galería fotográfica real — Anillo SILUETA (plata 925). Copias normalizadas de
   RECURSOS GRÁFICOS/COLECCIONES EN PLATA ANILLOS DE MUJER 4. */
var SILUETA_GALLERY = [
  { src: 'assets/images/products/silueta/silueta-portada.png', alt: 'Anillo SILUETA, vista frontal' },
  { src: 'assets/images/products/silueta/silueta-angulo-1.png', alt: 'Anillo SILUETA, primer ángulo' },
  { src: 'assets/images/products/silueta/silueta-angulo-2.png', alt: 'Anillo SILUETA, segundo ángulo' },
  { src: 'assets/images/products/silueta/silueta-modelo.png', alt: 'Anillo SILUETA en la mano de una modelo' }
];

/* Galería fotográfica real — Anillo ESENCIA (plata). Copias normalizadas de
   RECURSOS GRÁFICOS/COLECCIONES EN PLATA ANILLOS DE MUJER 6. */
var ESENCIA_GALLERY = [
  { src: 'assets/images/products/esencia/esencia-portada.png', alt: 'Anillo ESENCIA, vista frontal' },
  { src: 'assets/images/products/esencia/esencia-angulo-1.png', alt: 'Anillo ESENCIA, vista adicional' },
  { src: 'assets/images/products/esencia/esencia-modelo.png', alt: 'Anillo ESENCIA en la mano de una modelo' }
];

/* Galería fotográfica real — Anillo ARMONÍA (plata 925). Copias normalizadas de
   RECURSOS GRÁFICOS/COLECCIONES EN PLATA ANILLOS DE MUJER 7. */
var ARMONIA_GALLERY = [
  { src: 'assets/images/products/armonia/armonia-portada.png', alt: 'Anillo ARMONÍA, vista frontal' },
  { src: 'assets/images/products/armonia/armonia-angulo-1.png', alt: 'Anillo ARMONÍA, primer ángulo' },
  { src: 'assets/images/products/armonia/armonia-angulo-2.png', alt: 'Anillo ARMONÍA, segundo ángulo' },
  { src: 'assets/images/products/armonia/armonia-modelo.png', alt: 'Anillo ARMONÍA en la mano de una modelo' }
];

var SERVICES = [
  { icon: '💍', name: 'Diseño Personalizado',
    desc: 'Creamos joyas únicas diseñadas exclusivamente para cada cliente.' },
  { icon: '🛠', name: 'Restauración y Reparación',
    desc: 'Devolvemos el brillo y la belleza a tus joyas más valiosas.' },
  { icon: '📏', name: 'Ajuste de Talla',
    desc: 'Adaptamos tus anillos para un ajuste perfecto.' },
  { icon: '💎', name: 'Certificación de Piedras',
    desc: 'Asesoría sobre autenticidad y calidad de esmeraldas y diamantes.' },
  { icon: '🎁', name: 'Grabados Personalizados',
    desc: 'Mensajes y fechas especiales para convertir cada joya en un recuerdo único.' },
  { icon: '👨‍💼', name: 'Asesoría Personalizada',
    desc: 'Te acompañamos en la elección de la joya ideal para cada ocasión.' }
];

/* Beneficios — cierre de la vista Colección, antes de Contacto. */
var BENEFITS = [
  { icon: '💎', name: 'Catálogo disponible 24/7',
    desc: 'Tus clientes podrán explorar tus colecciones en cualquier momento.' },
  { icon: '📲', name: 'Atención directa por WhatsApp',
    desc: 'Cada producto puede convertirse en una conversación inmediata.' },
  { icon: '❤️', name: 'Mayor confianza en la marca',
    desc: 'Una App transmite innovación, respaldo y profesionalismo.' },
  { icon: '🎁', name: 'Experiencia personalizada',
    desc: 'El cliente encuentra más fácilmente la joya ideal.' },
  { icon: '🚀', name: 'Mayor intención de compra',
    desc: 'Una mejor experiencia genera más consultas y más oportunidades de venta.' },
  { icon: '✨', name: 'Preparada para crecer',
    desc: 'Esta Demo puede evolucionar hacia una App completa con IA, citas, pagos, realidad aumentada y mucho más.' }
];

/* EVA — Asesora Virtual. "collection" debe calzar con el "name" en COLLECTIONS. */
var EVA_OPTIONS = [
  { icon: '💍', label: 'Anillo de Compromiso', collection: 'Anillos de Compromiso' },
  { icon: '💒', label: 'Argollas de Matrimonio', collection: 'Argollas de Matrimonio' },
  { icon: '🎓', label: 'Anillo de Grado', collection: 'Anillos de Grado' },
  { icon: '💚', label: 'Esmeraldas Colombianas', collection: 'Esmeraldas Colombianas' },
  { icon: '✨', label: 'Alta Joyería', collection: 'Alta Joyería' },
  { icon: '🎁', label: 'Un Regalo Especial', collection: 'Regalos Especiales' }
];

/* Colecciones — orden de despliegue, título, descripción emocional e imagen representativa.
   "name" es el identificador interno (debe calzar con PRODUCTS[].category); "title" es el
   texto elegante mostrado al usuario. */
var COLLECTIONS = [
  { name: 'Anillos de Compromiso', title: '💍 Anillos de Compromiso',
    desc: 'El inicio de una historia inolvidable. Diseños creados para celebrar el momento más importante de una pareja.',
    img: 'assets/images/products/ring-victoria.webp' },
  { name: 'Argollas de Matrimonio', title: '💒 Argollas de Matrimonio',
    desc: 'Símbolos de amor eterno elaborados con materiales nobles y acabados de alta joyería.',
    img: 'assets/images/products/wedding-band-infinity.webp' },
  { name: 'Anillos de Grado', title: '🎓 Anillos de Grado',
    desc: 'Una pieza que representa años de esfuerzo, dedicación y nuevos comienzos.',
    img: 'assets/images/products/class-ring-victory.webp' },
  { name: 'Esmeraldas Colombianas', title: '💚 Esmeraldas Colombianas',
    desc: 'La belleza incomparable de las esmeraldas colombianas convertidas en joyas únicas.',
    img: 'assets/images/products/necklace-esmerald.webp' },
  { name: 'Alta Joyería', title: '👑 Alta Joyería',
    desc: 'Piezas exclusivas diseñadas para quienes buscan lujo, elegancia y distinción.',
    img: 'assets/images/products/necklace-magestic.webp' },
  { name: 'Joyería en Oro', title: '✨ Joyería en Oro',
    desc: 'Creaciones atemporales en oro de 18K para acompañar cada momento especial.',
    img: 'assets/images/products/bracelet-gold-prestige.webp' },
  { name: 'Joyería en Plata', title: '🌙 Joyería en Plata',
    desc: 'Elegancia contemporánea con diseños versátiles para el día a día.',
    img: 'assets/images/products/bracelet-silver-signature.webp' },
  { name: 'Regalos Especiales', title: '🎁 Regalos Especiales',
    desc: 'Joyas pensadas para sorprender y convertir cada ocasión en un recuerdo inolvidable.',
    img: 'assets/images/products/necklace-forever.webp' },
  { name: 'Anillos de Mujer en Plata', title: 'Anillos de Mujer en Plata',
    desc: 'Diseños femeninos en plata. Descubre las piezas de esta colección.',
    img: 'assets/images/products/anillos-mujer-plata/anillo-mujer-1.png' }
];

var currentCollection = null;

var PRODUCTS = [
  // Anillos de Compromiso
  { id: 'amore', name: 'Amore', category: 'Anillos de Compromiso', price: '$5.200.000',
    desc: 'Esmeralda colombiana talla redonda con halo de diamantes, en oro amarillo 18k.',
    img: 'assets/images/products/ring-amore.webp' },
  { id: 'aurora', name: 'Aurora', category: 'Anillos de Compromiso', price: '$4.100.000',
    desc: 'Solitario clásico en oro blanco 18k con esmeralda colombiana talla redonda.',
    img: 'assets/images/products/ring-aurora.webp' },
  { id: 'elegance', name: 'Elegance', category: 'Anillos de Compromiso', price: '$6.800.000',
    desc: 'Esmeralda colombiana talla pera con halo de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/ring-elegance.webp' },
  { id: 'imperial', name: 'Imperial', category: 'Anillos de Compromiso', price: '$8.900.000',
    desc: 'Esmeralda talla esmeralda con banda entrelazada de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/ring-imperial.webp' },
  { id: 'isabela', name: 'Isabela', category: 'Anillos de Compromiso', price: '$5.900.000',
    desc: 'Tres esmeraldas talla redonda con pavé de diamantes, en oro amarillo 18k.',
    img: 'assets/images/products/ring-isabela.webp' },
  { id: 'legacy', name: 'Legacy', category: 'Anillos de Compromiso', price: '$5.400.000',
    desc: 'Esmeralda ovalada con banda partida y pavé de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/ring-legacy.webp' },
  { id: 'luna', name: 'Luna', category: 'Anillos de Compromiso', price: '$5.600.000',
    desc: 'Esmeralda ovalada de talla limpia con banda de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/ring-luna.webp' },
  { id: 'perla', name: 'Perla', category: 'Anillos de Compromiso', price: '$4.700.000',
    desc: 'Esmeralda ovalada engastada en bisel, con acentos de diamante, en oro rosa 18k.',
    img: 'assets/images/products/ring-perla.webp' },
  { id: 'victoria', name: 'Victoria', category: 'Anillos de Compromiso', price: '$9.500.000',
    desc: 'Esmeralda talla esmeralda con doble halo de diamantes, en oro amarillo 18k.',
    img: 'assets/images/products/victoria-gallery/victoria-principal.png' },

  // Argollas de Matrimonio
  { id: 'armony', name: 'Armony', category: 'Argollas de Matrimonio', price: '$3.200.000',
    desc: 'Par de argollas en platino, acabado mate, elegancia atemporal.',
    img: 'assets/images/products/wedding-band-armony.webp' },
  { id: 'eternal', name: 'Eternal', category: 'Argollas de Matrimonio', price: '$2.800.000',
    desc: 'Par de argollas en oro amarillo 18k pulido, diseño clásico.',
    img: 'assets/images/products/wedding-band-eternal.webp' },
  { id: 'infinity', name: 'Infinity', category: 'Argollas de Matrimonio', price: '$6.500.000',
    desc: 'Par de argollas con motivo infinito en pavé de diamantes, oro 18k.',
    img: 'assets/images/products/wedding-band-infinity.webp' },
  { id: 'signature', name: 'Signature', category: 'Argollas de Matrimonio', price: '$3.400.000',
    desc: 'Par de argollas en oro rosa 18k, acabado mate.',
    img: 'assets/images/products/wedding-band-signature.webp' },

  // Anillos de Grado
  { id: 'excellence', name: 'Excellence', category: 'Anillos de Grado', price: '$2.100.000',
    desc: 'Anillo de grado clásico en oro, con escudo universitario personalizable.',
    img: 'assets/images/products/class-ring-excellence.webp' },
  { id: 'prestige', name: 'Prestige', category: 'Anillos de Grado', price: '$2.900.000',
    desc: 'Anillo de grado contemporáneo con acentos de esmeralda, en oro blanco 18k.',
    img: 'assets/images/products/class-ring-prestige.webp' },
  { id: 'victory', name: 'Victory', category: 'Anillos de Grado', price: '$2.300.000',
    desc: 'Anillo de grado en oro con escudo grabado y año de promoción.',
    img: 'assets/images/products/class-ring-victory.webp' },

  // Esmeraldas Colombianas
  { id: 'esmerald', name: 'Esmerald', category: 'Esmeraldas Colombianas', price: '$5.100.000',
    desc: 'Colgante de esmeralda colombiana con halo de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/necklace-esmerald.webp' },
  { id: 'muzo', name: 'Muzo', category: 'Esmeraldas Colombianas', price: '$12.500.000',
    desc: 'Pulsera de esmeraldas colombianas talla esmeralda, oro blanco con diamantes.',
    img: 'assets/images/products/bracelet-muzo.webp' },
  { id: 'verde-real', name: 'Verde Real', category: 'Esmeraldas Colombianas', price: '$4.600.000',
    desc: 'Aretes colgantes de esmeralda con halo de diamantes, en oro amarillo 18k.',
    img: 'assets/images/products/earrings-verde-real.webp' },

  // Alta Joyería
  { id: 'magestic', name: 'Magestic', category: 'Alta Joyería', price: '$45.000.000',
    desc: 'Collar de alta joyería con esmeraldas y diamantes engastados a mano, oro 18k.',
    img: 'assets/images/products/necklace-magestic.webp' },
  { id: 'queen', name: 'Majestic', category: 'Joyería en Plata', price: '$18.500.000',
    cardImg: 'assets/images/products/majestic/majestic-card.jfif',
    desc: 'Anillo statement con esmeralda cojín y halo escalonado de diamantes.',
    img: 'assets/images/products/majestic/majestic-anillo.png' },

  // Joyería en Oro
  { id: 'gold-escence', name: 'Gold Escence', category: 'Joyería en Oro', price: '$1.850.000',
    desc: 'Pulsera de cadena en oro 18k, diseño minimalista atemporal.',
    img: 'assets/images/products/bracelet-gold-escence.webp' },
  { id: 'gold-prestige', name: 'Gold Prestige', category: 'Joyería en Oro', price: '$2.400.000',
    desc: 'Pulsera de eslabones en oro 18k, presencia audaz y moderna.',
    img: 'assets/images/products/bracelet-gold-prestige.webp' },

  // Joyería en Plata
  { id: 'silver-elite', name: 'Silver Elite', category: 'Joyería en Plata', price: '$680.000',
    desc: 'Anillo escultural en plata, líneas fluidas y minimalistas.',
    img: 'assets/images/products/ring-silver-elite.webp' },
  { id: 'silver-signature', name: 'Silver Signature', category: 'Joyería en Plata', price: '$890.000',
    desc: 'Pulsera de eslabones en plata, acabado pulido a espejo.',
    img: 'assets/images/products/bracelet-silver-signature.webp' },

  // Regalos Especiales
  { id: 'bella', name: 'Bella', category: 'Regalos Especiales', price: '$1.950.000',
    desc: 'Aretes de perla cultivada con capuchón de diamantes, en oro amarillo 18k.',
    img: 'assets/images/products/earrings-bella.webp' },
  { id: 'forever', name: 'Forever', category: 'Regalos Especiales', price: '$3.100.000',
    desc: 'Colgante de corazón abierto en pavé de diamantes, en oro blanco 18k.',
    img: 'assets/images/products/necklace-forever.webp' },
  { id: 'anillo-mujer-plata-1', name: 'Anillo Mujer 1', category: 'Anillos de Mujer en Plata', price: 'Consultar precio',
    desc: 'Pieza de la colección Anillos de Mujer en Plata. Consulta sus características y disponibilidad.',
    img: 'assets/images/products/anillos-mujer-plata/anillo-mujer-1.png' },
  { id: 'anillo-mujer-plata-2', name: 'Anillo Mujer 2', category: 'Anillos de Mujer en Plata', price: 'Consultar precio',
    desc: 'Pieza de la colección Anillos de Mujer en Plata. Consulta sus características y disponibilidad.',
    img: 'assets/images/products/anillos-mujer-plata/anillo-mujer-2.png' },
  { id: 'anillo-mujer-plata-modelo', name: 'Anillo Mujer con Modelo', category: 'Anillos de Mujer en Plata', price: 'Consultar precio',
    desc: 'Pieza de la colección Anillos de Mujer en Plata presentada con modelo.',
    img: 'assets/images/products/anillos-mujer-plata/anillo-mujer-modelo.png' },
  /* Producto independiente de 'isabela' (oro 18k). Datos comerciales confirmados por el cliente. */
  { id: 'isabella-plata', name: 'ISABELLA', category: 'Anillos de Mujer en Plata', price: '$480.000',
    desc: 'Anillo en plata de diseño fino y delicado con una piedra natural de zafiro en forma de lágrima, de 5,1 × 5,2 mm.',
    img: 'assets/images/products/isabella/isabella-principal.png',
    gallery: ISABELLA_GALLERY,
    availability: 'En inventario',
    specs: [
      ['Material', 'Plata 925'],
      ['Acabado', 'Brillante'],
      ['Piedra', 'Zafiro natural azul'],
      ['Forma', 'Lágrima'],
      ['Dimensiones', '5,1 × 5,2 mm']
    ] },
  { id: 'destello-plata', name: 'DESTELLO', category: 'Anillos de Mujer en Plata', price: '$1.000.000',
    desc: 'Anillo de plata tipo solitario con piedra central de esmeralda natural colombiana de bonito color verde profundo. Diseño clásico y atemporal.',
    img: 'assets/images/products/destello/destello-portada.png',
    gallery: DESTELLO_GALLERY,
    availability: 'En inventario',
    specs: [
      ['Material', 'Plata'],
      ['Tipo', 'Anillo solitario'],
      ['Piedra central', 'Esmeralda natural colombiana'],
      ['Color', 'Verde profundo'],
      ['Dimensiones de la piedra', '4,1 × 6,2 mm']
    ] },
  { id: 'silueta-plata', name: 'SILUETA', category: 'Anillos de Mujer en Plata', price: '$270.000',
    desc: 'Fino anillo de diseño Clúster con piedra central de laboratorio color azul aguamarina y halo de circonitas blancas.',
    img: 'assets/images/products/silueta/silueta-portada.png',
    gallery: SILUETA_GALLERY,
    availability: 'En inventario',
    specs: [
      ['Material', 'Plata de ley 925'],
      ['Tipo', 'Anillo de diseño Clúster'],
      ['Piedra central', 'Piedra de laboratorio, azul aguamarina'],
      ['Halo', 'Circonitas blancas'],
      ['Dimensión', '11,6 mm de amplitud del diseño del halo']
    ] },
  { id: 'esencia-plata', name: 'ESENCIA', category: 'Anillos de Mujer en Plata', price: '$1.000.000',
    desc: 'Anillo de montura clásica con una piedra central de esmeralda natural colombiana de forma rectangular, de 5,45 × 7,32 mm, acompañado de circonitas laterales.',
    img: 'assets/images/products/esencia/esencia-portada.png',
    gallery: ESENCIA_GALLERY,
    availability: 'En inventario',
    specs: [
      ['Material', 'Plata'],
      ['Diseño', 'Montura clásica'],
      ['Piedra central', 'Esmeralda natural colombiana'],
      ['Forma', 'Rectangular'],
      ['Dimensiones', '5,45 × 7,32 mm'],
      ['Piedras laterales', 'Circonitas']
    ] },
  { id: 'armonia-plata', name: 'ARMONÍA', category: 'Anillos de Mujer en Plata', price: '$800.000',
    desc: 'Anillo Clúster con piedra central de esmeralda natural colombiana en forma de corazón, de bonito color verde profundo, de 5,31 × 7,51 mm. Plata de ley 925 de alta pureza, diseño trabajado a mano con la experiencia y técnica de nuestros joyeros.',
    img: 'assets/images/products/armonia/armonia-portada.png',
    gallery: ARMONIA_GALLERY,
    availability: 'En inventario',
    specs: [
      ['Material', 'Plata de ley 925 de alta pureza'],
      ['Diseño', 'Anillo Clúster'],
      ['Piedra central', 'Esmeralda natural colombiana'],
      ['Forma', 'Corazón'],
      ['Color', 'Verde profundo'],
      ['Dimensiones', '5,31 × 7,51 mm'],
      ['Elaboración', 'Trabajada a mano con la experiencia y técnica de nuestros joyeros']
    ] }
];

/* ---------- fotografía de catálogo (placeholders premium, no inventario real) ---------- */
function jewelImg(product, className) {
  return '<img class="' + className + '" src="' + product.img + '" alt="' + product.name + '" loading="lazy">';
}

/* ---------- navegación entre vistas ---------- */
function goTo(view) {
  document.querySelectorAll('.view').forEach(function (el) {
    el.classList.toggle('active-view', el.dataset.view === view);
  });
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    var on = el.dataset.nav === view;
    el.classList.toggle('active', on);
    if (el.matches('button, a')) {
      if (on) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    }
  });
  window.scrollTo(0, 0);
}

/* ---------- router (hash) ----------
   #/  ·  #/coleccion  ·  #/coleccion/<slug>  ·  #/producto/<id>  ·  #/contacto
   El slug se deriva del nombre de la colección; no requiere cambiar COLLECTIONS. */
var BASE_TITLE = 'Los Andes Joyería · Creamos tu Joya';
var routerReady = false;   /* false durante el primer render: no se mueve el foco */
var pendingFocusId = null; /* foco específico para la próxima navegación */

function slugify(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function collectionHash(name) { return '#/coleccion/' + slugify(name); }
function productHash(id) { return '#/producto/' + encodeURIComponent(id); }

function parseRoute() {
  var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(function (s) {
    try { return decodeURIComponent(s); } catch (e) { return s; }
  });
  return { view: parts[0] || 'home', arg: parts[1] || null };
}

function navigate(hash) {
  if (location.hash === hash || (hash === '#/' && (location.hash === '' || location.hash === '#'))) {
    renderRoute(); /* misma ruta: no hay hashchange, solo reaplicar (vuelve arriba) */
  } else {
    location.hash = hash;
  }
}

function setTitle(part) {
  document.title = part ? part + ' · Los Andes Joyería' : BASE_TITLE;
}

function renderRoute() {
  var r = parseRoute();
  var heading, title = null;

  if (r.view === 'coleccion') {
    goTo('coleccion');
    var info = r.arg && COLLECTIONS.find(function (c) { return slugify(c.name) === r.arg; });
    if (info) {
      openCollection(info.name);
      heading = document.getElementById('cd-title');
      title = info.name;
    } else {
      showCollectionsIndex();
      heading = document.querySelector('#collections-index .section-title');
      title = 'Colección';
    }
  } else if (r.view === 'producto' && PRODUCTS.some(function (x) { return x.id === r.arg; })) {
    var p = PRODUCTS.find(function (x) { return x.id === r.arg; });
    populateProduct(p.id);
    currentCollection = p.category; /* el botón "Colección" regresa a su colección */
    goTo('producto');
    heading = document.getElementById('pd-name');
    title = p.name;
  } else if (r.view === 'producto') {
    goTo('coleccion'); /* pieza inexistente */
    showCollectionsIndex();
    heading = document.querySelector('#collections-index .section-title');
    title = 'Colección';
  } else if (r.view === 'contacto') {
    goTo('contacto');
    heading = document.querySelector('#view-contacto .section-title');
    title = 'Contacto';
  } else {
    goTo('home'); /* '' y rutas desconocidas */
    heading = document.querySelector('.hero-title');
  }

  setTitle(title);

  if (routerReady) {
    var target = (pendingFocusId && document.getElementById(pendingFocusId)) || heading;
    pendingFocusId = null;
    if (target) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: target !== heading });
    }
  }
}

/* Tarjeta clicable → enlace accesible (foco, Enter, nombre accesible). */
function makeLinkCard(el, label) {
  el.setAttribute('role', 'link');
  el.setAttribute('tabindex', '0');
  el.setAttribute('aria-label', label);
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target === el) { e.preventDefault(); el.click(); }
  });
}

function renderVictoriaGallery() {
  var root = document.getElementById('product-photo');
  var first = VICTORIA_GALLERY[0];
  root.classList.add('has-gallery');
  root.innerHTML =
    '<div class="product-gallery-main">' +
      '<img class="photo-img gallery-main-image" src="' + first.src + '" alt="' + first.alt + '" width="1254" height="1254" decoding="async">' +
    '</div>' +
    '<div class="product-gallery-thumbs" role="group" aria-label="Fotografías del Anillo Victoria">' +
      VICTORIA_GALLERY.map(function (photo, index) {
        return '<button class="product-gallery-thumb' + (index === 0 ? ' is-active' : '') + '" type="button" data-gallery-index="' + index + '" aria-label="Ver fotografía ' + (index + 1) + ': ' + photo.alt + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' +
          '<img src="' + photo.src + '" alt="" loading="lazy" width="1254" height="1254">' +
        '</button>';
      }).join('') +
    '</div>';

  var mainImage = root.querySelector('.gallery-main-image');
  root.querySelectorAll('.product-gallery-thumb').forEach(function (button) {
    button.addEventListener('click', function () {
      var photo = VICTORIA_GALLERY[Number(button.dataset.galleryIndex)];
      if (!photo) return;
      mainImage.src = photo.src;
      mainImage.alt = photo.alt;
      root.querySelectorAll('.product-gallery-thumb').forEach(function (thumb) {
        var active = thumb === button;
        thumb.classList.toggle('is-active', active);
        thumb.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
  });
}

function renderMajesticGallery() {
  var root = document.getElementById('product-photo');
  var first = MAJESTIC_GALLERY[0];
  root.classList.add('has-gallery');
  root.innerHTML =
    '<div class="product-gallery-main">' +
      '<img class="photo-img gallery-main-image" src="' + first.src + '" alt="' + first.alt + '" decoding="async">' +
    '</div>' +
    '<div class="product-gallery-thumbs" role="group" aria-label="Fotografias del Anillo Majestic">' +
      MAJESTIC_GALLERY.map(function (photo, index) {
        return '<button class="product-gallery-thumb' + (index === 0 ? ' is-active' : '') + '" type="button" data-gallery-index="' + index + '" aria-label="Ver fotografia ' + (index + 1) + ': ' + photo.alt + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' +
          '<img src="' + photo.src + '" alt="" loading="lazy">' +
        '</button>';
      }).join('') +
    '</div>';
  var mainImage = root.querySelector('.gallery-main-image');
  root.querySelectorAll('.product-gallery-thumb').forEach(function (button) {
    button.addEventListener('click', function () {
      var photo = MAJESTIC_GALLERY[Number(button.dataset.galleryIndex)];
      if (!photo) return;
      mainImage.src = photo.src;
      mainImage.alt = photo.alt;
      root.querySelectorAll('.product-gallery-thumb').forEach(function (thumb) {
        var active = thumb === button;
        thumb.classList.toggle('is-active', active);
        thumb.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
  });
}

/* Galería genérica para productos con "gallery" en PRODUCTS (mismo marcado y estilos
   que las galerías de Victoria y Majestic). */
function renderProductGallery(photos, label) {
  var root = document.getElementById('product-photo');
  root.classList.add('has-gallery');
  root.innerHTML =
    '<div class="product-gallery-main">' +
      '<img class="photo-img gallery-main-image" src="' + photos[0].src + '" alt="' + photos[0].alt + '" width="1254" height="1254" decoding="async">' +
    '</div>' +
    '<div class="product-gallery-thumbs" role="group" aria-label="' + label + '">' +
      photos.map(function (photo, index) {
        return '<button class="product-gallery-thumb' + (index === 0 ? ' is-active' : '') + '" type="button" data-gallery-index="' + index + '" aria-label="Ver fotografía ' + (index + 1) + ': ' + photo.alt + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' +
          '<img src="' + photo.src + '" alt="" loading="lazy" width="1254" height="1254">' +
        '</button>';
      }).join('') +
    '</div>';

  var mainImage = root.querySelector('.gallery-main-image');
  root.querySelectorAll('.product-gallery-thumb').forEach(function (button) {
    button.addEventListener('click', function () {
      var photo = photos[Number(button.dataset.galleryIndex)];
      if (!photo) return;
      mainImage.src = photo.src;
      mainImage.alt = photo.alt;
      root.querySelectorAll('.product-gallery-thumb').forEach(function (thumb) {
        var active = thumb === button;
        thumb.classList.toggle('is-active', active);
        thumb.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    });
  });
}

function populateProduct(id) {
  var p = PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  var photoRoot = document.getElementById('product-photo');
  photoRoot.classList.remove('has-gallery');
  if (p.id === 'victoria') {
    renderVictoriaGallery();
  } else if (p.id === 'queen') {
    renderMajesticGallery();
  } else if (p.gallery && p.gallery.length) {
    renderProductGallery(p.gallery, 'Fotografías del Anillo ' + p.name);
  } else {
    photoRoot.innerHTML = jewelImg(p, 'photo-img');
  }
  document.getElementById('pd-category').textContent = p.category;
  document.getElementById('pd-name').textContent = p.name;
  document.getElementById('pd-price').textContent = p.price;
  document.getElementById('pd-desc').textContent = p.desc;

  /* Disponibilidad y especificaciones: solo para productos que las declaran. */
  var availability = document.getElementById('pd-availability');
  availability.textContent = p.availability || '';
  availability.hidden = !p.availability;
  var specs = document.getElementById('pd-specs');
  specs.innerHTML = '';
  (p.specs || []).forEach(function (row) {
    var wrap = document.createElement('div');
    var dt = document.createElement('dt'); dt.textContent = row[0];
    var dd = document.createElement('dd'); dd.textContent = row[1];
    wrap.appendChild(dt); wrap.appendChild(dd); specs.appendChild(wrap);
  });
  specs.hidden = !(p.specs && p.specs.length);

  var waText = encodeURIComponent('Hola, me interesa la pieza "' + p.name + '" (' + p.price + '). ¿Me pueden dar más información?');
  document.getElementById('pd-whatsapp').href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;
  document.getElementById('pd-info').dataset.product = p.name;
}

function openProduct(id) {
  navigate(productHash(id));
}

/* ---------- índice de colecciones ---------- */
function buildCollectionCard(imgSrc, imgAlt, titleText, descText, ctaText) {
  var card = document.createElement('article');
  card.className = 'collection-card';
  var photo = document.createElement('div');
  photo.className = 'collection-photo';
  var img = document.createElement('img');
  img.src = imgSrc; img.alt = imgAlt; img.loading = 'lazy';
  photo.appendChild(img);
  var label = document.createElement('p');
  label.className = 'collection-name'; label.textContent = titleText;
  var desc = document.createElement('p');
  desc.className = 'collection-desc'; desc.textContent = descText;
  var cta = document.createElement('span');
  cta.className = 'collection-cta'; cta.textContent = ctaText;
  var arrow = document.createElement('span');
  arrow.className = 'collection-arrow'; arrow.textContent = '→'; cta.appendChild(arrow);
  card.appendChild(photo); card.appendChild(label); card.appendChild(desc); card.appendChild(cta);
  return card;
}

function renderCollectionsIndex() {
  var grid = document.getElementById('collection-grid');
  grid.innerHTML = '';
  var groups = [
    { title: 'Colecciones en Plata', banner: 'assets/images/colecciones-en-plata.png', names: [] },

    /* La primera tarjeta muestra la pieza ISABELLA. 'Anillos de Compromiso' sigue intacta en
       COLLECTIONS/PRODUCTS y accesible desde EVA, el Home y su ruta #/coleccion/anillos-de-compromiso. */
    { title: 'Colecciones Destacadas', names: [{ product: 'isabella-plata' }, { product: 'destello-plata' }, { product: 'silueta-plata' }, { product: 'esencia-plata' }, { product: 'armonia-plata' },'Anillos de Mujer en Plata'] },
    { title: 'Otras Colecciones', names: ['Regalos Especiales'] }
  ];
  groups.forEach(function (group) {
    var section = document.createElement('section');
    section.className = 'catalog-collection-group';
    var heading = document.createElement('h3');
    heading.className = 'catalog-collection-group-title';
    heading.textContent = group.title;
    if (group.banner) {
      var banner = document.createElement('img');
      banner.className = 'catalog-group-banner';
      banner.src = group.banner;
      banner.alt = 'Colecciones en Plata';
      banner.loading = 'eager';
      banner.decoding = 'async';
      section.appendChild(banner);
    } else {
      section.appendChild(heading);
    }
    var cards = document.createElement('div');
    cards.className = 'catalog-group-grid';
    group.names.forEach(function (name) {
      var card;
      if (typeof name === 'object' && name.product) {
        /* Tarjeta de pieza individual: mismo componente visual, enlaza a su ficha. */
        var p = PRODUCTS.find(function (x) { return x.id === name.product; });
        if (!p) return;
        card = buildCollectionCard(p.img, 'Anillo ' + p.name + ', vista frontal', p.name, p.desc, 'Ver Pieza ');
        card.addEventListener('click', function () { navigate(productHash(p.id)); });
        makeLinkCard(card, 'Ver pieza ' + p.name);
      } else {
        var item = COLLECTIONS.find(function (c) { return c.name === name; });
        if (!item) return;
        card = buildCollectionCard(item.img, item.name, item.title, item.desc, 'Explorar Colección ');
        card.addEventListener('click', function () { navigate(collectionHash(item.name)); });
        makeLinkCard(card, 'Explorar colección ' + item.name);
      }
      cards.appendChild(card);
    });
    section.appendChild(cards); grid.appendChild(section);
  });
}
/* ---------- servicios ---------- */
function renderServices() {
  var grid = document.getElementById('services-grid');
  SERVICES.forEach(function (s) {
    var waText = encodeURIComponent('Hola, me gustaría más información sobre el servicio de ' + s.name + '.');
    var card = document.createElement('a');
    card.className = 'service-card';
    card.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;
    card.target = '_blank';
    card.rel = 'noopener';
    card.innerHTML =
      '<span class="service-icon">' + s.icon + '</span>' +
      '<span class="service-copy">' +
        '<span class="service-name">' + s.name + '</span>' +
        '<span class="service-desc">' + s.desc + '</span>' +
        '<span class="service-cta">Consultar por WhatsApp <span class="service-arrow">→</span></span>' +
      '</span>';
    grid.appendChild(card);
  });
}

/* ---------- beneficios ---------- */
function renderBenefits() {
  var grid = document.getElementById('benefits-grid');
  BENEFITS.forEach(function (b) {
    var card = document.createElement('div');
    card.className = 'benefit-card';
    card.innerHTML =
      '<span class="benefit-icon">' + b.icon + '</span>' +
      '<p class="benefit-name">' + b.name + '</p>' +
      '<p class="benefit-desc">' + b.desc + '</p>';
    grid.appendChild(card);
  });
}

/* ---------- EVA — Asesora Virtual ---------- */
function renderEvaOptions() {
  var wrap = document.getElementById('eva-options');
  EVA_OPTIONS.forEach(function (o) {
    var btn = document.createElement('button');
    btn.className = 'eva-option';
    btn.innerHTML =
      '<span class="eva-option-icon" aria-hidden="true">' + o.icon + '</span>' +
      '<span class="eva-option-label">' + o.label + '</span>' +
      '<span class="eva-option-arrow" aria-hidden="true">→</span>';
    btn.addEventListener('click', function () {
      closeEva(false); /* el router mueve el foco a la colección */
      navigate(collectionHash(o.collection));
    });
    wrap.appendChild(btn);
  });
}

/* Contenido de la página que queda inerte mientras EVA está abierta. */
var EVA_BACKDROP = ['.site-header', 'main', '.bottom-nav'];
var evaOpener = null;
var evaCloseTimer = null;

function setBackdropInert(on) {
  EVA_BACKDROP.forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) el.inert = on;
  });
}

function openEva() {
  var overlay = document.getElementById('eva-overlay');
  clearTimeout(evaCloseTimer);
  evaOpener = document.activeElement;
  overlay.hidden = false;
  requestAnimationFrame(function () { overlay.classList.add('active'); });
  document.body.style.overflow = 'hidden';
  setBackdropInert(true);
  document.getElementById('eva-close').focus();
}

function closeEva(restoreFocus) {
  var overlay = document.getElementById('eva-overlay');
  if (overlay.hidden) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setBackdropInert(false);
  clearTimeout(evaCloseTimer);
  evaCloseTimer = setTimeout(function () { overlay.hidden = true; }, 300);
  if (restoreFocus !== false && evaOpener && document.contains(evaOpener)) evaOpener.focus();
  evaOpener = null;
}

/* Mantiene Tab dentro del diálogo de EVA. */
function trapEvaFocus(e) {
  var overlay = document.getElementById('eva-overlay');
  if (e.key !== 'Tab' || overlay.hidden) return;
  var items = overlay.querySelectorAll('button:not([disabled])');
  if (!items.length) return;
  var first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function renderProductCards(grid, items) {
  grid.innerHTML = '';
  items.forEach(function (p) {
    var card = document.createElement('article');
    card.className = 'product-card';
    var imageForCard = p.cardImg
      ? Object.assign({}, p, { img: p.cardImg })
      : p;
    card.innerHTML =
      '<div class="product-photo-sm">' + jewelImg(imageForCard, 'photo-img-sm') + '</div>' +
      '<div class="product-copy">' +
        '<p class="p-name">' + p.name + '</p>' +
        '<p class="p-price">' + p.price + '</p>' +
        '<span class="p-btn">Ver Detalle <span class="p-btn-arrow">&#8594;</span></span>' +
      '</div>';
    card.addEventListener('click', function () { openProduct(p.id); });
    makeLinkCard(card, 'Ver detalle de ' + p.name + ', ' + p.price);
    grid.appendChild(card);
  });
}

function renderFeatured() {
  var items = FEATURED_IDS.map(function (id) {
    return PRODUCTS.find(function (p) { return p.id === id; });
  }).filter(Boolean);
  renderProductCards(document.getElementById('featured-grid'), items);
}

function showCollectionsIndex() {
  currentCollection = null;
  document.getElementById('collections-index').hidden = false;
  document.getElementById('collection-detail').hidden = true;
}

function openCollection(name) {
  var info = COLLECTIONS.find(function (c) { return c.name === name; });
  if (!info) return;
  currentCollection = name;
  document.getElementById('collections-index').hidden = true;
  document.getElementById('collection-detail').hidden = false;
  document.getElementById('cd-title').textContent = info.title;
  var items = PRODUCTS.filter(function (p) { return p.category === name; });
  renderProductCards(document.getElementById('collection-products'), items);
  window.scrollTo(0, 0);
}

/* ---------- eventos ---------- */
document.addEventListener('DOMContentLoaded', function () {
  renderCollectionsIndex();
  renderServices();
  renderBenefits();
  renderFeatured();
  renderEvaOptions();
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    var target = el.dataset.nav;
    var hash = target === 'home' ? '#/'
      : el.dataset.collection ? collectionHash(el.dataset.collection)
      : '#/' + target;
    if (el.classList.contains('moment-card')) {
      makeLinkCard(el, 'Explorar ' + el.querySelector('.moment-name').textContent);
    }
    el.addEventListener('click', function (e) {
      e.preventDefault();
      navigate(hash);
    });
  });

  window.addEventListener('hashchange', renderRoute);
  renderRoute();     /* respeta el hash de entrada (enlaces directos) */
  routerReady = true;

  document.getElementById('collection-back').addEventListener('click', function () {
    navigate('#/coleccion');
  });

  document.getElementById('product-back').addEventListener('click', function () {
    navigate(currentCollection ? collectionHash(currentCollection) : '#/coleccion');
  });

  document.getElementById('pd-info').addEventListener('click', function () {
    var product = this.dataset.product;
    var msg = document.getElementById('cf-mensaje');
    if (product) msg.value = 'Quisiera más información sobre: ' + product;
    pendingFocusId = 'cf-nombre';
    navigate('#/contacto');
  });

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('cf-nombre').value.trim();
    var mensaje = document.getElementById('cf-mensaje').value.trim();
    var text = encodeURIComponent('Hola, soy ' + nombre + '. ' + mensaje);
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank', 'noopener');
  });

  document.getElementById('eva-trigger').addEventListener('click', openEva);
  document.getElementById('eva-close').addEventListener('click', closeEva);
  document.getElementById('eva-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeEva();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.getElementById('eva-overlay').hidden) closeEva();
    trapEvaFocus(e);
  });
});

/* LA_MESSAGE_ROTATOR_V1 */(function(){var messages=["Bienvenidos a Joyería Los Andes. ¡Gracias por visitarnos!","Joyas de alta calidad para cada ocasión especial.","Creamos tu joya a medida, diseñada especialmente para ti.","Descubre nuestras colecciones exclusivas en plata y oro.","Esmeraldas colombianas que convierten cada joya en una pieza especial.","Servicio especializado de restauración y recuperación de joyas.","Calidad, experiencia y dedicación al servicio de tus joyas.","Estamos para ayudarte a encontrar la joya perfecta.","¿Tienes una idea especial? Con gusto te asesoramos."];function init(){if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.querySelectorAll(".la-message-strip").forEach(function(strip){var node=strip.querySelector(".la-message-text");if(!node)return;var index=0;window.setInterval(function(){node.classList.add("is-changing");window.setTimeout(function(){index=(index+1)%messages.length;node.textContent=messages[index];node.classList.remove("is-changing");},250);},4500);});}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init,{once:true});}else{init();}})();
/* LA_MESSAGE_STRIP_POSITION_V1 */(function(){var hd=false,cd=false,ob;function move(){var h=document.querySelector("#view-home .la-message-strip"),hero=document.querySelector("#view-home .hero");if(h&&hero){if(hero.nextElementSibling!==h)hero.insertAdjacentElement("afterend",h);hd=true;}var c=document.querySelector("#view-coleccion .la-message-strip"),banner=document.querySelector("#view-coleccion .catalog-group-banner");if(c&&banner){if(banner.nextElementSibling!==c)banner.insertAdjacentElement("afterend",c);cd=true;}if(hd&&cd&&ob)ob.disconnect();}function start(){move();if(!hd||!cd){ob=new MutationObserver(move);ob.observe(document.body,{childList:true,subtree:true});}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();window.addEventListener("hashchange",move);})();