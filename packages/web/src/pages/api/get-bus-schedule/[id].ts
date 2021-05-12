import { getBusScheduleService } from 'main/services/server-side'
import { NextApiRequest, NextApiResponse } from 'next'

import * as BusScheduleEntity from 'infra/repositories/http/entities/bus-schedule'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const busId = req.query.id
    const busSchedule = await getBusScheduleService.execute(String(busId))
    return res.json(BusScheduleEntity.toJson(busSchedule))
  } catch (error) {
    console.log(error)
  }
}
