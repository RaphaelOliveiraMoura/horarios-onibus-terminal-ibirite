import { MongoClient } from 'mongodb'

import { Bus, BusSchedule } from 'domain/models'
import { BusRepository } from 'domain/repositories'

const uri = process.env.MONGO_URI as string

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export class BusRepositoryMongo implements BusRepository {
  async getBusLines(): Promise<Bus[]> {
    return []
  }

  async getBusSchedule(busId: string): Promise<BusSchedule> {
    await client.connect()

    const busSchedule = await client
      .db()
      .collection('bus_schedule')
      .findOne({ bus_id: '301C' })

    if (!busSchedule) throw Error(`busSchedule with id '${busId}' not found`)

    return {
      bus: { id: busSchedule.bus_id, name: busSchedule.bus_id },
      schedule: {
        workingDays: busSchedule.working_days,
        saturdays: busSchedule.saturdays,
        sundays: busSchedule.sundays
      }
    } as BusSchedule
  }
}
