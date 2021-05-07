import { BusSchedule } from 'domain/models'
import { getBusScheduleService } from 'main/services'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const busId = req.query.id
    const busSchedule = await getBusScheduleService.execute(String(busId))
    return res.json(BusSchedule.toJson(busSchedule))
  } catch (error) {
    console.log(error)
  }
}
