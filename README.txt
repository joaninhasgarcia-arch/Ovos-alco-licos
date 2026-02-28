# Landing — Fórmula dos Ovos de Páscoa Alcoólicos

## O que vem pronto
- Design creme premium
- Animações ao rolar (scroll reveal)
- Card de ofertas (R$9,90 e R$19,90 destacado)
- Popup de compras (FOMO) a cada ~12–18s
- Responsivo (mobile)
- Sticky CTA no mobile

## Antes de publicar
1) Troque os links:
- Em `index.html` procure por:
  - `https://pay.cakto.com.br/v58686a_786465`
  - `https://pay.cakto.com.br/j45f84f_787166`
  e substitua pelos seus links reais.

2) (Opcional) Troque o texto/nomes do popup:
- Em `script.js` edite a lista `names`.

3) (Opcional) Troque as imagens:
- No topo (hero) a área é um placeholder. Você pode substituir por uma imagem:
  - Crie `assets/hero.jpg` (por exemplo)
  - Em `style.css`, na classe `.hero-card__img`, substitua o background por:
    `background: url('assets/hero.jpg') center/cover no-repeat;`

## Deploy no Vercel
- Basta subir esses arquivos no GitHub e importar no Vercel.
