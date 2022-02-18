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
  font-size: 1.2rem;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 1.6rem;
  }
`

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  padding: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
  z-index: 5;

  @media (max-width: 1000px) {
    position: sticky;
    top: 0;
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
`

export const BusScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const BusScheduleHourColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    margin-bottom: 4rem;
  }
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
  position: relative;
`

export const WidgetsContainer = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  display: flex;
`
