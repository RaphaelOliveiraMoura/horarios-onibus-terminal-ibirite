import { BusSchedule, BusScheduleJSON } from 'domain/models'
import {
  getBusLinesService,
  getBusScheduleService
} from 'main/services/server-side'
import { GetServerSidePropsContext } from 'next'

import BusScheduleDetailsPage from 'presentation/pages/bus-schedule-details'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const busLines = await getBusLinesService.execute()

  const busOptions = busLines.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  const busSchedule = await getBusScheduleService.execute(
    String(context.params?.id)
  )

  return { props: { busOptions, busSchedule: BusSchedule.toJson(busSchedule) } }
}

type PageProps = {
  busSchedule: BusScheduleJSON
  busOptions: { label: string; value: string }[]
}

const Page: React.FC<PageProps> = ({ busSchedule, busOptions }) => {
  return (
    <BusScheduleDetailsPage
      busOptions={busOptions}
      busSchedule={BusSchedule.fromJson(busSchedule)}
    />
  )
}

export default Page
