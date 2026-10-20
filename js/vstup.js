/* ── Navigation ─────────────────────────────── */
const hdr = document.getElementById('hdr');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const hbtn = document.getElementById('hamburger');
const mob = document.getElementById('nav-mob');

const setHeaderH = () => {
  document.documentElement.style.setProperty('--header-h', Math.ceil(hdr.getBoundingClientRect().bottom) + 'px');
};
setHeaderH();
window.addEventListener('resize', setHeaderH, { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setHeaderH);
}

const closeMenu = () => {
  mob.classList.remove('open');
  hbtn.classList.remove('open');
  hbtn.setAttribute('aria-expanded', false);
};
window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', scrollY > 60);
  setHeaderH();
  scrollTopBtn.classList.toggle('visible', scrollY > 300);
  if (scrollY > 40 && !mob.classList.contains('open')) closeMenu();
}, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

hbtn.addEventListener('click', () => {
  const o = hbtn.classList.toggle('open');
  mob.classList.toggle('open', o);
  hbtn.setAttribute('aria-expanded', o);
});

const deskDrop = document.getElementById('nav-dropdown-desk');
const deskTrigger = document.querySelector('.nav-drop-trigger');
const deskLi = document.querySelector('.nav-has-dropdown');
if (deskDrop && deskTrigger && deskLi) {
  let deskCloseTimer;
  const openDeskDrop = () => {
    clearTimeout(deskCloseTimer);
    deskDrop.classList.add('open');
    deskLi.classList.add('nav-drop-active');
    const r = deskTrigger.getBoundingClientRect();
    const w = deskDrop.offsetWidth;
    deskDrop.style.top = Math.ceil(r.bottom + 24) + 'px';
    deskDrop.style.left = Math.max(0, Math.round(r.left + r.width / 2 - w / 2)) + 'px';
  };
  const closeDeskDrop = () => {
    deskCloseTimer = setTimeout(() => {
      deskDrop.classList.remove('open');
      deskLi.classList.remove('nav-drop-active');
    }, 120);
  };
  deskLi.addEventListener('mouseenter', openDeskDrop);
  deskLi.addEventListener('mouseleave', closeDeskDrop);
  deskDrop.addEventListener('mouseenter', () => clearTimeout(deskCloseTimer));
  deskDrop.addEventListener('mouseleave', closeDeskDrop);
}



/* ── Scroll reveal ──────────────────────────── */
const modulyToggle = document.getElementById('nav-moduly-toggle');
const modulySubmenu = document.getElementById('nav-submenu-moduly');
if (modulyToggle) {
  modulyToggle.addEventListener('click', () => {
    const o = modulyToggle.classList.toggle('open');
    modulySubmenu.classList.toggle('open', o);
    modulyToggle.setAttribute('aria-expanded', o);
  });
}

const rv = document.querySelectorAll('.rv');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .08 });
rv.forEach(el => io.observe(el));

/* ── Cookie ─────────────────────────────────── */

/* ── Formulář – validace + AJAX odeslání ────── */
const form = document.getElementById('vstup-form');
const formAlert = document.getElementById('form-alert');

function showErr(id) { const el = document.getElementById(id); if (el) el.classList.add('visible'); }
function hideErr(id) { const el = document.getElementById(id); if (el) el.classList.remove('visible'); }

function validateForm() {
  let firstError = null;
  const checks = [
    { errId: 'jmeno-error',   ok: () => form.querySelector('#f-jmeno').value.trim() !== '' },
    { errId: 'email-error',   ok: () => /\S+@\S+\.\S+/.test(form.querySelector('#f-email').value) },
    { errId: 'zprava-error',  ok: () => form.querySelector('#f-zprava').value.trim() !== '' },
  ];
  checks.forEach(({ errId, ok }) => {
    if (!ok()) { showErr(errId); if (!firstError) firstError = document.getElementById(errId); }
    else hideErr(errId);
  });
  const zamerOk = [...form.querySelectorAll('input[name="zamer"]')].some(r => r.checked);
  if (!zamerOk) { showErr('zamer-error'); if (!firstError) firstError = document.getElementById('zamer-error'); }
  else hideErr('zamer-error');
  return firstError;
}

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstError = validateForm();
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (formAlert) formAlert.textContent = 'Formulář je nekompletní. Prosím doplň označená pole.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        window.location.href = '/dekuji';
      } else {
        if (formAlert) formAlert.textContent = 'Odeslání se nezdařilo. Zkuste to prosím znovu.';
        if (submitBtn) submitBtn.disabled = false;
      }
    } catch {
      if (formAlert) formAlert.textContent = 'Chyba připojení. Zkuste to prosím znovu.';
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  form.addEventListener('input', function (e) {
    const map = { 'jmeno': 'jmeno-error', 'email': 'email-error', 'zprava': 'zprava-error' };
    if (map[e.target.name] && e.target.value.trim()) hideErr(map[e.target.name]);
  });
  form.addEventListener('change', function (e) {
    if (e.target.name === 'zamer') hideErr('zamer-error');
  });
}
