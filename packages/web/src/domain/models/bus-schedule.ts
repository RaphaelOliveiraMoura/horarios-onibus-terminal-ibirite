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
