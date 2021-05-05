import { Bus } from './bus'
import { Time } from './time'

export type Schedule = {
  workingDays: Time[]
  saturdays: Time[]
  sundays: Time[]
}

export type BusSchedule = {
  bus: Bus
  schedule: Schedule
}

export type BusScheduleJSON = {
  bus: Bus
  schedule: {
    workingDays: string[]
    saturdays: string[]
    sundays: string[]
  }
}

export namespace BusSchedule {
  export function toJson(busSchedule: BusSchedule): BusScheduleJSON {
    const toStringMap = (time: Time) => time.toString()

    return {
      ...busSchedule,
      schedule: {
        workingDays: busSchedule.schedule.workingDays.map(toStringMap),
        saturdays: busSchedule.schedule.saturdays.map(toStringMap),
        sundays: busSchedule.schedule.sundays.map(toStringMap)
      }
    }
  }

  export function fromJson(busScheduleJSON: BusScheduleJSON): BusSchedule {
    const toTimeMap = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number)
      return new Time(hours, minutes)
    }

    return {
      ...busScheduleJSON,
      schedule: {
        workingDays: busScheduleJSON.schedule.workingDays.map(toTimeMap),
        saturdays: busScheduleJSON.schedule.saturdays.map(toTimeMap),
        sundays: busScheduleJSON.schedule.sundays.map(toTimeMap)
      }
    }
  }
}
