/* ── POP-UP OZNÁMENÍ ─────────────────────────────
   Obsah a nastavení se mění jen tady, v objektu POPUP.
   Zobrazí se jednou za návštěvu (sessionStorage – smaže se
   zavřením prohlížeče, nic se neposílá na server).
   ──────────────────────────────────────────────── */
var POPUP = {
  aktivni: true,              // false = pop-up se nezobrazí nikde
  // Časy jsou v českém čase. Formát 'RRRR-MM-DDTHH:MM:00+01:00'
  // (+01:00 = zimní čas, +02:00 = letní čas). Prázdné = bez omezení.
  od: '',                              // od kdy se má zobrazovat
  do: '2026-12-11T17:00:00+01:00',     // do kdy (začátek akce) – potom se sám vypne
  zpozdeni: 3,                // za kolik sekund se objeví

  foto: 'Obrazky/modul-2/modul-2-13.webp',
  fotoPozice: '50% 20%',      // výřez fotky (object-position)
  uvod: 'Přijď na ochutnávku',
  nadpis: 'Mysterijní školy ženství',
  text: 'Prožij atmosféru Školy, nahlédni do jejího obsahu, poznej způsob vedení a nech se inspirovat na své ženské cestě.',
  datum: '11. prosince',
  tlacitko: 'Přihlásit se na ochutnávku',
  odkaz: 'https://www.martinavyborna.cz/ochutnavka-skoly/'
};

(function () {
  var KLIC = 'popup-videno';

  // je teď v povoleném čase? (porovnává absolutní čas – nezávisí na časovém pásmu návštěvnice)
  function vTerminu() {
    var ted = Date.now();
    if (POPUP.od && ted < new Date(POPUP.od).getTime()) return false;
    if (POPUP.do && ted >= new Date(POPUP.do).getTime()) return false;
    return true;
  }

  function uzVideno() {
    try { return sessionStorage.getItem(KLIC) === '1'; } catch (e) { return false; }
  }

  function oznacitVideno() {
    try { sessionStorage.setItem(KLIC, '1'); } catch (e) { /* bez úložiště se pop-up jen zobrazí znovu */ }
  }

  // náhled: adresa s ?popup (např. index.html?popup) zobrazí pop-up vždy, hned a bez ohledu na datum
  var nahled = /[?&]popup\b/.test(location.search);
  if (nahled) {
    POPUP.zpozdeni = 0.5;
    vTerminu = function () { return true; };
    uzVideno = function () { return false; };
  }

  if (!POPUP.aktivni && !nahled) return;
  if (!vTerminu()) return;
  if (uzVideno()) return;
  if (typeof HTMLDialogElement === 'undefined') return;

  var SVG_KALENDAR =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>' +
      '<path d="M7 14h.01M10.5 14h.01M14 14h.01M17 14h.01M7 17.5h.01M10.5 17.5h.01M14 17.5h.01" class="dots"/>' +
    '</svg>';

  function vytvorit() {
    var dlg = document.createElement('dialog');
    dlg.className = 'popup';
    dlg.setAttribute('aria-labelledby', 'popup-nadpis');
    dlg.setAttribute('aria-describedby', 'popup-text');

    dlg.innerHTML =
      '<div class="popup-card">' +
        '<div class="popup-foto"><img alt="" loading="lazy"></div>' +
        '<div class="popup-obsah">' +
          '<div class="popup-ornament popup-ornament--jantra">' +
            '<img src="Obrazky/logo-zenska-mystika.webp" alt="">' +
          '</div>' +
          '<h2 class="popup-h" id="popup-nadpis">' +
            '<span class="popup-uvod"></span>' +
            '<span class="popup-nadpis"></span>' +
          '</h2>' +
          '<div class="popup-ornament popup-ornament--lotos">' +
            '<img src="Obrazky/grafika/kvetina-lotos.webp" alt="">' +
          '</div>' +
          '<p class="popup-text" id="popup-text"></p>' +
          '<p class="popup-datum">' + SVG_KALENDAR + '<span></span></p>' +
          '<a class="btn btn-gold popup-btn" target="_blank" rel="noopener"><span></span>' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>' +
          '</a>' +
        '</div>' +
        '<img class="fili-corner popup-fili popup-fili-lh" src="Obrazky/grafika/filigran/filigran-corner-lh.webp" alt="">' +
        '<img class="fili-corner popup-fili popup-fili-pd" src="Obrazky/grafika/filigran/filigran-corner-pd.webp" alt="">' +
        '<button type="button" class="popup-close" aria-label="Zavřít oznámení">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>' +
        '</button>' +
      '</div>';

    // texty přes textContent – žádné riziko vložení HTML
    var foto = dlg.querySelector('.popup-foto img');
    foto.src = POPUP.foto;
    foto.style.objectPosition = POPUP.fotoPozice;
    dlg.querySelector('.popup-uvod').textContent = POPUP.uvod;
    dlg.querySelector('.popup-nadpis').textContent = POPUP.nadpis;
    dlg.querySelector('.popup-text').textContent = POPUP.text;
    dlg.querySelector('.popup-datum span').textContent = POPUP.datum;
    var btn = dlg.querySelector('.popup-btn');
    btn.querySelector('span').textContent = POPUP.tlacitko;
    btn.href = POPUP.odkaz;
    btn.setAttribute('aria-label', POPUP.tlacitko + ' (otevře se v novém okně)');

    function zavrit() {
      if (!dlg.open) return;
      dlg.classList.add('popup--zaviram');
      setTimeout(function () { dlg.close(); dlg.remove(); }, 300);
    }

    dlg.querySelector('.popup-close').addEventListener('click', zavrit);
    btn.addEventListener('click', zavrit);
    // klik mimo kartu (na ztmavené pozadí) zavře
    dlg.addEventListener('click', function (e) { if (e.target === dlg) zavrit(); });
    // Esc – plynulé zavření místo okamžitého
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); zavrit(); });

    document.body.appendChild(dlg);
    return dlg;
  }

  function lzeZobrazit() {
    // neotvírat přes lightbox, otevřené menu, jiný dialog ani při vyplňování formuláře
    if (document.querySelector('.lb.open, dialog[open]')) return false;
    if (document.body.style.overflow === 'hidden') return false;
    var a = document.activeElement;
    if (a && a.closest && a.closest('form')) return false;
    return true;
  }

  function zkusitZobrazit() {
    if (uzVideno() || !vTerminu()) return;   // kontrola i těsně před zobrazením
    if (!lzeZobrazit()) { setTimeout(zkusitZobrazit, 5000); return; }
    var dlg = vytvorit();
    // fokus na dialog, ne na křížek – aby nebyl hned vidět focus rámeček
    var karta = dlg.querySelector('.popup-card');
    karta.setAttribute('tabindex', '-1');
    karta.setAttribute('autofocus', '');
    dlg.showModal();
    oznacitVideno();
  }

  setTimeout(zkusitZobrazit, POPUP.zpozdeni * 1000);
})();
