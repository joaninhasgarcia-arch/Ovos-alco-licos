// ===============================
// Scroll reveal + Sticky CTA + Purchase popups
// ===============================
(function () {
  // Smooth anchor scrolling (keeps it lightweight)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', id);
  });

  // Reveal on scroll (IntersectionObserver)
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealEls.forEach(el => io.observe(el));

  // Sticky CTA shows after user scrolls a bit (mobile)
  const sticky = document.getElementById('stickyCta');
  const showSticky = () => {
    if (!sticky) return;
    const isMobile = window.matchMedia('(max-width: 980px)').matches;
    const y = window.scrollY || document.documentElement.scrollTop;
    if (isMobile && y > 520) sticky.hidden = false;
    else sticky.hidden = true;
  };
  window.addEventListener('scroll', showSticky, { passive: true });
  window.addEventListener('resize', showSticky);
  showSticky();

  // Purchase popups (FOMO)
  const pop = document.getElementById('purchasePop');
  const titleEl = document.getElementById('purchaseTitle');
  const metaEl = document.getElementById('purchaseMeta');

  // Configure names here (you can change anytime)
  const names = [
    'Maria Luísa', 'Ana Carolina', 'Juliana Souza', 'Patrícia Lima',
    'Marcelo Silva', 'Fernanda Rocha', 'Camila Alves', 'Bruna Martins',
    'Rafael Gomes', 'Aline Pereira', 'Vanessa Costa', 'Rodrigo Melo',
    'Larissa Fernandes', 'Paula Ribeiro', 'Daniela Santos', 'Renata Oliveira',
    'Bianca Almeida', 'Sabrina Nunes', 'Carol Azevedo', 'Thiago Moreira'
  ];

  const actions = [
    'acabou de comprar', 'garantiu o acesso', 'comprou há poucos minutos', 'começou agora'
  ];

  const times = [
    'agora mesmo', 'há 2 minutos', 'há 5 minutos', 'há 9 minutos', 'há 12 minutos'
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function showPop() {
    if (!pop || !titleEl || !metaEl) return;
    const name = pick(names);
    const action = pick(actions);
    const time = pick(times);

    titleEl.textContent = `🟢 ${name} ${action}`;
    metaEl.textContent = time;

    pop.hidden = false;
    pop.classList.add('show');

    // Hide after 4-6s
    const visibleFor = 4000 + Math.floor(Math.random() * 2000);
    setTimeout(() => {
      pop.classList.remove('show');
      // hide element a bit after transition
      setTimeout(() => { pop.hidden = true; }, 250);
    }, visibleFor);

    // schedule next popup 12-18s (random)
    const nextIn = 12000 + Math.floor(Math.random() * 6000);
    setTimeout(showPop, nextIn);
  }

  // Start popups after user is on page for a few seconds
  setTimeout(showPop, 4500);
})();
