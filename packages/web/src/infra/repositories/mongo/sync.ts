import { MongoClient } from 'mongodb'

import db from '../memory/db'

const uri = process.env.MONGO_URI as string

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export async function runMigrations() {
  await client.connect()

  console.log('Running migrations ...')

  const busData = db.map((row) => ({
    bus_id: row.bus.id,
    bus_name: row.bus.name,
    labels: row.labels,
    workingDays: row.schedule.workingDays,
    saturdays: row.schedule.saturdays,
    sundays: row.schedule.sundays
  }))

  await client
    .db()
    .collection('bus_schedule')
    .insertMany([...busData])

  console.log('Migrations executed with success ...')
}
