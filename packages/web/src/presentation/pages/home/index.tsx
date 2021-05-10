import { useState } from 'react'
import { useRouter } from 'next/router'

import AutoCompĺete from 'presentation/components/AutoCompĺete'

import * as S from './styles'

type HomePageProps = {
  busOptions: { value: string; label: string }[]
}

const HomePage: React.FC<HomePageProps> = ({ busOptions }) => {
  const router = useRouter()

  const [inputFocused, setInputFocused] = useState(false)

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    router.push(`/linhas/${inputValue.value}`)
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper inputFocused={inputFocused}>
        <S.Title>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </S.Title>
        <AutoCompĺete
          options={busOptions}
          onChange={onSelectBusLine}
          placeholder="Selecione a linha de ônibus"
          label="horarios-onibus"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HomePage
