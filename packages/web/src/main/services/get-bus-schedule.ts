import { GetBusSchedule } from 'domain/use-cases/get-bus-schedule'
import { BusRepositoryMemory } from 'infra/repositories'

export const getBusScheduleService = new GetBusSchedule(
  new BusRepositoryMemory()
)
