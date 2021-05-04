import { Time } from 'domain/models'
import BusScheduleHourColumn from 'presentation/components/EditableBusSchedule/components/BusScheduleHourColumn'
import {
  useEditableBusSchedule,
  EditableBusScheduleProvider
} from 'presentation/components/EditableBusSchedule/provider'

import * as S from './styles'

export type EditableBusScheduleProps = {
  title: string
  schedule: Time[]
}

const EditableBusSchedule: React.FC<EditableBusScheduleProps> = ({ title }) => {
  const { scheduleMap } = useEditableBusSchedule()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.BusScheduleContainer>
        {scheduleMap &&
          Object.entries(scheduleMap).map(([hour, scheduleTimes]) => (
            <BusScheduleHourColumn
              key={hour}
              hourKey={hour}
              scheduleTimes={scheduleTimes}
            />
          ))}
      </S.BusScheduleContainer>
    </S.Wrapper>
  )
}

const EditableBusScheduleWithProvider: React.FC<EditableBusScheduleProps> = ({
  schedule,
  ...props
}) => (
  <EditableBusScheduleProvider schedule={schedule}>
    <EditableBusSchedule schedule={schedule} {...props} />
  </EditableBusScheduleProvider>
)

export default EditableBusScheduleWithProvider
