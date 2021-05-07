import { Bus, BusSchedule, Schedule } from 'domain/models'

export interface BusRepository {
  getBusLines: () => Promise<Bus[]>

  getBusSchedule: (busId: string) => Promise<BusSchedule>

  updateBusSchedule: (
    busId: string,
    busSchedule: Schedule
  ) => Promise<BusSchedule>
}
