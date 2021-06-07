import { BusTime } from 'domain/models/'

export type ScheduleMap = {
  [key: string]: Array<BusTime | null>
}

export type ScheduleMapNonNull = {
  [key: string]: Array<BusTime>
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
  static parse(schedule: BusTime[]): ScheduleMap {
    const scheduleMap: ScheduleMap = schedule
      .sort(BusScheduleViewModel.sort)
      .reduce((accumulator, busTime) => {
        const draft: ScheduleMap = { ...accumulator }

        const alreadyExists = draft[String(busTime.time.hours)]

        if (alreadyExists) {
          draft[String(busTime.time.hours)].push(busTime)
        } else {
          draft[String(busTime.time.hours)] = [busTime]
        }

        return draft
      }, {})

    return scheduleMap
  }

  static unparse(scheduleMap: ScheduleMap): BusTime[] {
    return Object.values(scheduleMap).reduce((accumulator, value) => {
      const times = value.filter((v) => !!v) as BusTime[]
      return [...accumulator, ...times]
    }, []) as BusTime[]
  }

  static sort(busTime1: BusTime | null, busTime2: BusTime | null): 1 | -1 {
    if (!busTime1) return -1
    if (!busTime2) return 1

    if (busTime1.isEqual(busTime2)) {
      return busTime1.modifiers.length > busTime2.modifiers.length ? -1 : 1
    }

    return busTime1.time.isAfter(busTime2.time) ? 1 : -1
  }

  static removeDuplicationsFilter(
    time: BusTime | null,
    index: number,
    array: Array<BusTime | null>
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
