import { Bus, BusSchedule, Schedule } from 'domain/models'

export const updateBusScheduleService = async (
  busId: string,
  schedule: Schedule
): Promise<BusSchedule> => {
  const responseBusSchedule = await fetch(`/api/update-bus-schedule/${busId}`, {
    method: 'PUT',
    body: JSON.stringify(Schedule.toJson(schedule))
  })
  const updatedBusSchedule = await responseBusSchedule.json()

  return BusSchedule.fromJson(updatedBusSchedule)
}

export const getBusScheduleService = async (
  busId: string
): Promise<BusSchedule> => {
  const responseBusSchedule = await fetch(`/api/get-bus-schedule/${busId}`)
  const busSchedule = await responseBusSchedule.json()

  return BusSchedule.fromJson(busSchedule)
}

export const getBusLinesService = async (): Promise<Bus[]> => {
  const responseBusLines = await fetch('/api/get-bus-lines')
  const busLines = await responseBusLines.json()

  return busLines
}
