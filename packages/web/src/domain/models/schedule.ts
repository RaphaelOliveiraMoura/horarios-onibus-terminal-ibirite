import { Time, TimeType } from './time'

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

export namespace Schedule {
  export function toStringMap(time: Time) {
    return `${time.toString()}:${time.type}`
  }

  export function toTimeMap(time: string) {
    const [hours, minutes, type = TimeType.Default] = time.split(':')

    const isValidType = Object.values(TimeType).includes(type as TimeType)

    if (!isValidType) throw new Error(`Invalid TimeType: "${type}"`)

    return new Time(Number(hours), Number(minutes), type as TimeType)
  }

  export function toJson(schedule: Schedule): ScheduleJSON {
    return {
      workingDays: schedule.workingDays.map(toStringMap),
      saturdays: schedule.saturdays.map(toStringMap),
      sundays: schedule.sundays.map(toStringMap)
    }
  }

  export function fromJson(scheduleJSON: ScheduleJSON): Schedule {
    return {
      workingDays: scheduleJSON.workingDays.map(toTimeMap),
      saturdays: scheduleJSON.saturdays.map(toTimeMap),
      sundays: scheduleJSON.sundays.map(toTimeMap)
    }
  }
}
