/* ========================================================
   LOS ANDES JOYERÍA — Demo Comercial (sin backend)
   Solo navegación entre vistas + enlaces de WhatsApp.
   ======================================================== */

var WHATSAPP_NUMBER = '573132091591';

/* Imagen destacada de Inicio — fotografía oficial de la biblioteca premium. */
var HERO_IMAGE = 'assets/images/products/ring-victoria.webp';

/* Orden de despliegue de las colecciones en la vista Colección. */
var COLLECTIONS = [
  'Anillos de Compromiso',
  'Argollas de Matrimonio',
  'Anillos de Grado',
  'Esmeraldas Colombianas',
  'Alta Joyería',
  'Joyería en Oro',
  'Joyería en Plata',
  'Regalos Especiales'
];

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
    img: 'assets/images/products/ring-victoria.webp' },

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
  { id: 'queen', name: 'Queen', category: 'Alta Joyería', price: '$18.500.000',
    desc: 'Anillo statement con esmeralda cojín y halo escalonado de diamantes.',
    img: 'assets/images/products/ring-queen.webp' },

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
    img: 'assets/images/products/necklace-forever.webp' }
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
    el.classList.toggle('active', el.dataset.nav === view);
  });
  window.scrollTo(0, 0);
}

function populateProduct(id) {
  var p = PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  document.getElementById('product-photo').innerHTML = jewelImg(p, 'photo-img');
  document.getElementById('pd-category').textContent = p.category;
  document.getElementById('pd-name').textContent = p.name;
  document.getElementById('pd-price').textContent = p.price;
  document.getElementById('pd-desc').textContent = p.desc;

  var waText = encodeURIComponent('Hola, me interesa la pieza "' + p.name + '" (' + p.price + '). ¿Me pueden dar más información?');
  document.getElementById('pd-whatsapp').href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;
  document.getElementById('pd-info').dataset.product = p.name;
}

function openProduct(id) {
  populateProduct(id);
  goTo('producto');
}

/* ---------- construir colección (agrupada por colección) ---------- */
function renderGrid() {
  var container = document.getElementById('collections-list');
  COLLECTIONS.forEach(function (collectionName) {
    var items = PRODUCTS.filter(function (p) { return p.category === collectionName; });
    if (!items.length) return;

    var block = document.createElement('section');
    block.className = 'collection-block';

    var heading = document.createElement('h3');
    heading.className = 'collection-heading';
    heading.textContent = collectionName;
    block.appendChild(heading);

    var grid = document.createElement('div');
    grid.className = 'product-grid';

    items.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML =
        '<div class="product-photo-sm">' + jewelImg(p, 'photo-img-sm') + '</div>' +
        '<div class="product-copy">' +
          '<p class="p-name">' + p.name + '</p>' +
          '<p class="p-price">' + p.price + '</p>' +
          '<span class="p-btn">Ver Detalle <span class="p-btn-arrow">&#8594;</span></span>' +
        '</div>';
      card.addEventListener('click', function () { openProduct(p.id); });
      grid.appendChild(card);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

/* ---------- eventos ---------- */
document.addEventListener('DOMContentLoaded', function () {
  renderGrid();
  document.getElementById('hero-visual').innerHTML =
    '<img class="photo-img" src="' + HERO_IMAGE + '" alt="Los Andes Joyería" loading="eager">';
  populateProduct('victoria'); /* precarga una pieza destacada sin navegar */
  goTo('home');

  document.querySelectorAll('[data-nav]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(el.dataset.nav);
    });
  });

  document.getElementById('pd-info').addEventListener('click', function () {
    goTo('contacto');
    var product = this.dataset.product;
    var msg = document.getElementById('cf-mensaje');
    if (product) msg.value = 'Quisiera más información sobre: ' + product;
    document.getElementById('cf-nombre').focus();
  });

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('cf-nombre').value.trim();
    var mensaje = document.getElementById('cf-mensaje').value.trim();
    var text = encodeURIComponent('Hola, soy ' + nombre + '. ' + mensaje);
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank', 'noopener');
  });
});
