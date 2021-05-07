import { BusSchedule, Schedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

export class UpdateBusSchedule {
  constructor(private readonly busRepository: BusRepository) {}

  async execute(busId: string, busSchedule: Schedule): Promise<BusSchedule> {
    return this.busRepository.updateBusSchedule(busId, busSchedule)
  }
}
