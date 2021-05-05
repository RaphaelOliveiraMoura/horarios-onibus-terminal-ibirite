import { BusSchedule, BusScheduleJSON } from 'domain/models'
import { getBusLinesService } from 'main/services'
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

import BusScheduleDetailsPage from 'presentation/pages/bus-schedule-details'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const busLines = await getBusLinesService.execute()

  const busOptions = busLines.map(({ id, name }) => ({
    value: id,
    label: name
  }))

  const busId = String(context.params?.id)
  const responseBusSchedule = await fetch(
    `${process.env.API_URL}/api/get-bus-schedule/${busId}`
  )
  const busSchedule = await responseBusSchedule.json()

  return { props: { busOptions, busSchedule: BusSchedule.toJson(busSchedule) } }
}

type PageProps = {
  busSchedule: BusScheduleJSON
  busOptions: { label: string; value: string }[]
}

const Page: React.FC<PageProps> = ({ busSchedule, busOptions }) => {
  const router = useRouter()
  const { id } = router.query

  if (typeof id !== 'string') return <div>error</div>

  return (
    <BusScheduleDetailsPage
      busId={id}
      navigate={router.push}
      busOptions={busOptions}
      busSchedule={BusSchedule.fromJson(busSchedule)}
    />
  )
}

export default Page
