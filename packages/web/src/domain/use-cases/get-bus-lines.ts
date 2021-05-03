import { Bus } from 'domain/models'
import { BusRepository } from 'domain/repositories'

export class GetBusLines {
  constructor(private readonly busRepository: BusRepository) {}

  async execute(): Promise<Bus[]> {
    return this.busRepository.getBusLines()
  }
}
