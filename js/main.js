/**
 * main.js — progressive-enhancement layer.
 * Nothing here is required for the page's core content or navigation to
 * work: every link is a real <a href="#...">, and the form still submits
 * (to nowhere, since there's no backend — see the HTML comment) if JS
 * fails to load. This file only adds motion and UX polish on top.
 */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
   * 1. Footer year
   * ------------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
   * 2. Theme toggle (persisted to localStorage, respects system default
   *    until the user makes an explicit choice)
   * ------------------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  };

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme) applyTheme(storedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------------------------------------------------------------------
   * 3. Mobile nav toggle
   * ------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------------------------------------------------------------
   * 4. Certificate modal
   * ------------------------------------------------------------------- */
  const certButtons = document.querySelectorAll('[data-cert-modal-open]');
  const certModal = document.getElementById('certificateModal');
  const certCloseTriggers = document.querySelectorAll('[data-cert-modal-close]');
  const certTitle = document.getElementById('certificateTitle');
  const certImage = certModal?.querySelector('.certificate-modal__image');

  const openCertificateModal = (title, image) => {
    if (certTitle) certTitle.textContent = title || 'Certificate';
    if (certImage) {
      certImage.src = image || 'assets/certificate.svg';
      certImage.alt = `${title || 'Certificate'} preview`;
    }
    certModal?.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    certModal?.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  certButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openCertificateModal(button.dataset.certTitle, button.dataset.certImage);
    });
  });
  certCloseTriggers.forEach((trigger) => trigger.addEventListener('click', closeCertificateModal));

  certModal?.addEventListener('click', (event) => {
    if (event.target === certModal) closeCertificateModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && certModal && !certModal.hasAttribute('hidden')) {
      closeCertificateModal();
    }
  });

  /* ---------------------------------------------------------------------
   * 5. Scroll-triggered reveals — IntersectionObserver instead of a
   *    scroll listener so we don't run layout work on every scroll frame;
   *    the browser only notifies us when an element actually crosses the
   *    viewport threshold.
   * ------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for very old browsers: just show everything.
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------------------------------------------------------------------
   * 5. Scroll spine — progress fill + active-section marker.
   *    Uses the same IntersectionObserver pattern (via a second observer
   *    tuned to section boundaries) rather than recalculating scroll
   *    position on every scroll event.
   * ------------------------------------------------------------------- */
  const spineFill = document.querySelector('[data-spine-fill]');
  const spineNodes = document.querySelectorAll('[data-spine-node]');
  const sections = ['hero', 'education', 'skills', 'work', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveNode = (id) => {
    spineNodes.forEach((node) => {
      const match = node.getAttribute('href') === `#${id}`;
      node.classList.toggle('is-active', match);
    });
  };

  if (sections.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNode(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // The fill height is a simple ratio, cheap enough to run on scroll
  // directly (single style write, no layout thrashing) but throttled
  // via requestAnimationFrame to stay off the main thread's critical path.
  let ticking = false;
  const updateSpineFill = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (spineFill) spineFill.style.height = `${Math.min(progress * 100, 100)}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateSpineFill);
      ticking = true;
    }
  }, { passive: true });
  updateSpineFill();

  /* ---------------------------------------------------------------------
   * 6. Front-end form validation (no backend — see HTML comment near the
   *    <form>). Wire this to a real endpoint before shipping.
   * ------------------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach((field) => {
      const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
      const isEmpty = !field.value.trim();
      const isBadEmail = field.type === 'email' && field.value && !/^\S+@\S+\.\S+$/.test(field.value);

      if (isEmpty || isBadEmail) {
        valid = false;
        if (errorEl) errorEl.textContent = isEmpty ? 'This field is required.' : 'Enter a valid email address.';
        field.setAttribute('aria-invalid', 'true');
      } else {
        if (errorEl) errorEl.textContent = '';
        field.removeAttribute('aria-invalid');
      }
    });

    if (status) {
      status.textContent = valid
        ? 'Message ready to send — connect this form to a backend to deliver it.'
        : 'Please fix the highlighted fields.';
    }

    if (valid) form.reset();
  });
})();
