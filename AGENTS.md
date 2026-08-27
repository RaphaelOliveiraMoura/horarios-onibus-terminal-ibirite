# horarios-onibus-terminal-ibirite

> **Nexus**: repo da frente **horarios-ibirite** — contexto macro em
> `~/projects/nexus/fronts/horarios-ibirite/`; regras transversais em
> `~/projects/nexus/knowledge/`. Este projeto é **`git_policy: review`**:
> commite local e NUNCA pushe — o push do Raphael é a aprovação/deploy.

Site de horários de ônibus do terminal de Ibirité em
https://www.terminal-ibirite.com/ — **única frente com receita (AdSense)**;
cuidado redobrado com mudanças que afetem SEO ou os slots de anúncio.

## Rodar local

- Monorepo lerna/yarn workspaces; o app é `packages/web`.
- Setup: `yarn install`
- Dev: `yarn workspace horarios-onibus-terminal-ibirite-web dev`
  (porta 3000 — TODO: migrar para a faixa 44xx da frente)
- Antes de push: `yarn workspace horarios-onibus-terminal-ibirite-web lint && ... build`
  (o pre-push do husky já roda lint+build).
