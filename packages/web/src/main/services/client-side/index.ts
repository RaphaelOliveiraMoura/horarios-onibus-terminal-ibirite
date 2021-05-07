import { Bus, BusSchedule, Schedule } from 'domain/models'

export const updateBusScheduleService = async (
  busId: string,
  schedule: Schedule
): Promise<BusSchedule> => {
  const responseBusSchedule = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/update-bus-schedule/${busId}`,
    {
      method: 'PUT',
      body: JSON.stringify(BusSchedule.mapScheduleToString(schedule))
    }
  )
  const updatedBusSchedule = await responseBusSchedule.json()

  return BusSchedule.fromJson(updatedBusSchedule)
}

export const getBusScheduleService = async (
  busId: string
): Promise<BusSchedule> => {
  const responseBusSchedule = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-bus-schedule/${busId}`
  )
  const busSchedule = await responseBusSchedule.json()

  return BusSchedule.fromJson(busSchedule)
}

export const getBusLinesService = async (): Promise<Bus[]> => {
  const responseBusLines = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-bus-lines`
  )
  const busLines = await responseBusLines.json()

  return busLines
}
