import { Time, TimeType } from 'domain/models'
import {
  BusScheduleViewModel,
  ScheduleMapNonNull
} from 'presentation/view-model'

import * as S from './styles'

export type BusScheduleProps = {
  title: string
  schedule: Time[]
}

const BusSchedule: React.FC<BusScheduleProps> = ({ title, schedule }) => {
  const scheduleMap = BusScheduleViewModel.parse(schedule) as ScheduleMapNonNull

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.BusScheduleContainer>
        {Object.entries(scheduleMap).map(([hour, scheduleTime]) => (
          <S.BusScheduleHourColumn key={hour}>
            <S.BusScheduleHeader>{hour}</S.BusScheduleHeader>
            {scheduleTime.map((time) => (
              <S.BusScheduleItem key={time.toString()}>
                {time.type === TimeType.PI && (
                  <S.BusScheduleItemTooltip text="Ônibus sai do bairro">
                    <span>PI</span>
                  </S.BusScheduleItemTooltip>
                )}

                {time.type === TimeType.RI && (
                  <S.BusScheduleItemTooltip text="Ônibus chega no bairro e recolhe">
                    <span>RI</span>
                  </S.BusScheduleItemTooltip>
                )}

                {time.toString()}
              </S.BusScheduleItem>
            ))}
          </S.BusScheduleHourColumn>
        ))}
      </S.BusScheduleContainer>
    </S.Wrapper>
  )
}

export default BusSchedule
