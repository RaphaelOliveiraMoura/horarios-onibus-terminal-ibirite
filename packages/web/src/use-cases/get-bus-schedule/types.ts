import { BusModifiers, BusTime } from 'models'

export type GetBusScheduleParams = { busId: string }
export type GetBusScheduleResult = {
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

export type GetBusSchedule = (
  params: GetBusScheduleParams
) => Promise<GetBusScheduleResult>
