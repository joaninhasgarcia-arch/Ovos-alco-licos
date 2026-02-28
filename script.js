(function(){
  const KEY = 'dse_cd_deadline';
  const now = Date.now();
  let deadline = Number(localStorage.getItem(KEY) || 0);
  if (!deadline || deadline < now) {
    deadline = now + 45 * 60 * 1000;
    localStorage.setItem(KEY, String(deadline));
  }
  function pad(n){ return String(n).padStart(2,'0'); }
  function tick(){
    const el = document.getElementById('cdTime');
    if(!el) return;
    const diff = Math.max(0, deadline - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  tick();
  setInterval(tick, 500);

  const toast = document.getElementById('toast');
  const nameEl = document.getElementById('toastName');
  const metaEl = document.getElementById('toastMeta');
  const avEl = document.getElementById('toastAvatar');

  const buyers = [
    { n:'Maria Luísa', img:'https://source.unsplash.com/QscTxMJkvwg/120x120' },
    { n:'Ana Carolina', img:'https://source.unsplash.com/9eOByn5K00o/120x120' },
    { n:'Camila', img:'https://source.unsplash.com/QscTxMJkvwg/120x120' },
    { n:'Patrícia', img:'https://source.unsplash.com/9eOByn5K00o/120x120' },
    { n:'Marcelo', img:'https://source.unsplash.com/m_gak8MIJkM/120x120' },
    { n:'João Pedro', img:'https://source.unsplash.com/m_gak8MIJkM/120x120' },
  ];

  function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function showToast(){
    if(!toast) return;
    const pick = rand(buyers);
    if(nameEl) nameEl.textContent = pick.n;
    if(avEl && avEl.tagName==='IMG') avEl.src = pick.img;
    if(metaEl) metaEl.textContent = 'há poucos instantes';
    toast.hidden = false;
    toast.classList.add('show');
    clearTimeout(window.__toastHide);
    window.__toastHide = setTimeout(()=>{
      toast.hidden = true;
      toast.classList.remove('show');
    }, 4200);
  }

  if(toast){
    setTimeout(showToast, 6500);
    setInterval(()=>{ showToast(); }, 15000);
  }

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
