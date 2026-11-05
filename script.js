(() => {
  /* =========================
     Language toggle
     ========================= */
  const langToggle = document.getElementById('langToggle');
  let lang = localStorage.getItem('stampby-lang') || 'he';

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-he][data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });

    if (langToggle) {
      langToggle.textContent = lang === 'he' ? 'EN' : 'עב';
      langToggle.setAttribute('aria-label', lang === 'he' ? 'Switch to English' : 'החלף לעברית');
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      lang = lang === 'he' ? 'en' : 'he';
      localStorage.setItem('stampby-lang', lang);
      applyLanguage();
    });
    applyLanguage();
  }

  /* =========================
     Mobile menu (landing page)
     ========================= */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  function openMenu() {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.hidden = false;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    menuToggle.classList.add('is-open');
    document.body.classList.add('menu-open');
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        if (menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) closeMenu();
    });
  }

  /* =========================
     Reveal on load (card page)
     ========================= */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
      revealEls.forEach((el) => {
        const delay = parseInt(el.dataset.revealDelay || '0', 10);
        setTimeout(() => el.classList.add('is-visible'), 80 + delay * 90);
      });
    }
  }
})();