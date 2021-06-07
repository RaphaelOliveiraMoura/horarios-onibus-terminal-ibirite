import { Bus } from './bus'
import { BusModifiers } from './bus-modifiers'
import { Schedule } from './schedule'

export type BusSchedule = {
  bus: Bus
  map?: string
  schedule: Schedule
  labels: { [key in BusModifiers]?: string }
}
