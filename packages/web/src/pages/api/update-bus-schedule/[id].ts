import { BusSchedule, Schedule } from 'domain/models'
import { updateBusScheduleService } from 'main/services/server-side'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const busId = req.query.id
    const schedule = JSON.parse(req.body)

    const busSchedule = await updateBusScheduleService.execute(
      String(busId),
      Schedule.fromJson(schedule)
    )

    return res.json(BusSchedule.toJson(busSchedule))
  } catch (error) {
    console.log(error)
  }
}
