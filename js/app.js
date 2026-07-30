/* ========================================================
   LOS ANDES JOYERÍA — Demo Comercial (sin backend)
   Solo navegación entre vistas + enlaces de WhatsApp.
   ======================================================== */

var WHATSAPP_NUMBER = '573132091591';

var PRODUCTS = [
  { id: 'halo', name: 'Anillo Halo Esmeralda', category: 'Anillos', price: '$4.850.000',
    desc: 'Oro blanco 18k con esmeralda colombiana talla ovalada de 0.9ct, rodeada de un halo de diamantes naturales.',
    img: 'assets/products/ring-halo.jpg' },
  { id: 'solitario', name: 'Anillo Solitario Andes', category: 'Anillos', price: '$3.200.000',
    desc: 'Diseño clásico en oro amarillo 18k con esmeralda central de corte esmeralda. Elegancia atemporal.',
    img: 'assets/products/ring-solitario.jpg' },
  { id: 'gota', name: 'Aretes Gota Esmeralda', category: 'Aretes', price: '$2.650.000',
    desc: 'Aretes colgantes en oro blanco con esmeraldas en talla gota y contorno de micro pavé de diamantes.',
    img: 'assets/products/earrings-gota.jpg' },
  { id: 'cascada', name: 'Collar Cascada Esmeralda', category: 'Collares', price: '$5.900.000',
    desc: 'Oro blanco 18k con cascada de esmeraldas colombianas en talla marquís, cadena ajustable de 40 a 45cm.',
    img: 'assets/products/necklace-cascada.jpg' },
  { id: 'suelta', name: 'Esmeralda Suelta Premium', category: 'Esmeraldas Sueltas', price: '$6.500.000',
    desc: 'Esmeralda colombiana en bruto de origen Muzo, 1.2ct, con certificado de autenticidad.',
    img: 'assets/products/gem-suelta.jpg' },
  { id: 'pulsera', name: 'Pulsera Línea Esmeralda', category: 'Pulseras', price: '$2.250.000',
    desc: 'Oro blanco 18k con línea de esmeraldas talla baguette. Cierre de seguridad con broche oculto.',
    img: 'assets/products/bracelet-linea.jpg' }
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

/* ---------- construir colección ---------- */
function renderGrid() {
  var grid = document.getElementById('product-grid');
  PRODUCTS.forEach(function (p) {
    var card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-photo-sm">' + jewelImg(p, 'photo-img-sm') + '</div>' +
      '<div class="product-copy">' +
        '<p class="p-name">' + p.name + '</p>' +
        '<p class="p-price">' + p.price + '</p>' +
        '<span class="p-btn">Ver Detalle</span>' +
      '</div>';
    card.addEventListener('click', function () { openProduct(p.id); });
    grid.appendChild(card);
  });
}

/* ---------- eventos ---------- */
document.addEventListener('DOMContentLoaded', function () {
  renderGrid();
  var heroProduct = PRODUCTS.find(function (x) { return x.id === 'cascada'; });
  document.getElementById('hero-visual').innerHTML = jewelImg(heroProduct, 'photo-img');
  if (PRODUCTS.length) populateProduct(PRODUCTS[3].id); /* precarga collar destacado sin navegar */
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
