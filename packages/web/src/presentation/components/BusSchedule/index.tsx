import { BusTime } from 'domain/models'
import {
  BusScheduleViewModel,
  ScheduleMapNonNull
} from 'presentation/view-model'

import { modifiersMap } from '../ModifiersTooltip'

import * as S from './styles'

export type BusScheduleProps = {
  title: string
  schedule: BusTime[]
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
            {scheduleTime.map((busTime) => (
              <S.BusScheduleItem key={busTime.time.toString()}>
                {busTime.modifiers.length > 0 && (
                  <S.WidgetsContainer>
                    {busTime.modifiers.map((modifier) =>
                      modifiersMap[modifier](
                        `${busTime.time.toString()}${modifier}`
                      )
                    )}
                  </S.WidgetsContainer>
                )}

                {busTime.time.toString()}
              </S.BusScheduleItem>
            ))}
          </S.BusScheduleHourColumn>
        ))}
      </S.BusScheduleContainer>
    </S.Wrapper>
  )
}

export default BusSchedule
