import { BusModifiers, BusTime, Time } from '.'

export type BusSchedule = {
  bus: {
    id: string
    name: string
  }
  map?: string
  schedule: {
    workingDays: BusTime[]
    saturdays: BusTime[]
    sundays: BusTime[]
  }
  labels: { [key in BusModifiers]?: string }
}

export type RawBusSchedule = {
  bus: {
    id: string
    name: string
  }
  map?: string
  schedule: {
    workingDays: string[]
    saturdays: string[]
    sundays: string[]
  }
  labels: { [key in BusModifiers]?: string }
}

export function toTimeMap(rawBusTime: string) {
  const [hours, minutes, rawModifiers] = rawBusTime.split(':')

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

export function toStringMap(busTime: BusTime) {
  const modifiers = busTime.modifiers.join(',')

  if (modifiers.length === 0) {
    return busTime.time.toString()
  }

  return `${busTime.time.toString()}:${modifiers}`
}

export function toJson(busSchedule: BusSchedule): RawBusSchedule {
  return JSON.parse(
    JSON.stringify({
      bus: busSchedule.bus,
      map: busSchedule.map,
      labels: busSchedule.labels,
      schedule: {
        workingDays: busSchedule.schedule.workingDays.map(toStringMap),
        saturdays: busSchedule.schedule.saturdays.map(toStringMap),
        sundays: busSchedule.schedule.sundays.map(toStringMap)
      }
    })
  )
}

export function fromJson(rawSchedule: RawBusSchedule): BusSchedule {
  return {
    bus: rawSchedule.bus,
    map: rawSchedule.map,
    labels: rawSchedule.labels,
    schedule: {
      workingDays: rawSchedule.schedule.workingDays.map(toTimeMap),
      saturdays: rawSchedule.schedule.saturdays.map(toTimeMap),
      sundays: rawSchedule.schedule.sundays.map(toTimeMap)
    }
  }
}

export const BusScheduleOperations = {
  toJson,
  fromJson
}
