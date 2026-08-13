/* ============================================================
   ADOS Presupuesto — formulario de compra y WhatsApp
   Pareja de contacto.css.

   Dos cosas hace:
     1. Pone el botón flotante de WhatsApp en todas las páginas.
     2. Se hace cargo del formulario de la sección «Comprar» (solo
        existe en index.html; en el resto no encuentra nada y calla).

   ---------------------------------------------------------------
   PARA QUE LAS SOLICITUDES LLEGUEN AL CORREO
   ---------------------------------------------------------------
   Hoy el formulario funciona sin configurar nada: al enviarlo abre
   WhatsApp con todos los datos ya escritos. Sirve, pero obliga al
   visitante a tener WhatsApp y deja el registro solo en el chat.

   Para recibirlas además por correo hace falta una cuenta gratuita
   en formspree.io (50 solicitudes al mes sin pagar):

     1. Entrar a formspree.io y crear un formulario nuevo.
     2. Poner el correo donde quiere recibirlas.
     3. Copiar la dirección que le dan, del estilo
        https://formspree.io/f/abcdwxyz
     4. Pegarla abajo, entre las comillas de ENDPOINT.

   En cuanto tenga valor, el formulario manda al correo y deja de
   abrir WhatsApp. Si se vacía, vuelve a WhatsApp. No hay que tocar
   nada más.
   ============================================================ */

(function () {
  'use strict';

  var ENDPOINT = '';                 /* <- la dirección de Formspree va aquí */
  var WHATSAPP = '573102335153';     /* el mismo número de plugin.adosiya.com */

  var ICONO_WA = '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function enlaceWhatsApp(texto) {
    return 'https://wa.me/' + WHATSAPP + (texto ? '?text=' + encodeURIComponent(texto) : '');
  }

  /* ----------------------------------------------------------
     1. Botón flotante, en todas las páginas
     ---------------------------------------------------------- */
  function ponerFlotante() {
    if (document.querySelector('.wa-float')) return;
    var a = document.createElement('a');
    a.className = 'wa-float';
    a.href = enlaceWhatsApp('Hola, escribo por ADOS Presupuesto.');
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Escribir por WhatsApp');
    a.innerHTML = ICONO_WA;
    document.body.appendChild(a);
  }

  /* ----------------------------------------------------------
     2. El formulario
     ---------------------------------------------------------- */
  function avisar(form, texto, tono) {
    var caja = form.querySelector('.aviso');
    if (!caja) return;
    caja.textContent = texto;
    if (tono) caja.setAttribute('data-tono', tono);
    else caja.removeAttribute('data-tono');
    caja.hidden = false;
  }

  function recoger(form) {
    var datos = {};
    var campos = form.querySelectorAll('[name]');
    for (var i = 0; i < campos.length; i++) {
      var c = campos[i];
      if (c.value && String(c.value).trim()) datos[c.name] = String(c.value).trim();
    }
    return datos;
  }

  /* El mismo contenido del formulario, escrito para leerse en un chat. */
  function comoMensaje(datos) {
    var etiquetas = {
      plan: 'Plan',
      nombre: 'Nombre',
      empresa: 'Empresa',
      correo: 'Correo',
      telefono: 'Teléfono',
      licencias: 'Licencias',
      mensaje: 'Comentario'
    };
    var lineas = ['Hola, quiero comprar ADOS Presupuesto.', ''];
    for (var clave in etiquetas) {
      if (datos[clave]) lineas.push(etiquetas[clave] + ': ' + datos[clave]);
    }
    return lineas.join('\n');
  }

  function atender(form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var datos = recoger(form);
      var boton = form.querySelector('.enviar');

      /* Sin Formspree configurado: se abre WhatsApp con todo escrito.
         Se hace de forma síncrona dentro del submit para que el
         navegador no lo tome por una ventana emergente y la bloquee. */
      if (!ENDPOINT) {
        window.open(enlaceWhatsApp(comoMensaje(datos)), '_blank', 'noopener');
        avisar(form, 'Le abrimos WhatsApp con sus datos ya escritos. Solo tiene que darle enviar.');
        return;
      }

      if (boton) { boton.disabled = true; boton.textContent = 'Enviando…'; }

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      }).then(function (r) {
        if (!r.ok) throw new Error('respuesta ' + r.status);
        form.reset();
        avisar(form, 'Recibido. Le respondemos con la cotización al correo que nos dejó.');
      }).catch(function () {
        /* Si el envío falla no se pierde la solicitud: se ofrece el
           camino de WhatsApp en vez de dejar al visitante colgado. */
        var caja = form.querySelector('.aviso');
        if (caja) {
          caja.setAttribute('data-tono', 'mal');
          caja.innerHTML = 'No pudimos enviar el formulario. ' +
            '<a href="' + enlaceWhatsApp(comoMensaje(datos)) + '" target="_blank" rel="noopener" ' +
            'style="color: var(--accent); text-decoration: underline;">Mándenoslo por WhatsApp</a> ' +
            'y lo resolvemos igual.';
          caja.hidden = false;
        }
      }).then(function () {
        if (boton) { boton.disabled = false; boton.textContent = 'Pedir cotización'; }
      });
    });
  }

  /* ==========================================================
     EQUIVALENCIA EN DÓLARES
     El precio en pesos está escrito en el HTML y es el que manda.
     Esto solo añade debajo un «≈ US$…» con el cambio del día, que
     se consulta al vuelo para que no haya que tocar la página cada
     vez que se mueve el dólar.

     Si las dos fuentes fallan, o el visitante no tiene internet, la
     línea sencillamente no aparece: nunca se muestra una cifra
     inventada ni una vieja de hace meses.
     ========================================================== */

  /* Dos fuentes gratuitas, sin clave y con CORS abierto. Se prueba
     la primera y, si no contesta, la segunda. */
  var FUENTES = [
    {
      url: 'https://open.er-api.com/v6/latest/COP',
      leer: function (d) { return d && d.rates && d.rates.USD; }
    },
    {
      url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/cop.json',
      leer: function (d) { return d && d.cop && d.cop.usd; }
    }
  ];

  var CACHE_CLAVE = 'ados-tasa-cop-usd';
  var CACHE_MS = 12 * 60 * 60 * 1000;   /* medio día: la tasa se publica una vez al día */
  var tasa = null;                       /* cuántos dólares vale un peso */

  function leerCache() {
    try {
      var crudo = localStorage.getItem(CACHE_CLAVE);
      if (!crudo) return null;
      var g = JSON.parse(crudo);
      if (!g || !g.tasa || (Date.now() - g.cuando) > CACHE_MS) return null;
      return g.tasa;
    } catch (e) { return null; }
  }

  function guardarCache(t) {
    try {
      localStorage.setItem(CACHE_CLAVE, JSON.stringify({ tasa: t, cuando: Date.now() }));
    } catch (e) { /* modo incógnito o almacenamiento lleno: da igual, se pedirá otra vez */ }
  }

  function pedirTasa(i) {
    i = i || 0;
    if (i >= FUENTES.length) return Promise.resolve(null);
    var f = FUENTES[i];
    return fetch(f.url, { cache: 'default' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        var t = d && f.leer(d);
        /* rango de cordura: un peso vale entre 0,0001 y 0,01 dólares.
           Si la fuente devuelve cualquier otra cosa, no se usa. */
        if (typeof t === 'number' && t > 0.0001 && t < 0.01) return t;
        return pedirTasa(i + 1);
      })
      .catch(function () { return pedirTasa(i + 1); });
  }

  function enDolares(pesos) {
    var d = pesos * tasa;
    /* por debajo de mil se redondea al dólar; por encima, a la decena,
       que da una cifra más honesta para algo aproximado */
    var redondo = d < 1000 ? Math.round(d) : Math.round(d / 10) * 10;
    return redondo.toLocaleString('en-US');
  }

  function pintarDolares() {
    if (!tasa) return;
    var huecos = document.querySelectorAll('.usd[data-cop]');
    for (var i = 0; i < huecos.length; i++) {
      var pesos = parseFloat(huecos[i].getAttribute('data-cop'));
      if (!pesos) continue;
      huecos[i].textContent = '≈ US$' + enDolares(pesos);
      huecos[i].hidden = false;
    }
    var nota = document.querySelector('.usd-nota');
    if (nota && huecos.length) {
      nota.textContent = 'La equivalencia en dólares es del cambio del día y se actualiza sola.';
      nota.hidden = false;
    }
  }

  function arrancarDolares() {
    tasa = leerCache();
    if (tasa) { pintarDolares(); return; }
    pedirTasa().then(function (t) {
      if (!t) return;              /* sin tasa: la línea se queda oculta */
      tasa = t;
      guardarCache(t);
      pintarDolares();
    });
  }

  /* ----------------------------------------------------------
     Los botones «Comprar» de cada plan bajan al formulario con el
     plan ya elegido, para que nadie tenga que repetir lo que acaba
     de pulsar. El data-plan de la tarjeta tiene que coincidir con
     el texto de una de las opciones del desplegable.
     ---------------------------------------------------------- */
  function atenderPlanes() {
    var botones = document.querySelectorAll('[data-plan]');
    for (var i = 0; i < botones.length; i++) {
      if (botones[i].hasAttribute('data-atendido')) continue;
      botones[i].setAttribute('data-atendido', '');
      botones[i].addEventListener('click', function () {
        var sel = document.querySelector('#form-compra [name="plan"]');
        if (!sel) return;
        var quiero = this.getAttribute('data-plan');
        for (var k = 0; k < sel.options.length; k++) {
          if (sel.options[k].text === quiero) { sel.selectedIndex = k; break; }
        }
      });
    }
  }

  /* ----------------------------------------------------------
     Arranque. El contenido lo dibuja el runtime de x-dc, que puede
     terminar después de DOMContentLoaded: por eso se vuelve a mirar
     cada vez que aparecen nodos nuevos.
     ---------------------------------------------------------- */
  function revisar() {
    if (!document.body) return;
    ponerFlotante();
    atenderPlanes();
    /* si el runtime redibujó las tarjetas, se vuelven a rellenar con
       la tasa que ya tenemos; no se pide otra vez */
    pintarDolares();
    var form = document.getElementById('form-compra');
    if (form && !form.hasAttribute('data-atendido')) {
      form.setAttribute('data-atendido', '');
      atender(form);
    }
  }

  var enCola = false;
  function programar() {
    if (enCola) return;
    enCola = true;
    requestAnimationFrame(function () { enCola = false; revisar(); });
  }

  function iniciar() {
    revisar();
    arrancarDolares();
    new MutationObserver(programar)
      .observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
  window.addEventListener('load', programar);
})();
