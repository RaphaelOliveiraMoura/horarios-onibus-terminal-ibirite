import { Bus } from './bus'
import { Time } from './time'

export type Schedule = {
  workingDays: Time[]
  saturdays: Time[]
  sundays: Time[]
}

export type ScheduleJSON = {
  workingDays: string[]
  saturdays: string[]
  sundays: string[]
}

export type BusSchedule = {
  bus: Bus
  schedule: Schedule
}

export type BusScheduleJSON = {
  bus: Bus
  schedule: ScheduleJSON
}

export namespace BusSchedule {
  export function mapScheduleToString(schedule: Schedule): ScheduleJSON {
    const toStringMap = (time: Time) => time.toString()

    return {
      workingDays: schedule.workingDays.map(toStringMap),
      saturdays: schedule.saturdays.map(toStringMap),
      sundays: schedule.sundays.map(toStringMap)
    }
  }

  export function mapScheduleToTime(scheduleJSON: ScheduleJSON): Schedule {
    const toTimeMap = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number)
      return new Time(hours, minutes)
    }

    return {
      workingDays: scheduleJSON.workingDays.map(toTimeMap),
      saturdays: scheduleJSON.saturdays.map(toTimeMap),
      sundays: scheduleJSON.sundays.map(toTimeMap)
    }
  }

  export function toJson(busSchedule: BusSchedule): BusScheduleJSON {
    return {
      ...busSchedule,
      schedule: mapScheduleToString(busSchedule.schedule)
    }
  }

  export function fromJson(busScheduleJSON: BusScheduleJSON): BusSchedule {
    return {
      ...busScheduleJSON,
      schedule: mapScheduleToTime(busScheduleJSON.schedule)
    }
  }
}
