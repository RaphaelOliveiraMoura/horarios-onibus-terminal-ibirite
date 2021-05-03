import * as S from './styles'

import AutoCompĺete from 'presentation/components/AutoCompĺete'
import { getBusLinesService } from 'main/services'
import { useEffect, useState } from 'react'

const HomePage: React.FC = () => {
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
      <S.Title>
        Consulte os horários de ônibus do terminal de ibirité atualizados
      </S.Title>
      <AutoCompĺete
        options={options}
        placeholder="Selecione o ônibus para consulta de horários"
        label="horarios-onibus"
      />
    </S.Wrapper>
  )
}

export default HomePage
