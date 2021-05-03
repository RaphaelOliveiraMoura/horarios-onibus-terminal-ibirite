import { BusSchedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

export class GetBusSchedule {
  constructor(private readonly busRepository: BusRepository) {}

  async execute(busId: string): Promise<BusSchedule> {
    return this.busRepository.getBusSchedule(busId)
  }
}
