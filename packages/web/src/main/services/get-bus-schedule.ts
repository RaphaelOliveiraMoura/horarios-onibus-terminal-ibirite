import { GetBusSchedule } from 'domain/use-cases/get-bus-schedule'
import { BusRepositoryMongo } from 'infra/repositories'

export const getBusScheduleService = new GetBusSchedule(
  new BusRepositoryMongo()
)
