import { Time } from 'domain/models'
import {
  BusScheduleViewModel,
  emptyScheduleMap,
  ScheduleMap
} from 'presentation/view-model'
import React, { useState, createContext, useContext, useEffect } from 'react'

type EditableBusScheduleContextValues = {
  scheduleMap: ScheduleMap

  onAddTime: (hourKey: string) => void
  onRemoveTime: (time: Time | null) => void
  onEditTime: (oldTime: Time | null, newTime: Time | null) => void
}

const EditableBusScheduleContext = createContext<EditableBusScheduleContextValues>(
  {} as EditableBusScheduleContextValues
)

type EditableBusScheduleProviderProps = {
  schedule: Time[]
  onUpdateBusSchedule: (schedule: Time[]) => void
}

export const EditableBusScheduleProvider: React.FC<EditableBusScheduleProviderProps> = ({
  children,
  schedule,
  onUpdateBusSchedule
}) => {
  const [scheduleMap, _setScheduleMap] = useState({
    ...emptyScheduleMap(),
    ...BusScheduleViewModel.parse(schedule)
  })

  useEffect(() => {
    onUpdateBusSchedule(BusScheduleViewModel.unparse(scheduleMap))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleMap])

  function setScheduleMap(newScheduleMap: ScheduleMap) {
    _setScheduleMap({
      ...emptyScheduleMap(),
      ...BusScheduleViewModel.sanitize(newScheduleMap)
    })
  }

  function onRemoveTime(time: Time | null) {
    const draft = { ...scheduleMap }

    if (!time) return setScheduleMap(draft)

    const hourKeyMap = String(time.hours)

    const indexToRemove = draft[hourKeyMap].findIndex((currentTime) =>
      currentTime?.isEqual(time)
    )

    if (indexToRemove < 0) throw new Error('Try removing a invalid time')

    draft[hourKeyMap].splice(indexToRemove, 1)

    setScheduleMap(draft)
  }

  function onAddTime(hourKeyMap: string) {
    const draft = { ...scheduleMap }

    draft[hourKeyMap].push(null)

    _setScheduleMap(draft)
  }

  function onEditTime(oldTime: Time | null, newTime: Time | null) {
    const schedule = BusScheduleViewModel.unparse(scheduleMap)

    if (oldTime) {
      const indexToRemove = schedule.findIndex((time) => time.isEqual(oldTime))
      schedule.splice(indexToRemove, 1)
    }

    if (newTime) {
      schedule.push(newTime)
    }

    const sanitizedScheduleMap = BusScheduleViewModel.sanitize(
      BusScheduleViewModel.parse(schedule)
    )

    setScheduleMap({ ...emptyScheduleMap(), ...sanitizedScheduleMap })
  }

  return (
    <EditableBusScheduleContext.Provider
      value={{ scheduleMap, onRemoveTime, onAddTime, onEditTime }}
    >
      {children}
    </EditableBusScheduleContext.Provider>
  )
}

export const useEditableBusSchedule = () => {
  const context = useContext(EditableBusScheduleContext)

  if (!context) {
    throw new Error('You just can access this context inside a provider')
  }

  return context
}

export default {
  EditableBusScheduleProvider,
  useEditableBusSchedule
}
