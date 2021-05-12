import { BusTime, BusModifiers } from 'domain/models'
import {
  BusScheduleViewModel,
  ScheduleMapNonNull
} from 'presentation/view-model'

import * as S from './styles'

export type BusScheduleProps = {
  title: string
  schedule: BusTime[]
}

const modifiersMap = {
  [BusModifiers.AL]: function Widget(key: string) {
    return (
      <S.Widget key={key} text="Trajeto pela 040">
        <span>AL</span>
      </S.Widget>
    )
  },
  [BusModifiers.PI]: function Widget(key: string) {
    return (
      <S.Widget
        key={key}
        text="Ônibus sai do bairro"
        color="#333"
        background="#ddd"
      >
        <span>PI</span>
      </S.Widget>
    )
  },
  [BusModifiers.PREV]: function Widget(key: string) {
    return (
      <S.Widget key={key} text="Previsão">
        <span>PR</span>
      </S.Widget>
    )
  },
  [BusModifiers.RI]: function Widget(key: string) {
    return (
      <S.Widget
        key={key}
        text="Ônibus chega no bairro e recolhe"
        color="#333"
        background="#ddd"
      >
        <span>RI</span>
      </S.Widget>
    )
  }
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
