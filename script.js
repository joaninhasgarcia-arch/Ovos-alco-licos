// TIMER (45 minutos padrão)
(function(){
  const TIMER_KEY = "dse_timer_end";
  const now = Date.now();
  let end = Number(localStorage.getItem(TIMER_KEY));
  if(!end || end < now){
    end = now + (45 * 60 * 1000);
    localStorage.setItem(TIMER_KEY, String(end));
  }
  const el = document.getElementById("timer");
  function tick(){
    const diff = Math.max(0, end - Date.now());
    const total = Math.floor(diff / 1000);
    const h = String(Math.floor(total/3600)).padStart(2,'0');
    const m = String(Math.floor((total%3600)/60)).padStart(2,'0');
    const s = String(total%60).padStart(2,'0');
    if(el) el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
})();

// FOMO (notificação de compra) com fotos reais (URLs públicas)
(function(){
  const names = ["Ana Carolina", "Maria Luísa", "Marcelo", "Rafaela", "Juliana", "Fernanda", "Carlos", "Bruna"];
  const avatars = [
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/women/22.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/women/35.jpg",
    "https://randomuser.me/api/portraits/women/48.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg"
  ];
  const box = document.getElementById("fomo");
  const nameEl = document.getElementById("fomoName");
  const avatarEl = document.getElementById("fomoAvatar");

  function show(){
    if(!box || !nameEl || !avatarEl) return;
    const n = names[Math.floor(Math.random()*names.length)];
    const a = avatars[Math.floor(Math.random()*avatars.length)];
    nameEl.textContent = n;
    avatarEl.src = a;
    box.classList.add("show");
    setTimeout(()=> box.classList.remove("show"), 5200);
  }
  setTimeout(show, 3500);
  setInterval(show, 14000 + Math.floor(Math.random()*6000));
})();
