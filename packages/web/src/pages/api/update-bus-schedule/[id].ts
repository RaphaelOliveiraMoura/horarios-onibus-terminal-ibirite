import { updateBusScheduleService } from 'main/services/server-side'
import { NextApiRequest, NextApiResponse } from 'next'

import * as BusScheduleEntity from 'infra/repositories/http/entities/bus-schedule'
import * as ScheduleEntity from 'infra/repositories/http/entities/schedule'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const busId = req.query.id
    const schedule = JSON.parse(req.body)

    const busSchedule = await updateBusScheduleService.execute(
      String(busId),
      ScheduleEntity.fromJson(schedule)
    )

    return res.json(BusScheduleEntity.toJson(busSchedule))
  } catch (error) {
    console.log(error)
  }
}
