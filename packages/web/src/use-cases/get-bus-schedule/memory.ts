import { BusModifiers, BusScheduleOperations } from 'models'
import { busesMemory } from 'services/memory'
import { GetBusSchedule } from './types'

export const getBusSchedule: GetBusSchedule = async ({ busId }) => {
  const bus = busesMemory.find((bus) => bus.id === busId)

  if (!bus) throw new Error('Bus not found')

  return {
    bus: {
      id: bus.id,
      name: bus.name
    },
    map: bus.map,
    labels: bus.labels as { [key in BusModifiers]?: string },
    schedule: {
      workingDays: bus.workingDays.map(BusScheduleOperations.toTimeMap),
      saturdays: bus.saturdays.map(BusScheduleOperations.toTimeMap),
      sundays: bus.sundays.map(BusScheduleOperations.toTimeMap)
    }
  }
}
