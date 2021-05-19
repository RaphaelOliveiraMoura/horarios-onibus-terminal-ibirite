import styled from 'styled-components'

export const BusScheduleHourColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.4rem;
  flex: 1;
  min-width: 64px;

  & > #remove-time-button {
    opacity: 0;
    pointer-events: none;
    cursor: pointer;
    transition: all 0.4s;
  }

  &:hover > #remove-time-button {
    opacity: 1;
    pointer-events: all;
  }
`

export const BusScheduleHeader = styled.strong`
  text-align: center;
  margin-bottom: 0.4rem;
  min-width: 4rem;
`
