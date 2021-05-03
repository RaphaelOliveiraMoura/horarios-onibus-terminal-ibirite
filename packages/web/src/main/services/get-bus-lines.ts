import { GetBusLines } from 'domain/use-cases/get-bus-lines'
import { BusRepositoryMemory } from 'infra/repositories'

export const getBusLinesService = new GetBusLines(new BusRepositoryMemory())
