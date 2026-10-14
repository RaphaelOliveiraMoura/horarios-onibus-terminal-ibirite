import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import withSerwistInit from '@serwist/next'

// Service worker (PWA). Substitui o next-pwa, sem manutenção: mesmo /sw.js,
// então quem já tem o worker antigo instalado recebe este na próxima visita.
const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production'
})

export default withSerwist({
  // O yarn.lock da raiz (só husky) faria o Next tomar a raiz do repo como
  // workspace; o app e o node_modules vivem aqui (Root Directory na Vercel).
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // As regras do repo ficam no AGENTS.md da raiz; não gerar outro aqui.
  agentRules: false,
  compiler: {
    styledComponents: true
  }
})
