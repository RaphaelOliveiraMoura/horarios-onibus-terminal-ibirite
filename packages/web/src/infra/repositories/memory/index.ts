import { Bus, BusSchedule, Schedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

import database from './db'

const mutableDatabase = [...database]

export class BusRepositoryMemory implements BusRepository {
  async getBusLines(): Promise<Bus[]> {
    return mutableDatabase.map(({ bus }) => ({ ...bus }))
  }

  async getBusSchedule(busId: string): Promise<BusSchedule> {
    const bus = mutableDatabase.find(({ bus: { id } }) => id === busId)

    if (!bus) throw Error(`Bus with id '${busId}' not found`)

    return bus
  }

  async updateBusSchedule(
    busId: string,
    busSchedule: Schedule
  ): Promise<BusSchedule> {
    const busIndex = mutableDatabase.findIndex(({ bus }) => bus.id === busId)

    if (busIndex < 0) throw Error(`Bus with id '${busId}' not found`)

    const bus = { ...mutableDatabase[busIndex] }
    bus.schedule = busSchedule
    mutableDatabase[busIndex] = bus

    return mutableDatabase[busIndex]
  }
}
