import { BusModifiers, BusTime } from 'models'

export * as BusScheduleOperations from './operations'

export type BusSchedule = {
  bus: {
    id: string
    name: string
  }
  map?: string
  schedule: {
    workingDays: BusTime[]
    saturdays: BusTime[]
    sundays: BusTime[]
  }
  labels: { [key in BusModifiers]?: string }
}

export type RawBusSchedule = {
  bus: {
    id: string
    name: string
  }
  map?: string
  schedule: {
    workingDays: string[]
    saturdays: string[]
    sundays: string[]
  }
  labels: { [key in BusModifiers]?: string }
}
