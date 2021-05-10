import { Bus } from './bus'
import { Schedule, ScheduleJSON } from './schedule'

export type BusSchedule = {
  bus: Bus
  schedule: Schedule
}

export type BusScheduleJSON = {
  bus: Bus
  schedule: ScheduleJSON
}

export namespace BusSchedule {
  export function toJson(busSchedule: BusSchedule): BusScheduleJSON {
    return {
      ...busSchedule,
      schedule: Schedule.toJson(busSchedule.schedule)
    }
  }

  export function fromJson(busScheduleJSON: BusScheduleJSON): BusSchedule {
    return {
      ...busScheduleJSON,
      schedule: Schedule.fromJson(busScheduleJSON.schedule)
    }
  }
}
