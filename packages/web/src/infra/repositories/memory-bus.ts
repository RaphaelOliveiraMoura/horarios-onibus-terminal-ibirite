import { Bus, BusSchedule, Schedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

import database from '../memory-database'

const mutableDatabase = [...database]

export class BusRepositoryMemory implements BusRepository {
  async getBusLines(): Promise<Bus[]> {
    return mutableDatabase.map(({ id, name }) => ({ id, name }))
  }

  async getBusSchedule(busId: string): Promise<BusSchedule> {
    const bus = mutableDatabase.find(({ id }) => id === busId)

    if (!bus) throw Error(`Bus with id '${busId}' not found`)

    const { id, name, schedule } = bus

    return { bus: { id, name }, schedule }
  }

  async updateBusSchedule(
    busId: string,
    busSchedule: Schedule
  ): Promise<BusSchedule> {
    const busIndex = mutableDatabase.findIndex(({ id }) => id === busId)

    if (busIndex < 0) throw Error(`Bus with id '${busId}' not found`)

    const bus = { ...mutableDatabase[busIndex] }
    bus.schedule = busSchedule
    mutableDatabase[busIndex] = bus

    return { bus: { id: bus.id, name: bus.name }, schedule: busSchedule }
  }
}
