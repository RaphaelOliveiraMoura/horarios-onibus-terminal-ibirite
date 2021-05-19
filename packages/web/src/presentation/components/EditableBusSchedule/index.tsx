import { BusTime } from 'domain/models'
import BusScheduleHourColumn from 'presentation/components/EditableBusSchedule/components/BusScheduleHourColumn'
import {
  useEditableBusSchedule,
  EditableBusScheduleProvider
} from 'presentation/components/EditableBusSchedule/provider'
import { DialogProvider } from 'presentation/components/Dialog/provider'

import * as S from './styles'

export type EditableBusScheduleProps = {
  title: string
  schedule: BusTime[]
  onUpdateBusSchedule: (schedule: BusTime[]) => void
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
  onUpdateBusSchedule,
  ...props
}) => (
  <DialogProvider>
    <EditableBusScheduleProvider
      schedule={schedule}
      onUpdateBusSchedule={onUpdateBusSchedule}
    >
      <EditableBusSchedule
        schedule={schedule}
        onUpdateBusSchedule={onUpdateBusSchedule}
        {...props}
      />
    </EditableBusScheduleProvider>
  </DialogProvider>
)

export default EditableBusScheduleWithProvider
