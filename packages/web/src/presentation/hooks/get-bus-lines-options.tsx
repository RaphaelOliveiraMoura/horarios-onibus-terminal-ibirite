import { useEffect, useState } from 'react'

import { getBusLinesService } from 'main/services/client-side'

type Option = { value: string; label: string }

export type useGetBusOptionsStatus = 'loading' | 'error' | 'success'

export function useGetBusOptions() {
  const [busOptions, setBusOptions] = useState<Option[]>([])
  const [status, setStatus] = useState<useGetBusOptionsStatus>('loading')

  useEffect(() => {
    async function fetch() {
      try {
        const buses = await getBusLinesService()
        const options = buses.map(({ id, name }) => ({
          value: id,
          label: name
        }))

        setBusOptions(options)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }

    fetch()
  }, [])

  return { busOptions, status }
}
