/**
 * PAGUREO — LÓGICA DE LANDING PAGE DE PRODUCTO ÚNICO
 * Sofá Multiconfort: Trabajo Remoto, Descanso y Amigos
 * Embudo de Conversión Directo a WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuración Global de WhatsApp
  const WHATSAPP_PHONE = '573212815741'; // Número oficial comercial Pagureo (+57 321 281 5741)
  const WHATSAPP_DEFAULT_MSG = encodeURIComponent(
    'Hola Pagureo, estuve viendo el Sofá Multiconfort en su página web y quiero este sofá. Deseo recibir asesoría para mi compra.'
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_DEFAULT_MSG}`;

  // Sincronizar todos los enlaces y botones de WhatsApp
  const whatsappButtons = document.querySelectorAll('a[href="#whatsapp"], [data-whatsapp-cta]');
  whatsappButtons.forEach(btn => {
    btn.setAttribute('href', WHATSAPP_URL);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  /* ==========================================================================
     1. BARRA MÓVIL DE CONVERSIÓN FLOTANTE (ON SCROLL)
     ========================================================================== */
  const stickyMobileBar = document.getElementById('stickyMobileBar');
  const heroSection = document.getElementById('inicio');

  if (stickyMobileBar && heroSection) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 180;
      if (scrollY > heroBottom) {
        stickyMobileBar.classList.add('visible');
      } else {
        stickyMobileBar.classList.remove('visible');
      }
    });
  }

  /* ==========================================================================
     2. ACORDEÓN PREGUNTAS FRECUENTES (FAQ)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Cerrar otros acordeones
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) {
            otherContent.style.maxHeight = null;
          }
        }
      });

      // Toggle actual
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Abrir la primera pregunta por defecto
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    firstItem.classList.add('active');
    const firstContent = firstItem.querySelector('.faq-content');
    if (firstContent) {
      firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
  }
});
