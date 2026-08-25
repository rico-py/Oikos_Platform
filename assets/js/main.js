// Menu mobile
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = mobileMenu.querySelectorAll('a');

function openMenu(){
  mobileMenu.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  menuLinks[0]?.focus();
}
function closeMenu(){
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});
menuLinks.forEach(a => a.addEventListener('click', closeMenu));

// Chiudi con Esc e intrappola il focus dentro il menu quando è aperto (WAI-ARIA disclosure pattern)
mobileMenu.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeMenu();
    burger.focus();
    return;
  }
  if(e.key !== 'Tab') return;
  const focusable = mobileMenu.querySelectorAll('a, button');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if(e.shiftKey && document.activeElement === first){
    e.preventDefault();
    last.focus();
  } else if(!e.shiftKey && document.activeElement === last){
    e.preventDefault();
    first.focus();
  }
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Orari: calcola stato aperto/chiuso in tempo reale
const orari = {
  0: {open: 12*60, close: 23*60},
  1: {open: 12*60, close: 23*60},
  2: {open: 12*60, close: 23*60},
  3: {open: 12*60, close: 23*60},
  4: {open: 12*60, close: 23*60},
  5: {open: 12*60, close: 24*60},
  6: {open: 12*60, close: 24*60},
};

function fmt(mins){
  mins = mins % (24*60);
  const h = Math.floor(mins/60).toString().padStart(2,'0');
  const m = (mins%60).toString().padStart(2,'0');
  return h+':'+m;
}

function updateStatus(){
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours()*60 + now.getMinutes();
  const today = orari[day];
  const card = document.getElementById('statusCard');
  const text = document.getElementById('statusText');
  const timeEl = document.getElementById('statusTime');

  const isOpen = mins >= today.open && mins < today.close;

  if(isOpen){
    card.classList.add('status-open'); card.classList.remove('status-closed');
    text.textContent = 'Aperti ora';
    timeEl.textContent = 'Chiudiamo alle ' + fmt(today.close);
  } else {
    card.classList.add('status-closed'); card.classList.remove('status-open');
    text.textContent = 'Chiuso ora';
    timeEl.textContent = mins < today.open ? 'Apriamo alle ' + fmt(today.open) : 'Apriamo domani alle ' + fmt(orari[(day+1)%7].open);
  }

  document.querySelectorAll('#orariTable tr').forEach(tr => {
    tr.classList.toggle('today', parseInt(tr.dataset.day) === day);
  });
}
updateStatus();
setInterval(updateStatus, 60000);
