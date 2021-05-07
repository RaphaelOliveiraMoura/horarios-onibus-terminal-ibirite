import { GetBusLines } from 'domain/use-cases/get-bus-lines'
import { GetBusSchedule } from 'domain/use-cases/get-bus-schedule'

import { UpdateBusSchedule } from 'domain/use-cases/update-bus-schedule'
import { BusRepositoryMemory } from 'infra/repositories/memory-bus'

const repository = new BusRepositoryMemory()

export const updateBusScheduleService = new UpdateBusSchedule(repository)
export const getBusScheduleService = new GetBusSchedule(repository)
export const getBusLinesService = new GetBusLines(repository)
