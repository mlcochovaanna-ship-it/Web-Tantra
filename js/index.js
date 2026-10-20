const hdr = document.getElementById('hdr');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const setHeaderH = () => {
  document.documentElement.style.setProperty('--header-h', Math.ceil(hdr.getBoundingClientRect().bottom) + 'px');
};
setHeaderH();
window.addEventListener('resize', setHeaderH, { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setHeaderH);
}

const hbtn = document.getElementById('hamburger');
const mob = document.getElementById('nav-mob');

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
document.querySelector('.hero-scroll').addEventListener('click', () => document.getElementById('obsah').scrollIntoView({ behavior: 'smooth' }));

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
}, { threshold: .1 });
rv.forEach(el => io.observe(el));

// ── LIGHTBOX ──────────────────────────────────
const lb = document.getElementById('lb');
const lbImg = document.getElementById('lb-img');
const lbCounter = document.getElementById('lb-counter');
const galleryItems = [...document.querySelectorAll('.gallery-fw .g-item')];
const imgs = galleryItems.map(el => ({ src: el.querySelector('img').src, alt: el.querySelector('img').alt }));
let current = 0;

function lbShow(i) {
  current = Math.max(0, Math.min(i, imgs.length - 1));
  lbImg.src = imgs[current].src;
  lbImg.alt = imgs[current].alt;
  lbCounter.textContent = `${current + 1} / ${imgs.length}`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('lb-prev').classList.toggle('lb-hidden', current === 0);
  document.getElementById('lb-next').classList.toggle('lb-hidden', current === imgs.length - 1);
}

function lbClose() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

galleryItems.forEach((el, i) => el.addEventListener('click', () => lbShow(i)));
document.getElementById('lb-prev').addEventListener('click', e => { e.stopPropagation(); lbShow(current - 1); });
document.getElementById('lb-next').addEventListener('click', e => { e.stopPropagation(); lbShow(current + 1); });
document.getElementById('lb-close').addEventListener('click', lbClose);
lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') lbShow(current - 1);
  if (e.key === 'ArrowRight') lbShow(current + 1);
  if (e.key === 'Escape') lbClose();
});
