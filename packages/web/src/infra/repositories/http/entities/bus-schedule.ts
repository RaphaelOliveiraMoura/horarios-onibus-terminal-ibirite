import { BusSchedule } from 'domain/models'

import * as ScheduleEntity from './schedule'

export type HttpBusScheduleResponse = {
  bus: {
    id: string
    name: string
  }
  schedule: {
    workingDays: string[]
    saturdays: string[]
    sundays: string[]
  }
}

export function toJson(
  httpBusScheduleResponse: BusSchedule
): HttpBusScheduleResponse {
  return {
    bus: httpBusScheduleResponse.bus,
    schedule: ScheduleEntity.toJson(httpBusScheduleResponse.schedule)
  }
}

export function fromJson(
  httpBusScheduleResponse: HttpBusScheduleResponse
): BusSchedule {
  return {
    bus: httpBusScheduleResponse.bus,
    schedule: ScheduleEntity.fromJson(httpBusScheduleResponse.schedule)
  }
}
