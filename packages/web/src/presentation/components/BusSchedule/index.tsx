import { Time } from 'domain/models'
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
