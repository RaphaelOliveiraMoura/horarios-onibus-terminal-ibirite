import { Bus, BusSchedule, Schedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

import * as BusScheduleEntity from './entities/bus-schedule'
import * as ScheduleEntity from './entities/schedule'

export class BusRepositoryHttp implements BusRepository {
  async getBusLines(): Promise<Bus[]> {
    const responseBusLines = await fetch('/api/get-bus-lines')

    const busLines = await responseBusLines.json()

    return busLines
  }

  async getBusSchedule(busId: string): Promise<BusSchedule> {
    const responseBusSchedule = await fetch(`/api/get-bus-schedule/${busId}`)
    const busSchedule = await responseBusSchedule.json()

    return BusScheduleEntity.fromJson(busSchedule)
  }

  async updateBusSchedule(
    busId: string,
    busSchedule: Schedule
  ): Promise<BusSchedule> {
    const responseBusSchedule = await fetch(
      `/api/update-bus-schedule/${busId}`,
      {
        method: 'PUT',
        body: JSON.stringify(ScheduleEntity.toJson(busSchedule))
      }
    )
    const updatedBusSchedule = await responseBusSchedule.json()

    return BusScheduleEntity.fromJson(updatedBusSchedule)
  }
}
