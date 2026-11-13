(function() {
  function initLightbox() {
    var images = document.querySelectorAll('.timeline-zoomable, img[src*="1.svg"], img[src*="2.svg"], img[src*="3.svg"], img[src*="4.svg"]');
    if (!images.length) return;

    var overlay = document.getElementById('timelineLightboxOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'timelineLightboxOverlay';
      overlay.className = 'timeline-lightbox-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Vista ampliada');
      overlay.tabIndex = -1;
      overlay.innerHTML = '<button type="button" class="timeline-lightbox-close" aria-label="Cerrar">&times;</button><img class="timeline-lightbox-img" src="" alt="Vista previa ampliada">';
      document.body.appendChild(overlay);
    }

    var imgEl = overlay.querySelector('.timeline-lightbox-img');
    var closeBtn = overlay.querySelector('.timeline-lightbox-close');

    function openLightbox(src, alt) {
      imgEl.src = src;
      imgEl.alt = alt || 'Imagen ampliada';
      overlay.classList.add('active');
      overlay.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      imgEl.src = '';
    }

    images.forEach(function(img) {
      img.classList.add('timeline-zoomable');
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Ampliar imagen: ' + (img.alt || ''));
      img.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(this.src, this.alt);
      });
      img.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(this.src, this.alt);
        }
      });
    });

    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeLightbox();
    });

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();

