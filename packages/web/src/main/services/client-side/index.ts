import { GetBusLines } from 'domain/use-cases/get-bus-lines'
import { GetBusSchedule } from 'domain/use-cases/get-bus-schedule'

import { UpdateBusSchedule } from 'domain/use-cases/update-bus-schedule'
import { BusRepositoryHttp } from 'infra/repositories/http'

const repository = new BusRepositoryHttp()

export const updateBusScheduleService = new UpdateBusSchedule(repository)
export const getBusScheduleService = new GetBusSchedule(repository)
export const getBusLinesService = new GetBusLines(repository)
