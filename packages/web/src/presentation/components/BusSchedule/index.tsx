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
                  <S.WidgetsContainer>
                    <S.Widget
                      text="Ônibus sai do bairro"
                      color="#333"
                      background="#ddd"
                    >
                      <span>PI</span>
                    </S.Widget>
                  </S.WidgetsContainer>
                )}

                {time.type === TimeType.RI && (
                  <S.WidgetsContainer>
                    <S.Widget
                      text="Ônibus chega no bairro e recolhe"
                      color="#333"
                      background="#ddd"
                    >
                      <span>RI</span>
                    </S.Widget>
                  </S.WidgetsContainer>
                )}

                {time.type === TimeType.AL && (
                  <S.WidgetsContainer>
                    <S.Widget text="Trajeto pela 040">
                      <span>AL</span>
                    </S.Widget>
                  </S.WidgetsContainer>
                )}

                {time.type === TimeType.PREV && (
                  <S.WidgetsContainer>
                    <S.Widget text="Previsão">
                      <span>PR</span>
                    </S.Widget>
                  </S.WidgetsContainer>
                )}

                {time.type === TimeType.PREV_PI && (
                  <S.WidgetsContainer>
                    <S.Widget text="Previsão">
                      <span>PR</span>
                    </S.Widget>
                    <S.Widget
                      text="Ônibus sai do bairro"
                      color="#333"
                      background="#ddd"
                    >
                      <span>PI</span>
                    </S.Widget>
                  </S.WidgetsContainer>
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
