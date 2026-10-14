/// <reference lib="webworker" />
import { defaultCache } from '@serwist/next/worker'
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist'
import { Serwist } from 'serwist'

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
  }
}

declare const self: ServiceWorkerGlobalScope

// Mesmo comportamento do next-pwa que estava no ar: o worker novo assume na
// hora (skipWaiting + clientsClaim), com precache do build e cache padrão.
const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache
})

serwist.addEventListeners()

// Precache deixado pelo next-pwa (workbox) em quem já tinha o worker antigo:
// o Serwist usa outro nome de cache e não reaproveita, então só ocupa espaço.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('workbox-precache'))
            .map((key) => caches.delete(key))
        )
      )
  )
})
