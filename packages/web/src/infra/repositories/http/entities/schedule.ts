import { BusModifiers, BusTime, Schedule, Time } from 'domain/models'

type ScheduleJSON = {
  workingDays: string[]
  saturdays: string[]
  sundays: string[]
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

export function toJson(schedule: Schedule): ScheduleJSON {
  return {
    workingDays: schedule.workingDays.map(toStringMap),
    saturdays: schedule.saturdays.map(toStringMap),
    sundays: schedule.sundays.map(toStringMap)
  }
}

export function fromJson(schedule: ScheduleJSON): Schedule {
  return {
    workingDays: schedule.workingDays.map(toTimeMap),
    saturdays: schedule.saturdays.map(toTimeMap),
    sundays: schedule.sundays.map(toTimeMap)
  }
}
