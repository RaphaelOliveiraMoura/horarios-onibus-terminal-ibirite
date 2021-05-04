import { Time } from 'domain/models/'

export type ScheduleMap = {
  [key: string]: Array<Time | null>
}

export type ScheduleMapNonNull = {
  [key: string]: Array<Time>
}

export const emptyScheduleMap: () => ScheduleMap = () =>
  Object.freeze({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: []
  })

export class BusScheduleViewModel {
  static parse(schedule: Time[]): ScheduleMap {
    const scheduleMap: ScheduleMap = schedule
      .sort(BusScheduleViewModel.sort)
      .reduce((accumulator, time) => {
        const draft: ScheduleMap = { ...accumulator }

        const alreadyExists = draft[String(time.hours)]

        if (alreadyExists) {
          draft[String(time.hours)].push(time)
        } else {
          draft[String(time.hours)] = [time]
        }

        return draft
      }, {})

    return scheduleMap
  }

  static unparse(scheduleMap: ScheduleMap): Time[] {
    return Object.values(scheduleMap).reduce((accumulator, value) => {
      const times = value.filter((v) => !!v) as Time[]
      return [...accumulator, ...times]
    }, []) as Time[]
  }

  static sort(time1: Time | null, time2: Time | null): 1 | -1 {
    if (!time1) return -1
    if (!time2) return 1

    return time1.isAfter(time2) ? 1 : -1
  }

  static removeDuplicationsFilter(
    time: Time | null,
    index: number,
    array: Array<Time | null>
  ): boolean {
    if (!time) return false

    const findedIndex = array.findIndex((t) => {
      if (!t) return false

      return t.isEqual(time)
    })

    return findedIndex === index
  }

  static sanitize(scheduleMap: ScheduleMap): ScheduleMap {
    return Object.entries(scheduleMap).reduce((accumulator, [key, value]) => {
      return {
        ...accumulator,
        [key]: value
          .filter(BusScheduleViewModel.removeDuplicationsFilter)
          .filter((t) => !!t)
          .sort(BusScheduleViewModel.sort)
      }
    }, {})
  }
}
