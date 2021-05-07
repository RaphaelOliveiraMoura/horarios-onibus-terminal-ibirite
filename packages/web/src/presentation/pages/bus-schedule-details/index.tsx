import AutoCompĺete from 'presentation/components/AutoCompĺete'
import BusSchedule from 'presentation/components/BusSchedule'
import { BusSchedule as BusScheduleModel } from 'domain/models'

import * as S from './styles'

type BusScheduleDetailsPageProps = {
  busId: string
  navigate: (route: string) => void
  busOptions: { label: string; value: string }[]
  busSchedule: BusScheduleModel
}

const BusScheduleDetailsPage: React.FC<BusScheduleDetailsPageProps> = ({
  busOptions,
  busSchedule,
  navigate
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          Consulte os horários de ônibus do terminal de ibirité atualizados
        </S.Title>
        <AutoCompĺete
          options={busOptions}
          onChange={(inputValue: { value: string; label: string } | null) =>
            inputValue && navigate(`/linhas/${inputValue.value}`)
          }
          placeholder="Selecione o ônibus para consulta de horários"
          label="horarios-onibus"
        />
      </S.Header>

      <S.BusScheduleContainer>
        <BusSchedule
          title="Dias úteis"
          schedule={busSchedule.schedule.workingDays}
        />
        <BusSchedule
          title="Sábados"
          schedule={busSchedule.schedule.saturdays}
        />
        <BusSchedule
          title="Domingos e feriados"
          schedule={busSchedule.schedule.sundays}
        />
      </S.BusScheduleContainer>
    </S.Wrapper>
  )
}

export default BusScheduleDetailsPage
