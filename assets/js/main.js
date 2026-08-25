// Menu mobile
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

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
