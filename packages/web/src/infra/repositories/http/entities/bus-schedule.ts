import { BusModifiers, BusSchedule } from 'domain/models'

import * as ScheduleEntity from './schedule'

export type HttpBusScheduleResponse = {
  bus: {
    id: string
    name: string
  }
  labels: { [key in BusModifiers]?: string }
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
    labels: httpBusScheduleResponse.labels,
    schedule: ScheduleEntity.toJson(httpBusScheduleResponse.schedule)
  }
}

export function fromJson(
  httpBusScheduleResponse: HttpBusScheduleResponse
): BusSchedule {
  return {
    bus: httpBusScheduleResponse.bus,
    labels: httpBusScheduleResponse.labels,
    schedule: ScheduleEntity.fromJson(httpBusScheduleResponse.schedule)
  }
}
