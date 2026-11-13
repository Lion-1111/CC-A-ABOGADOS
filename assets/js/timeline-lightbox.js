/**
 * CC&A Corporativo Legal — Visor Zoom Puro de Tarjetas Históricas
 * Permite ampliar y leer con total claridad cada documento histórico:
 * - En computadora: Zoom suave al pasar el ratón (hover).
 * - En celular o al hacer clic: Abre la tarjeta en grande a pantalla completa
 *   (solo la tarjeta, limpia, nítida, sin textos ni paneles molestos).
 * - Tocar cualquier parte o presionar Esc para cerrar.
 */
(function() {
  'use strict';

  var zoomOverlay = null;
  var zoomImg = null;

  function createZoomOverlay() {
    if (zoomOverlay) return zoomOverlay;

    zoomOverlay = document.createElement('div');
    zoomOverlay.id = 'ccaPureZoomOverlay';
    zoomOverlay.className = 'cca-pure-zoom-overlay';
    zoomOverlay.setAttribute('role', 'dialog');
    zoomOverlay.setAttribute('aria-modal', 'true');
    zoomOverlay.setAttribute('aria-label', 'Tarjeta ampliada');

    zoomOverlay.innerHTML =
      '<div class="cca-pz-backdrop"></div>' +
      '<button type="button" class="cca-pz-close" aria-label="Cerrar">&times;</button>' +
      '<div class="cca-pz-container">' +
        '<img class="cca-pz-image" src="" alt="Tarjeta histórica CC&A" />' +
      '</div>' +
      '<div class="cca-pz-hint"><i class="fas fa-times-circle"></i> Toca en cualquier parte para cerrar</div>';

    document.body.appendChild(zoomOverlay);

    zoomImg = zoomOverlay.querySelector('.cca-pz-image');

    // Cerrar al tocar o hacer clic en cualquier parte del overlay
    zoomOverlay.addEventListener('click', function(e) {
      closeZoom();
    });

    // Tecla Escape para cerrar
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) {
        closeZoom();
      }
    });

    return zoomOverlay;
  }

  function openZoom(imageSrc, altText) {
    if (!imageSrc) return;
    createZoomOverlay();

    zoomImg.src = imageSrc;
    if (altText) zoomImg.alt = altText;

    zoomOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeZoom() {
    if (!zoomOverlay) return;
    zoomOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function bindCards() {
    // 1. Tarjetas interactivas de la línea de tiempo (1999, 2006, 2018)
    var cards = document.querySelectorAll('.cca-tl-interactive-card');
    cards.forEach(function(card) {
      card.style.cursor = 'zoom-in';

      // Clic en compu o toque con el dedo en celular: abre la tarjeta en grande
      card.addEventListener('click', function(e) {
        e.preventDefault();
        var img = card.querySelector('img');
        if (img) {
          openZoom(img.currentSrc || img.src, img.alt);
        }
      });

      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var img = card.querySelector('img');
          if (img) openZoom(img.currentSrc || img.src, img.alt);
        }
      });
    });

    // 2. Separadores 2022+ (Estudiando, Creando, Pensando)
    var separadores = document.querySelectorAll('.cca-separador-item');
    separadores.forEach(function(sep) {
      sep.style.cursor = 'zoom-in';

      sep.addEventListener('click', function(e) {
        e.preventDefault();
        var img = sep.querySelector('img');
        if (img) {
          openZoom(img.currentSrc || img.src, img.alt);
        }
      });

      sep.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var img = sep.querySelector('img');
          if (img) openZoom(img.currentSrc || img.src, img.alt);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindCards);
  } else {
    bindCards();
  }

  window.ccaZoomCard = {
    open: openZoom,
    close: closeZoom
  };
})();
