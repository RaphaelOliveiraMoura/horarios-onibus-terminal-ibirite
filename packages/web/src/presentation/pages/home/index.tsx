import { useRouter } from 'next/router'

import AutoCompĺete from 'presentation/components/AutoCompĺete'

import * as S from './styles'

type HomePageProps = {
  busOptions: { value: string; label: string }[]
}

const HomePage: React.FC<HomePageProps> = ({ busOptions }) => {
  const router = useRouter()

  function onSelectBusLine(inputValue: { value: string } | null) {
    if (!inputValue) return

    router.push(`/linhas/${inputValue.value}`)
  }

  return (
    <S.Wrapper>
      <S.Title>
        Consulte os horários de ônibus do terminal de ibirité atualizados
      </S.Title>
      <AutoCompĺete
        options={busOptions}
        onChange={onSelectBusLine}
        placeholder="Selecione o ônibus para consulta de horários"
        label="horarios-onibus"
      />
    </S.Wrapper>
  )
}

export default HomePage
