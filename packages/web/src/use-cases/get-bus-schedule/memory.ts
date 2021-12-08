import { BusModifiers, Time, BusTime } from 'models'
import { busesMemory } from 'services/memory'
import { GetBusSchedule } from './types'

export function toTimeMap(rawBusTime: string) {
  const [hours, minutes, rawModifiers = ''] = rawBusTime.split(':')

  const modifiers = rawModifiers ? rawModifiers.split(',') : []

  modifiers.forEach((modifier) => {
    const isValidModifier = Object.values(BusModifiers).includes(
      modifier as BusModifiers
    )

    if (!isValidModifier) throw new Error(`Invalid DB Modifier: "${modifier}"`)
  })

  const time = new Time(Number(hours), Number(minutes))

  return new BusTime(time, modifiers as BusModifiers[])
}

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
      workingDays: bus.workingDays.map(toTimeMap),
      saturdays: bus.saturdays.map(toTimeMap),
      sundays: bus.sundays.map(toTimeMap)
    }
  }
}
