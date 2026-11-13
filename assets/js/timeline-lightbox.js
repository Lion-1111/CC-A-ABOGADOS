/**
 * CC&A Corporativo Legal — Visor Histórico Interactivo de Trayectoria
 * Permite explorar los 27 años de historia con zoom de alta resolución,
 * paneo interactivo, transcripción completa de documentos originales
 * y navegación fluida entre hitos (1999 - 2022+).
 */
(function() {
  'use strict';

  // Registro histórico detallado de los hitos y documentos de la firma
  var MILESTONES = [
    {
      id: '1999',
      year: '1999',
      badge: '1999 • ORIGEN FUNDACIONAL',
      title: 'Bufete Jurídico Constantino Castro y Asociados',
      subtitle: 'Tarjeta de presentación fundacional original',
      image: './assets/img/2.svg',
      imageAlt: '1999 — Inicia el sueño: Bufete Jurídico Constantino Castro y Asociados',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Firma Original:</strong> Bufete Jurídico Constantino Castro y Asociados</div>' +
        '<div class="cca-tl-field"><strong>Titular Fundadora:</strong> Lic. Miriam Karina Constantino Castro</div>' +
        '<div class="cca-tl-field"><strong>Sede Fundacional:</strong> Av. Central No. 21, Villas San Lorenzo, Chimalhuacán, Estado de México</div>' +
        '<div class="cca-tl-field"><strong>Contacto Histórico:</strong> Tel. 5851-0448 • Cel. 04455-2184-5379 • karycons@yahoo.com</div>' +
        '<div class="cca-tl-field"><strong>Emblema:</strong> Balanza clásica de la justicia con tipografía tradicional de los primeros despachos jurídicos del Valle de México.</div>',
      context: 'En 1999 nace la visión de un ejercicio del derecho cercano, humano y profundamente comprometido con la justicia social y empresarial. Desde este primer despacho en Chimalhuacán se forjaron los principios de lealtad, ética y rigor que distinguen hoy a CC&A Abogados tras 27 años de trayectoria ininterrumpida.'
    },
    {
      id: '2006',
      year: '2006',
      badge: '2006 • CONSOLIDACIÓN INSTITUCIONAL',
      title: 'Corporativo Jurídico Constantino y Asociados',
      subtitle: 'Hoja membretada oficial con materias de práctica y balanza de la justicia',
      image: './assets/img/1.svg',
      imageAlt: '2006 — Estamos creando: Corporativo Jurídico Constantino y Asociados',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Razón Social:</strong> Corporativo Jurídico Constantino y Asociados</div>' +
        '<div class="cca-tl-field"><strong>Lema Institucional:</strong> <em>"Para la Defensa de su Empresa, Asunto Laboral o Asuntos Personales"</em></div>' +
        '<div class="cca-tl-field"><strong>10 Materias de Especialidad Oficial:</strong>' +
        '  <ul class="cca-tl-specialties-list">' +
        '    <li>• Civil</li><li>• Familiar</li><li>• Penal</li><li>• Laboral</li>' +
        '    <li>• Administrativo</li><li>• Fiscal</li><li>• Aduanero</li>' +
        '    <li>• Corporativo</li><li>• Mercantil</li><li>• Juicio de Amparo</li>' +
        '  </ul>' +
        '</div>' +
        '<div class="cca-tl-field"><strong>Dirección General:</strong> Lic. Miriam Karina Constantino Castro</div>' +
        '<div class="cca-tl-field"><strong>Sede:</strong> Av. Central No. 21, Chimalhuacán, Estado de México • Tels. 5851-0448 / 2632-1596</div>',
      context: 'Consolidación de la firma como Corporativo Jurídico multidisciplinario. Se amplió el equipo de abogados asociados y se integró la atención a medianas y grandes empresas, con especialización en derecho corporativo, amparo constitucional y defensa fiscal.'
    },
    {
      id: '2018-tarjeta',
      year: '2018',
      badge: '2018 • IDENTIDAD CORPORATIVA',
      title: 'CC&A Corporativo Legal — Nueva Imagen Institucional',
      subtitle: 'Tarjeta ejecutiva con el imagotipo oficial CC&A',
      image: './assets/img/3.svg',
      imageAlt: '2018 — Tarjeta de identidad corporativa CC&A Abogados',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Identidad:</strong> CC&A Corporativo Legal • Abogados</div>' +
        '<div class="cca-tl-field"><strong>Imagotipo:</strong> Monograma moderno en plata pulida con las letras CC entrelazadas</div>' +
        '<div class="cca-tl-field"><strong>Liderazgo:</strong> Dra. Miriam Karina Constantino Castro — Socia Fundadora y Directora General</div>' +
        '<div class="cca-tl-field"><strong>Enfoque Estratégico:</strong> Asesoría corporativa integral, blindaje patrimonial, consultoría inmobiliaria y litigio de alto impacto.</div>',
      context: 'Evolución de marca hacia CC&A Corporativo Legal, adaptando la presencia de la firma a los estándares más exigentes del sector empresarial y financiero del país, con nueva sede ejecutiva y proyección nacional.'
    },
    {
      id: '2018-servicios',
      year: '2018',
      badge: '2018 • PORTAFOLIO DE SERVICIOS',
      title: 'CC&A — Portafolio y Especialidades Jurídicas',
      subtitle: 'Brochure institucional con compendio de servicios especializados',
      image: './assets/img/4.svg',
      imageAlt: '2018 — Servicios integrales CC&A Corporativo Legal',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Lema Institucional:</strong> <em>"Enfocados a servirte"</em></div>' +
        '<div class="cca-tl-field"><strong>Ejes de Práctica Principal:</strong>' +
        '  <ul class="cca-tl-specialties-list">' +
        '    <li>• Derecho Corporativo y Gobierno de la Empresa</li>' +
        '    <li>• Derecho Inmobiliario, Regularización y Fideicomisos</li>' +
        '    <li>• Derecho Constitucional y Juicio de Amparo</li>' +
        '    <li>• Derecho Ambiental, Sustentabilidad y Cumplimiento</li>' +
        '    <li>• Prevención de Controversias y Blindaje Patrimonial</li>' +
        '  </ul>' +
        '</div>' +
        '<div class="cca-tl-field"><strong>Alianzas:</strong> Presencia activa en organismos gremiales y empresariales de alcance nacional.</div>',
      context: 'Presentación formal del portafolio integral de soluciones jurídicas preventivas y contenciosas, consolidando a CC&A como aliado de confianza para inversionistas, desarrolladores inmobiliarios y corporativos.'
    },
    {
      id: '2022-estudiando',
      year: '2022+',
      badge: '2022+ • PILAR I: ESTUDIANDO',
      title: 'Pilar I: Estudiando — Excelencia Académica y Rigor',
      subtitle: 'Separador de libro conmemorativo institucional',
      image: './assets/img/banners/Separador_1.jpg',
      imageAlt: 'Separador institucional conmemorativo: Estudiando',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Concepto Fundamental:</strong> <em>ESTUDIANDO</em></div>' +
        '<div class="cca-tl-field"><strong>Motivo Gráfico:</strong> Logotipo oficial CC&A sobre fondo antracita con orquídeas blancas y motivos botánicos de sabiduría.</div>' +
        '<div class="cca-tl-field"><strong>Máxima Deontológica:</strong> <em>"El derecho se transforma constantemente; si no sigues sus pasos, serás cada día un poco menos abogado."</em></div>' +
        '<div class="cca-tl-field"><strong>Práctica Real:</strong> Formación doctoral continua de la fundadora, posgrados del equipo jurídico, actualización jurisprudencial diaria y cátedra universitaria.</div>',
      context: 'El primer pilar de la firma consagra el estudio riguroso como deber ineludible. En CC&A cada caso se fundamenta en la vanguardia doctrinaria y constitucional más reciente de los tribunales nacionales e internacionales.'
    },
    {
      id: '2022-creando',
      year: '2022+',
      badge: '2022+ • PILAR II: CREANDO',
      title: 'Pilar II: Creando — Soluciones Estratégicas a Medida',
      subtitle: 'Separador de libro conmemorativo institucional',
      image: './assets/img/banners/Separador_2.jpg',
      imageAlt: 'Separador institucional conmemorativo: Creando',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Concepto Fundamental:</strong> <em>CREANDO</em></div>' +
        '<div class="cca-tl-field"><strong>Motivo Gráfico:</strong> Logotipo oficial CC&A sobre fondo blanco marfil con motivos florales de renovación e innovación.</div>' +
        '<div class="cca-tl-field"><strong>Filosofía de Trabajo:</strong> El derecho no es solo interpretación de la norma, sino diseño creativo de soluciones preventivas y acuerdos ganar-ganar.</div>' +
        '<div class="cca-tl-field"><strong>Aplicación:</strong> Estructuración de vehículos de inversión, gobierno corporativo preventivo y estrategias procesales personalizadas para cada cliente.</div>',
      context: 'Crear valor para nuestros representados significa transformar desafíos legales complejos en ventajas competitivas y seguridad jurídica duradera para sus familias y empresas.'
    },
    {
      id: '2022-pensando',
      year: '2022+',
      badge: '2022+ • PILAR III: PENSANDO',
      title: 'Pilar III: Pensando — "Vive Como Piensas"',
      subtitle: 'Separador de libro conmemorativo institucional',
      image: './assets/img/banners/Separador_3.jpg',
      imageAlt: 'Separador institucional conmemorativo: Pensando',
      transcriptHtml: 
        '<div class="cca-tl-field"><strong>Concepto Fundamental:</strong> <em>PENSANDO</em></div>' +
        '<div class="cca-tl-field"><strong>Motivo Gráfico:</strong> Logotipo oficial CC&A sobre fondo oscuro con follaje y flores doradas de nobleza y templanza.</div>' +
        '<div class="cca-tl-field"><strong>Lema Rector:</strong> <em>"Convicción por Servir — Vive como piensas, de lo contrario acabarás pensando como vives."</em></div>' +
        '<div class="cca-tl-field"><strong>Liderazgo y Trascendencia:</strong> Coordinación de la comisión de CILA Mujeres, presidencia fundadora de AMPI Valle de Anáhuac y participación activa en OMCA.</div>',
      context: 'Pensar con profundidad, perspectiva de género y conciencia social. La abogacía entendida no solo como ejercicio técnico, sino como vocación ética de servicio que incide positivamente en la sociedad mexicana e iberoamericana.'
    }
  ];

  var currentIndex = 0;
  var currentZoom = 1.0;
  var panX = 0;
  var panY = 0;
  var isPanning = false;
  var startX = 0;
  var startY = 0;

  var modal = null;
  var stageImg = null;
  var zoomLevelEl = null;
  var viewportEl = null;
  var curStepEl = null;
  var totalStepEl = null;
  var dotsContainer = null;
  var badgeEl = null;
  var titleEl = null;
  var subtitleEl = null;
  var transcriptEl = null;
  var contextEl = null;

  function createModal() {
    if (document.getElementById('ccaTimelineModal')) {
      return document.getElementById('ccaTimelineModal');
    }

    var modalHtml = 
      '<div id="ccaTimelineModal" class="cca-tl-modal" role="dialog" aria-modal="true" aria-label="Visor Histórico de Trayectoria">' +
      '  <div class="cca-tl-modal-backdrop"></div>' +
      '  <div class="cca-tl-modal-dialog">' +
      '    <button type="button" class="cca-tl-modal-close" aria-label="Cerrar visor">&times;</button>' +
      '    <div class="cca-tl-modal-topbar">' +
      '      <div class="cca-tl-modal-brand">' +
      '        <span class="cca-tl-brand-mark">CC&A</span>' +
      '        <span class="cca-tl-brand-sub">27 Años de Trayectoria • Archivo Histórico</span>' +
      '      </div>' +
      '      <div class="cca-tl-modal-counter">Hito <span id="ccaTlCurStep">1</span> de <span id="ccaTlTotalStep">7</span></div>' +
      '      <div class="cca-tl-modal-dots" id="ccaTlDots"></div>' +
      '    </div>' +
      '    <div class="cca-tl-modal-body">' +
      '      <div class="cca-tl-stage-wrapper">' +
      '        <div class="cca-tl-zoom-toolbar">' +
      '          <button type="button" class="cca-tl-btn-tool" id="ccaTlZoomOut" title="Reducir zoom (−)" aria-label="Reducir zoom">' +
      '            <i class="fas fa-minus"></i>' +
      '          </button>' +
      '          <span class="cca-tl-zoom-level" id="ccaTlZoomLevel">100%</span>' +
      '          <button type="button" class="cca-tl-btn-tool" id="ccaTlZoomIn" title="Aumentar zoom (+)" aria-label="Aumentar zoom">' +
      '            <i class="fas fa-plus"></i>' +
      '          </button>' +
      '          <button type="button" class="cca-tl-btn-tool" id="ccaTlZoomReset" title="Restablecer tamaño original (0)" aria-label="Restablecer tamaño">' +
      '            <i class="fas fa-sync-alt"></i>' +
      '          </button>' +
      '        </div>' +
      '        <div class="cca-tl-img-viewport" id="ccaTlViewport">' +
      '          <img class="cca-tl-stage-img" id="ccaTlStageImg" src="" alt="" draggable="false" />' +
      '        </div>' +
      '        <div class="cca-tl-drag-hint">' +
      '          <i class="fas fa-search-plus"></i> Clic para zoom rápido • Arrastra para explorar documento' +
      '        </div>' +
      '      </div>' +
      '      <div class="cca-tl-info-panel">' +
      '        <div class="cca-tl-badge-year" id="ccaTlBadge">1999 • ORIGEN</div>' +
      '        <h3 class="cca-tl-info-title" id="ccaTlTitle">Bufete Jurídico Constantino Castro y Asociados</h3>' +
      '        <p class="cca-tl-info-subtitle" id="ccaTlSubtitle">Tarjeta de presentación fundacional original</p>' +
      '        <div class="cca-tl-divider"></div>' +
      '        <div class="cca-tl-transcript-box">' +
      '          <div class="cca-tl-transcript-header">' +
      '            <span class="cca-tl-transcript-icon"><i class="fas fa-scroll"></i></span>' +
      '            <span class="cca-tl-transcript-title">Lectura y Transcripción del Documento</span>' +
      '          </div>' +
      '          <div class="cca-tl-transcript-content" id="ccaTlTranscript"></div>' +
      '        </div>' +
      '        <div class="cca-tl-context-box">' +
      '          <div class="cca-tl-context-header">' +
      '            <span class="cca-tl-context-icon"><i class="fas fa-landmark"></i></span>' +
      '            <span class="cca-tl-context-title">Contexto Histórico Institucional</span>' +
      '          </div>' +
      '          <p class="cca-tl-context-text" id="ccaTlContext"></p>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="cca-tl-modal-nav">' +
      '      <button type="button" class="cca-tl-nav-btn prev" id="ccaTlPrevBtn">' +
      '        <i class="fas fa-arrow-left"></i> Anterior' +
      '      </button>' +
      '      <div class="cca-tl-nav-hint">' +
      '        <span class="d-none d-md-inline">Navega con flechas <strong>&larr; &rarr;</strong> del teclado • Cierra con <strong>Esc</strong></span>' +
      '        <span class="d-inline d-md-none">Desliza o usa los botones</span>' +
      '      </div>' +
      '      <button type="button" class="cca-tl-nav-btn next" id="ccaTlNextBtn">' +
      '        Siguiente <i class="fas fa-arrow-right"></i>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    var container = document.createElement('div');
    container.innerHTML = modalHtml;
    document.body.appendChild(container.firstElementChild);

    modal = document.getElementById('ccaTimelineModal');
    stageImg = document.getElementById('ccaTlStageImg');
    zoomLevelEl = document.getElementById('ccaTlZoomLevel');
    viewportEl = document.getElementById('ccaTlViewport');
    curStepEl = document.getElementById('ccaTlCurStep');
    totalStepEl = document.getElementById('ccaTlTotalStep');
    dotsContainer = document.getElementById('ccaTlDots');
    badgeEl = document.getElementById('ccaTlBadge');
    titleEl = document.getElementById('ccaTlTitle');
    subtitleEl = document.getElementById('ccaTlSubtitle');
    transcriptEl = document.getElementById('ccaTlTranscript');
    contextEl = document.getElementById('ccaTlContext');

    totalStepEl.textContent = MILESTONES.length;

    // Generar dots
    dotsContainer.innerHTML = '';
    MILESTONES.forEach(function(m, idx) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'cca-tl-dot-btn';
      dot.setAttribute('aria-label', 'Ir a ' + m.year + ' - ' + m.title);
      dot.setAttribute('title', m.year + ' — ' + m.title);
      dot.addEventListener('click', function() {
        goToMilestone(idx);
      });
      dotsContainer.appendChild(dot);
    });

    // Eventos de controles
    var closeBtn = modal.querySelector('.cca-tl-modal-close');
    var backdrop = modal.querySelector('.cca-tl-modal-backdrop');
    var prevBtn = document.getElementById('ccaTlPrevBtn');
    var nextBtn = document.getElementById('ccaTlNextBtn');
    var zoomInBtn = document.getElementById('ccaTlZoomIn');
    var zoomOutBtn = document.getElementById('ccaTlZoomOut');
    var zoomResetBtn = document.getElementById('ccaTlZoomReset');

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    prevBtn.addEventListener('click', function() {
      goToMilestone(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
      goToMilestone(currentIndex + 1);
    });

    zoomInBtn.addEventListener('click', function() {
      setZoom(currentZoom + 0.35);
    });

    zoomOutBtn.addEventListener('click', function() {
      setZoom(currentZoom - 0.35);
    });

    zoomResetBtn.addEventListener('click', function() {
      resetZoom();
    });

    // Clic en la imagen para toggle de zoom 1x <-> 2x
    stageImg.addEventListener('click', function(e) {
      if (isPanning) return;
      if (currentZoom > 1.1) {
        resetZoom();
      } else {
        setZoom(2.0);
      }
    });

    // Paneo con mouse (arrastrar cuando hay zoom)
    viewportEl.addEventListener('mousedown', function(e) {
      if (currentZoom <= 1.05) return;
      isPanning = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      viewportEl.classList.add('is-dragging');
      e.preventDefault();
    });

    window.addEventListener('mousemove', function(e) {
      if (!isPanning) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      applyTransform();
    });

    window.addEventListener('mouseup', function() {
      if (isPanning) {
        isPanning = false;
        viewportEl.classList.remove('is-dragging');
      }
    });

    // Soporte táctil básico
    var touchStartX = 0;
    var touchStartY = 0;
    viewportEl.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1 && currentZoom > 1.05) {
        isPanning = true;
        touchStartX = e.touches[0].clientX - panX;
        touchStartY = e.touches[0].clientY - panY;
      }
    }, { passive: true });

    viewportEl.addEventListener('touchmove', function(e) {
      if (isPanning && e.touches.length === 1) {
        panX = e.touches[0].clientX - touchStartX;
        panY = e.touches[0].clientY - touchStartY;
        applyTransform();
      }
    }, { passive: true });

    viewportEl.addEventListener('touchend', function() {
      isPanning = false;
    });

    // Teclado
    document.addEventListener('keydown', function(e) {
      if (!modal || !modal.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        goToMilestone(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToMilestone(currentIndex + 1);
      } else if (e.key === '+' || e.key === '=') {
        setZoom(currentZoom + 0.35);
      } else if (e.key === '-' || e.key === '_') {
        setZoom(currentZoom - 0.35);
      } else if (e.key === '0') {
        resetZoom();
      }
    });

    return modal;
  }

  function applyTransform() {
    if (!stageImg) return;
    stageImg.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + currentZoom + ')';
    if (zoomLevelEl) {
      zoomLevelEl.textContent = Math.round(currentZoom * 100) + '%';
    }
    if (currentZoom > 1.05) {
      viewportEl.classList.add('has-zoom');
    } else {
      viewportEl.classList.remove('has-zoom');
    }
  }

  function setZoom(val) {
    currentZoom = Math.min(Math.max(val, 1.0), 3.0);
    if (currentZoom === 1.0) {
      panX = 0;
      panY = 0;
    }
    applyTransform();
  }

  function resetZoom() {
    currentZoom = 1.0;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  function goToMilestone(index) {
    if (!MILESTONES.length) return;
    if (index < 0) index = MILESTONES.length - 1;
    if (index >= MILESTONES.length) index = 0;
    currentIndex = index;

    var m = MILESTONES[currentIndex];
    resetZoom();

    stageImg.src = m.image;
    stageImg.alt = m.imageAlt;
    badgeEl.textContent = m.badge;
    titleEl.textContent = m.title;
    subtitleEl.textContent = m.subtitle;
    transcriptEl.innerHTML = m.transcriptHtml;
    contextEl.textContent = m.context;

    curStepEl.textContent = currentIndex + 1;

    // Actualizar dots
    var dots = dotsContainer.querySelectorAll('.cca-tl-dot-btn');
    dots.forEach(function(dot, idx) {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function openModal(milestoneIndexOrSrc) {
    createModal();

    var targetIndex = 0;
    if (typeof milestoneIndexOrSrc === 'number') {
      targetIndex = milestoneIndexOrSrc;
    } else if (typeof milestoneIndexOrSrc === 'string') {
      var found = -1;
      for (var i = 0; i < MILESTONES.length; i++) {
        if (MILESTONES[i].image.indexOf(milestoneIndexOrSrc) !== -1 ||
            milestoneIndexOrSrc.indexOf(MILESTONES[i].id) !== -1 ||
            (milestoneIndexOrSrc.indexOf('2.svg') !== -1 && i === 0) ||
            (milestoneIndexOrSrc.indexOf('1.svg') !== -1 && i === 1) ||
            (milestoneIndexOrSrc.indexOf('3.svg') !== -1 && i === 2) ||
            (milestoneIndexOrSrc.indexOf('4.svg') !== -1 && i === 3) ||
            (milestoneIndexOrSrc.indexOf('Separador_1') !== -1 && i === 4) ||
            (milestoneIndexOrSrc.indexOf('Separador_2') !== -1 && i === 5) ||
            (milestoneIndexOrSrc.indexOf('Separador_3') !== -1 && i === 6)) {
          found = i;
          break;
        }
      }
      targetIndex = found >= 0 ? found : 0;
    }

    goToMilestone(targetIndex);
    modal.classList.add('active');
    document.body.classList.add('cca-modal-open');
    modal.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('cca-modal-open');
    resetZoom();
  }

  // Enlazar triggers en la página
  function bindTriggers() {
    // 1. Elementos con data-milestone explícito
    var explicitTriggers = document.querySelectorAll('[data-milestone]');
    explicitTriggers.forEach(function(el) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function(e) {
        e.preventDefault();
        var idx = parseInt(this.getAttribute('data-milestone'), 10);
        openModal(isNaN(idx) ? 0 : idx);
      });
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var idx = parseInt(this.getAttribute('data-milestone'), 10);
          openModal(isNaN(idx) ? 0 : idx);
        }
      });
    });

    // 2. Fallback: Cualquier imagen de historia que no esté dentro de un data-milestone
    var legacyImages = document.querySelectorAll(
      'img[src*="1.svg"], img[src*="2.svg"], img[src*="3.svg"], img[src*="4.svg"], ' +
      'img[src*="Separador_1"], img[src*="Separador_2"], img[src*="Separador_3"]'
    );

    legacyImages.forEach(function(img) {
      if (img.closest('[data-milestone]')) return; // Ya enlazado por el contenedor padre

      img.style.cursor = 'zoom-in';
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Ampliar imagen: ' + (img.alt || 'Documento histórico'));
      
      img.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(this.getAttribute('src') || '');
      });
      img.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(this.getAttribute('src') || '');
        }
      });
    });
  }

  // Inicialización
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindTriggers);
  } else {
    bindTriggers();
  }

  // Exportar API global para invocación programática si se requiere
  window.ccaTimelineViewer = {
    open: openModal,
    close: closeModal,
    goTo: goToMilestone
  };
})();
