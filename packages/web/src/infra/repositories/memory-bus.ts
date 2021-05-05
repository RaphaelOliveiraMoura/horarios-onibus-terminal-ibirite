import { Bus, BusSchedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

import buses from './memory-database'

export class BusRepositoryMemory implements BusRepository {
  async getBusLines(): Promise<Bus[]> {
    return buses.map(({ id, name }) => ({ id, name }))
  }

  async getBusSchedule(busId: string): Promise<BusSchedule> {
    const bus = buses.find(({ id }) => id === busId)

    if (!bus) throw Error(`Bus with id '${busId}' not found`)

    const { id, name, schedule } = bus

    return { bus: { id, name }, schedule }
  }
}
