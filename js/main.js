'use strict';

// Navegación adaptable accesible: estado anunciado, cierre con Escape y al elegir un enlace.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#navegacion-principal');
const mobileBreakpoint = window.matchMedia('(min-width: 48rem)');

function setMenuOpen(isOpen) {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  mainNav.classList.toggle('is-open', isOpen);
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileBreakpoint.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

// Filtro de programa con botones, aria-pressed y resumen anunciado por lectores de pantalla.
const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const programCards = Array.from(document.querySelectorAll('.program-card[data-category]'));
const filterStatus = document.querySelector('#filter-status');

function applyProgramFilter(category) {
  let visibleCount = 0;
  programCards.forEach((card) => {
    const shouldShow = category === 'todos' || card.dataset.category === category;
    card.hidden = !shouldShow;
    if (shouldShow) visibleCount += 1;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (filterStatus) {
    const noun = visibleCount === 1 ? 'actividad' : 'actividades';
    filterStatus.textContent = `Se muestran ${visibleCount} ${noun}.`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => applyProgramFilter(button.dataset.filter));
});

// Validación comprensible y accesible; el formulario es una demostración local sin backend.
const signupForm = document.querySelector('#signup-form');
const formStatus = document.querySelector('#form-status');
const fields = [
  { input: document.querySelector('#nombre'), error: document.querySelector('#nombre-error'), message: 'Escribe tu nombre (al menos 2 caracteres).' },
  { input: document.querySelector('#correo'), error: document.querySelector('#correo-error'), message: 'Introduce un correo electrónico válido.' },
  { input: document.querySelector('#interes'), error: document.querySelector('#interes-error'), message: 'Selecciona el tema que te interesa.' },
  { input: document.querySelector('#consentimiento'), error: document.querySelector('#consentimiento-error'), message: 'Confirma que comprendes el propósito de esta demostración.' }
];

function validateField(field) {
  if (!field.input || !field.error) return true;
  const isValid = field.input.checkValidity();
  field.input.setAttribute('aria-invalid', String(!isValid));
  field.error.textContent = isValid ? '' : (field.input.validity.valueMissing || field.input.validity.tooShort || field.input.validity.typeMismatch ? field.message : 'Revisa este campo.');
  return isValid;
}

fields.forEach((field) => {
  if (!field.input) return;
  const eventName = field.input.type === 'checkbox' || field.input.tagName === 'SELECT' ? 'change' : 'input';
  field.input.addEventListener(eventName, () => {
    validateField(field);
    if (formStatus && formStatus.classList.contains('is-error')) {
      formStatus.textContent = '';
      formStatus.classList.remove('is-error');
    }
  });
});

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const results = fields.map(validateField);
    const firstInvalid = fields.find((field, index) => !results[index]);

    if (firstInvalid) {
      if (formStatus) {
        formStatus.textContent = 'Hay campos por revisar. Corrige los indicados y vuelve a intentarlo.';
        formStatus.classList.add('is-error');
        formStatus.focus();
      }
      firstInvalid.input.focus();
      return;
    }

    if (formStatus) {
      formStatus.classList.remove('is-error');
      formStatus.textContent = 'Formulario validado correctamente. Esta demostración no envía ni almacena tus datos.';
      formStatus.focus();
    }
  });
}
