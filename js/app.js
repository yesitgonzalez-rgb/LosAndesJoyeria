/* ========================================================
   LOS ANDES JOYERÍA — Demo Comercial (sin backend)
   Solo navegación entre vistas + enlaces de WhatsApp.
   ======================================================== */

var WHATSAPP_NUMBER = '573132091591';

var PRODUCTS = [
  { id: 'halo', name: 'Anillo Halo Esmeralda', category: 'Anillos', price: '$4.850.000',
    desc: 'Oro blanco 18k con esmeralda colombiana talla ovalada de 0.9ct, rodeada de un halo de diamantes naturales.',
    shape: 'ring' },
  { id: 'solitario', name: 'Anillo Solitario Andes', category: 'Anillos', price: '$3.200.000',
    desc: 'Diseño clásico en oro amarillo 18k con esmeralda central de corte esmeralda. Elegancia atemporal.',
    shape: 'ring' },
  { id: 'gota', name: 'Aretes Gota Esmeralda', category: 'Aretes', price: '$2.650.000',
    desc: 'Aretes colgantes en oro blanco con esmeraldas en talla gota y contorno de micro pavé de diamantes.',
    shape: 'earring' },
  { id: 'cascada', name: 'Collar Cascada Esmeralda', category: 'Collares', price: '$5.900.000',
    desc: 'Oro blanco 18k con cascada de esmeraldas colombianas en talla marquís, cadena ajustable de 40 a 45cm.',
    shape: 'necklace' },
  { id: 'suelta', name: 'Esmeralda Suelta Premium', category: 'Esmeraldas Sueltas', price: '$6.500.000',
    desc: 'Esmeralda colombiana en bruto de origen Muzo, 1.2ct, con certificado de autenticidad.',
    shape: 'loose' },
  { id: 'pulsera', name: 'Pulsera Línea Esmeralda', category: 'Pulseras', price: '$2.250.000',
    desc: 'Oro blanco 18k con línea de esmeraldas talla baguette. Cierre de seguridad con broche oculto.',
    shape: 'bracelet' }
];

/* ---------- render de joya en SVG (sin fotografía real) ---------- */
var jewelUid = 0;
function jewelSVG(shape) {
  jewelUid += 1;
  var stoneId = 'stone' + jewelUid;
  var metalId = 'metal' + jewelUid;
  var softId = 'soft' + jewelUid;

  var defs =
    '<defs>' +
      '<radialGradient id="' + stoneId + '" cx="35%" cy="28%" r="80%">' +
        '<stop offset="0%" stop-color="#6fe0ae"/>' +
        '<stop offset="45%" stop-color="#1E8768"/>' +
        '<stop offset="100%" stop-color="#08412C"/>' +
      '</radialGradient>' +
      '<linearGradient id="' + metalId + '" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#F1DFB4"/>' +
        '<stop offset="50%" stop-color="#B99951"/>' +
        '<stop offset="100%" stop-color="#8a713a"/>' +
      '</linearGradient>' +
      '<filter id="' + softId + '" x="-40%" y="-40%" width="180%" height="180%">' +
        '<feGaussianBlur stdDeviation="2.2"/>' +
      '</filter>' +
    '</defs>';

  var floor = '<ellipse cx="100" cy="176" rx="52" ry="9" fill="#08412C" opacity="0.10" filter="url(#' + softId + ')"/>';

  var gem =
    '<polygon points="100,58 116,70 116,96 100,108 84,96 84,70" fill="url(#' + stoneId + ')" stroke="#fff" stroke-width="1" opacity="0.97"/>' +
    '<polygon points="100,58 116,70 100,80 84,70" fill="#bdf3d9" opacity="0.55"/>';

  var body = '';
  if (shape === 'ring') {
    body =
      '<circle cx="100" cy="120" r="46" fill="none" stroke="url(#' + metalId + ')" stroke-width="13"/>' +
      gem;
  } else if (shape === 'necklace') {
    body =
      '<path d="M46 46 Q100 128 154 46" fill="none" stroke="url(#' + metalId + ')" stroke-width="4.5" stroke-linecap="round"/>' +
      '<g transform="translate(0,30)">' + gem + '</g>';
  } else if (shape === 'earring') {
    body =
      '<circle cx="70" cy="52" r="6.5" fill="url(#' + metalId + ')"/><line x1="70" y1="58" x2="70" y2="74" stroke="#B99951" stroke-width="2.4"/>' +
      '<g transform="translate(-30,10) scale(0.8)">' + gem + '</g>' +
      '<circle cx="132" cy="46" r="6.5" fill="url(#' + metalId + ')"/><line x1="132" y1="52" x2="132" y2="68" stroke="#B99951" stroke-width="2.4"/>' +
      '<g transform="translate(32,2) scale(0.8)">' + gem + '</g>';
  } else if (shape === 'loose') {
    body =
      '<polygon points="100,50 128,66 128,110 100,128 72,110 72,66" fill="url(#' + stoneId + ')" stroke="#fff" stroke-width="1.4" opacity="0.97"/>' +
      '<polygon points="100,50 128,66 100,80 72,66" fill="#bdf3d9" opacity="0.6"/>';
  } else { /* bracelet */
    body =
      '<ellipse cx="100" cy="120" rx="58" ry="24" fill="none" stroke="url(#' + metalId + ')" stroke-width="8"/>' +
      '<g transform="translate(-42,4) scale(0.62)">' + gem + '</g>' +
      '<g transform="translate(0,4) scale(0.62)">' + gem + '</g>' +
      '<g transform="translate(42,4) scale(0.62)">' + gem + '</g>';
  }

  return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' + defs + floor + body + '</svg>';
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
  document.getElementById('product-photo').innerHTML = jewelSVG(p.shape);
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
      '<div class="product-photo-sm">' + jewelSVG(p.shape) + '</div>' +
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
  document.getElementById('hero-visual').innerHTML = jewelSVG('necklace');
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
