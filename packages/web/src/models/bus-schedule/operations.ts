import { InvalidBusModifiersError } from 'errors'
import {
  BusModifiers,
  BusTime,
  Time,
  BusSchedule,
  RawBusSchedule
} from 'models'

export function toTimeMap(rawBusTime: string) {
  const [hours, minutes, rawModifiers] = rawBusTime.split(':')

  const modifiers = rawModifiers ? rawModifiers.split(',') : []

  modifiers.forEach((modifier) => {
    const isValidModifier = Object.values(BusModifiers).includes(
      modifier as BusModifiers
    )

    if (!isValidModifier) throw new InvalidBusModifiersError(modifier)
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
