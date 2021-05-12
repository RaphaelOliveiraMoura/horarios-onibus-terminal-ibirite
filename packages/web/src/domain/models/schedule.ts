import { BusTime } from './bus-time'

export type Schedule = {
  workingDays: BusTime[]
  saturdays: BusTime[]
  sundays: BusTime[]
}
