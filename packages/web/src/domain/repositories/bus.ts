import { Bus, BusSchedule } from 'domain/models'

export interface BusRepository {
  getBusLines: () => Promise<Bus[]>
  getBusSchedule: (busId: string) => Promise<BusSchedule>
}
