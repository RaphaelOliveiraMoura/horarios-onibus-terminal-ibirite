import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AutoCompĺete from 'presentation/components/AutoCompĺete'

import * as S from './styles'
import Loader from 'presentation/components/Loader'
import { getBusLinesService } from 'main/services/client-side'

type Option = { value: string; label: string }

const HomePage: React.FC = () => {
  const router = useRouter()

  const [busOptions, setBusOptions] = useState<Option[]>([])
  const [inputFocused, setInputFocused] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const buses = await getBusLinesService.execute()
        const options = buses.map(({ id, name }) => ({
          value: id,
          label: name
        }))

        setBusOptions(options)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [])

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    setLoading(true)
    router.push(`/linhas/${inputValue.value}`).finally(() => setLoading(false))
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper inputFocused={inputFocused}>
        <S.Title>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </S.Title>
        <AutoCompĺete
          id="bus-line"
          options={busOptions}
          onChange={onSelectBusLine}
          placeholder="Selecione a linha de ônibus"
          label="horarios-onibus"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        {loading && <Loader />}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HomePage
