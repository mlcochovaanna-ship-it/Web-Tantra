/* ── Navigace ────────────────────────────────────── */
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




/* ── Posun na rozhovory ──────────────────────────── */
const rozhovoryToggle = document.getElementById('rozhovory-toggle');
rozhovoryToggle.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollBy({ top: 600, behavior: 'smooth' });
});

/* ── Scroll reveal ───────────────────────────────── */
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

/* ── Cookie ──────────────────────────────────────── */
