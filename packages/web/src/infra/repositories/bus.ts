import { Bus, BusSchedule, Schedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

type BusesMemoryDatabase = { id: string; name: string; schedule: Schedule }

const buses: BusesMemoryDatabase[] = [
  {
    id: '301C',
    name: '301C - Terminal Ibirité via amazonas',
    schedule: { saturdays: [], sundays: [], workingDays: [] }
  },
  {
    id: '303M',
    name: '303M - Terminal Ibirité/estação metrô eldorado',
    schedule: { saturdays: [], sundays: [], workingDays: [] }
  },
  {
    id: '3390',
    name: '3390 - Terminal Ibirité jardim das rosas',
    schedule: { saturdays: [], sundays: [], workingDays: [] }
  }
]

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
