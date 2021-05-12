import { BusModifiers, BusSchedule, BusTime, Time } from 'domain/models'

type DbSchedule = {
  id: string
  name: string
  workingDays: string[]
  saturdays: string[]
  sundays: string[]
}

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

export function parse(dbSchedule: DbSchedule): BusSchedule {
  return {
    bus: {
      id: dbSchedule.id,
      name: dbSchedule.name
    },
    schedule: {
      workingDays: dbSchedule.workingDays.map(toTimeMap),
      saturdays: dbSchedule.saturdays.map(toTimeMap),
      sundays: dbSchedule.sundays.map(toTimeMap)
    }
  }
}
