import * as S from './styles'

import AutoCompĺete from 'presentation/components/AutoCompĺete'
import { getBusLinesService } from 'main/services'
import { useEffect, useState } from 'react'

type BusLinesSearchBarProps = {
  onSearch: (text: string) => void
}

const BusLinesSearchBar: React.FC<BusLinesSearchBarProps> = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>([])

  useEffect(() => {
    getBusLinesService.execute().then((buses) => {
      const busesOptions = buses.map(({ id, name }) => ({
        value: id,
        label: name
      }))

      setOptions(busesOptions)
    })
  }, [])

  return (
    <S.Wrapper>
      <AutoCompĺete
        options={options}
        placeholder="Selecione o ônibus que deseja ver os horários"
        label="horarios-onibus"
      />
    </S.Wrapper>
  )
}

export default BusLinesSearchBar
