# horarios-onibus-terminal-ibirite

> **Nexus**: repo da frente **horarios-ibirite** — contexto macro em
> `~/projects/nexus/fronts/horarios-ibirite/`; regras transversais em
> `~/projects/nexus/knowledge/`. Este projeto é **`git_policy: review`**:
> commite local e NUNCA pushe — o push do Raphael é a aprovação/deploy.

Site de horários de ônibus do terminal de Ibirité em
https://www.terminal-ibirite.com/ — **única frente com receita (AdSense)**;
cuidado redobrado com mudanças que afetem SEO ou os slots de anúncio.

## Rodar local

- O app é `packages/web` e usa **npm** (`package-lock.json`). A raiz só instala
  o husky (yarn). Na Vercel o Root Directory é `packages/web` (install e build
  padrão, Node 22.x).
- Setup: `yarn install && npm ci --prefix packages/web`
- Dev: `npm --prefix packages/web run dev` (porta 4400)
- Antes de push: o pre-push do husky já roda lint+build.

## Stack (atualizada em 2026-10-13 para zerar as vulnerabilidades)

- Next 16 (pages router), React 18, styled-components 5, PWA com Serwist.
- Build e dev rodam com **webpack** (`--webpack`): o Serwist não funciona com o
  Turbopack, que é o padrão do Next 16.
- O Next 16 já avisa que o React 18 está deprecado. O Next 17 vai exigir React 19,
  e esse upgrade deve vir junto com o styled-components 6.
- `<title>` precisa receber uma string única (template literal). Com vários
  filhos, o React 18 insere `<!-- -->` dentro do título, e o Google lê isso.
