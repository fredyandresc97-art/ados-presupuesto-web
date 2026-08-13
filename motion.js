/* ============================================================
   ADOS Presupuesto — capa de movimiento (comportamiento)
   Pareja de motion.css. Aquí se decide QUÉ se anima; el CSS dice CÓMO.

   No hay que tocar el marcado de los documentos: este archivo busca
   los bloques por las clases que ya usan (.cols, .tri, .shot, .ruta…)
   y les pone el atributo data-reveal. Si un documento no tiene alguna
   de esas clases, ese selector simplemente no encuentra nada.

   Tres cosas hace, en este orden:
     1. Entrada de los bloques al entrar en pantalla (escalonada).
     2. Barra de lectura ámbar en el borde superior.
     3. Marca la cabecera cuando la página ya no está arriba del todo.
   ============================================================ */

(function () {
  'use strict';

  /* Si el sistema pide menos movimiento, no se hace nada en absoluto:
     no se marca ningún bloque, así que nada queda oculto esperando. */
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ----------------------------------------------------------
     Qué entra al hacer scroll.
     El orden de la lista no importa (el navegador devuelve los
     resultados en orden de documento), pero sí importa que estén
     los contenedores además de sus hijos: más abajo se descarta
     todo lo que ya esté dentro de un bloque marcado, de modo que
     siempre gana el más externo y nunca se anima dos veces.
     ---------------------------------------------------------- */
  var SELECTORES = [
    /* portada de cada documento: el primer <section> tras la cabecera */
    'header + section > *',

    /* index.html */
    '.problema-row',
    '.stage-row',
    '.dirigido-grid > *',
    '.compra-grid > *',
    '.planes > *',

    /* Herramientas.dc.html */
    '.ruta > a',
    '.paso > *',
    '.subbloque',
    '.detras > div',
    '.porque',
    '.faq',

    /* documentos 01–06 */
    '.bnum',
    '.cols > *',
    '.cols--head > *',
    'figure.shot',
    '.shot',
    '.vid',
    '.cuadro',
    '.regla',
    '.cita',
    '.ambar',
    '.tri > div',
    '.cuatro > div',
    '.estados > div',
    '.duo > *',
    '.cinco-dolor > div',
    '.chips'
  ].join(',');

  /* Escalonado entre hermanos: 70 ms de diferencia, cortado a los
     cuatro primeros para que una rejilla de cinco no se haga lenta. */
  var PASO_MS = 70;
  var PASOS_MAX = 4;

  var observador = null;
  if ('IntersectionObserver' in window) {
    observador = new IntersectionObserver(function (entradas) {
      for (var i = 0; i < entradas.length; i++) {
        if (!entradas[i].isIntersecting) continue;
        entradas[i].target.setAttribute('data-reveal', 'in');
        observador.unobserve(entradas[i].target);
      }
    /* umbral 0: basta con que asome. Con un umbral mayor, un bloque más
       alto que la pantalla podría no llegar nunca a cruzarlo. */
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
  }

  /* Red de seguridad: un bloque de altura cero no intersecta nunca, así
     que se quedaría con el velo puesto para siempre. Al terminar la carga
     se les descubre sin más. */
  function rescatar() {
    var pendientes = document.querySelectorAll('[data-reveal=""]');
    for (var i = 0; i < pendientes.length; i++) {
      if (pendientes[i].getBoundingClientRect().height === 0) {
        pendientes[i].setAttribute('data-reveal', 'in');
      }
    }
  }

  function marcar(el, retraso) {
    el.style.setProperty('--reveal-delay', retraso + 'ms');
    el.setAttribute('data-reveal', '');
    /* Sin IntersectionObserver (navegador viejo) se muestra todo de
       una vez: se pierde la animación, no el contenido. */
    if (observador) observador.observe(el);
    else el.setAttribute('data-reveal', 'in');
  }

  function barrer() {
    var nodos = document.querySelectorAll(SELECTORES);
    var padreAnterior = null;
    var indice = 0;

    for (var i = 0; i < nodos.length; i++) {
      var el = nodos[i];
      if (el.hasAttribute('data-reveal')) continue;

      /* Descartar lo que ya vive dentro de otro bloque marcado.
         Como los ancestros van antes en orden de documento, para
         cuando llega el hijo el padre ya lleva el atributo. */
      var padre = el.parentElement;
      if (padre && padre.closest('[data-reveal]')) continue;

      if (padre !== padreAnterior) { padreAnterior = padre; indice = 0; }
      marcar(el, Math.min(indice, PASOS_MAX) * PASO_MS);
      indice++;
    }
  }

  /* ----------------------------------------------------------
     Barra de lectura + estado de la cabecera
     ---------------------------------------------------------- */
  var barra = null;
  var cabecera = null;
  var enCola = false;

  function pintarScroll() {
    enCola = false;
    var raiz = document.documentElement;
    var recorrible = raiz.scrollHeight - raiz.clientHeight;
    var arriba = raiz.scrollTop || document.body.scrollTop || 0;

    if (barra) {
      var avance = recorrible > 0 ? Math.min(1, Math.max(0, arriba / recorrible)) : 0;
      barra.style.scale = avance + ' 1';
    }
    if (cabecera) cabecera.setAttribute('data-scrolled', arriba > 8 ? 'true' : 'false');
  }

  function alScroll() {
    if (enCola) return;
    enCola = true;
    requestAnimationFrame(pintarScroll);
  }

  /* ----------------------------------------------------------
     Arranque.
     El contenido de estos documentos lo dibuja el runtime de x-dc,
     que puede terminar después de DOMContentLoaded. Por eso además
     del arranque normal se vigila el DOM: cada vez que aparecen
     nodos nuevos se vuelve a barrer (barrer() no repite trabajo).
     ---------------------------------------------------------- */
  var barridoEnCola = false;
  function programarBarrido() {
    if (barridoEnCola) return;
    barridoEnCola = true;
    requestAnimationFrame(function () { barridoEnCola = false; barrer(); });
  }

  var iniciado = false;
  function iniciar() {
    if (iniciado || !document.body) return;
    iniciado = true;

    if (!barra) {
      barra = document.createElement('div');
      barra.className = 'ados-progress';
      barra.setAttribute('aria-hidden', 'true');
      document.body.appendChild(barra);
    }
    cabecera = document.querySelector('header');

    barrer();
    pintarScroll();

    window.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alScroll, { passive: true });

    /* Solo childList: marcar() cambia atributos y estilos, y si esto
       vigilara atributos se llamaría a sí mismo sin parar. */
    new MutationObserver(programarBarrido)
      .observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();

  /* Última pasada cuando ya cargaron imágenes y fuentes: si algo se
     movió de sitio, la cabecera y la barra quedan cuadradas. */
  window.addEventListener('load', function () {
    iniciar();
    programarBarrido();
    pintarScroll();
    setTimeout(rescatar, 800);
  });
})();
