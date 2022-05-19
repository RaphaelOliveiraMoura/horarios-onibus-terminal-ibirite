import { busesMemory } from 'services/memory'

import { GetBusLines } from './types'

export const getBusLines: GetBusLines = async () => {
  return busesMemory.map((bus) => ({
    id: bus.id,
    name: bus.name
  }))
}
