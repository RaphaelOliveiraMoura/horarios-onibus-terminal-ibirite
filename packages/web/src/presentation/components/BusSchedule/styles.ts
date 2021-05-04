import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem;
  padding: 1.4rem;
`

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 2rem;
`

export const BusScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const BusScheduleHourColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const BusScheduleHeader = styled.strong`
  text-align: center;
  margin-bottom: 0.4rem;
  min-width: 4rem;
`

export const BusScheduleItem = styled.div`
  padding: 0.8rem;
  border: 1px solid #eee;
  border-radius: 0.4rem;
  margin: 0.2rem;
`
