import { useGetBusOptions } from 'presentation/hooks'
import HomePage from 'presentation/pages/home'

export default function Home() {
  const { busOptions } = useGetBusOptions()

  return <HomePage busOptions={busOptions} />
}
