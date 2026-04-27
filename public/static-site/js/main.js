/* ===== Safewell Static — Vanilla JS ===== */

// Tailwind CDN config (dark theme palette)
window.tailwind && (window.tailwind.config = {
  theme: { extend: { colors: {
    primary: '#FFD700', 'primary-foreground': '#0a0a0a',
    background: '#0a0a0a', surface: '#141414', border: '#262626',
    foreground: '#f5f5f5', muted: { DEFAULT:'#9a9a9a', foreground:'#9a9a9a' }
  }, fontFamily: { display: ['Oswald','sans-serif'], sans: ['Poppins','sans-serif'] } } }
});

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initReveal();
  initContactForm();
  initGallery();
  initYear();
});

/* ---------- Custom cursor ---------- */
function initCursor(){
  if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const dot = document.createElement('div'); dot.className = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);
  let x=0,y=0,rx=0,ry=0;
  addEventListener('mousemove', e => { x=e.clientX; y=e.clientY; dot.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`; });
  const tick = () => { rx += (x-rx)*.18; ry += (y-ry)*.18; ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(tick); };
  tick();
  document.querySelectorAll('a,button,input,textarea,[data-cursor="hover"]').forEach(el => {
    el.addEventListener('mouseenter', ()=> ring.classList.add('hover'));
    el.addEventListener('mouseleave', ()=> ring.classList.remove('hover'));
  });
}

/* ---------- Navbar scroll + mobile ---------- */
function initNavbar(){
  const nav = document.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 24);
  onScroll(); addEventListener('scroll', onScroll, { passive:true });

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.querySelector('[data-icon-open]')?.classList.toggle('hidden', open);
      toggle.querySelector('[data-icon-close]')?.classList.toggle('hidden', !open);
    });
  }
}

/* ---------- Scroll reveal ---------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
  if (!('IntersectionObserver' in window)) { els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        const delay = parseFloat(en.target.dataset.delay || 0);
        setTimeout(()=> en.target.classList.add('in'), delay*1000);
        io.unobserve(en.target);
      }
    });
  }, { threshold:.12, rootMargin:'-60px 0px' });
  els.forEach(el => io.observe(el));
}

/* ---------- Contact form (simulated send) ---------- */
function initContactForm(){
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    if (!btn) return;
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(() => { btn.textContent = '✓  Message Sent'; }, 900);
  });
}

/* ---------- Gallery carousel ---------- */
function initGallery(){
  const root = document.querySelector('[data-gallery]'); if (!root) return;
  const fg = root.querySelector('.fg'); const bg = root.querySelector('.bg');
  const dotsWrap = root.querySelector('.dots');
  const slides = JSON.parse(root.dataset.slides || '[]');
  let idx = 0, paused = false, timer;

  slides.forEach((_,i) => {
    const b = document.createElement('button');
    b.className = 'dot' + (i===0?' active':''); b.setAttribute('aria-label',`Go to slide ${i+1}`);
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  });
  const dots = dotsWrap.querySelectorAll('.dot');

  function render(){
    fg.style.opacity = 0; bg.style.opacity = 0;
    setTimeout(() => {
      fg.src = slides[idx].src; fg.alt = slides[idx].alt;
      bg.src = slides[idx].src; fg.style.opacity = 1; bg.style.opacity = .55;
    }, 250);
    dots.forEach((d,i) => d.classList.toggle('active', i===idx));
  }
  function go(i){ idx = (i + slides.length) % slides.length; render(); reset(); }
  function next(){ go(idx+1); } function prev(){ go(idx-1); }
  function reset(){ clearInterval(timer); if(!paused) timer = setInterval(next, 4000); }

  root.querySelector('.prev').addEventListener('click', prev);
  root.querySelector('.next').addEventListener('click', next);
  root.addEventListener('mouseenter', () => { paused = true; clearInterval(timer); });
  root.addEventListener('mouseleave', () => { paused = false; reset(); });

  let tx=null;
  root.addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive:true});
  root.addEventListener('touchend',  e => { if(tx==null) return; const dx = e.changedTouches[0].clientX-tx; if(Math.abs(dx)>40) dx<0?next():prev(); tx=null; });

  reset();
}

/* ---------- Footer year ---------- */
function initYear(){
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}
