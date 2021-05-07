import { getBusLinesService } from 'main/services'
import { useEffect, useState } from 'react'

type Option = { value: string; label: string }

export function useGetBusOptions() {
  const [busOptions, setBusOptions] = useState<Option[]>([])

  useEffect(() => {
    getBusLinesService.execute().then((buses) => {
      const options = buses.map(({ id, name }) => ({
        value: id,
        label: name
      }))

      setBusOptions(options)
    })
  }, [])

  return { busOptions }
}
