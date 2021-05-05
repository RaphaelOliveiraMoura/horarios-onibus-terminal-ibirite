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

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 1.6rem;
  }
`

export const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  padding: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;

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

  @media (max-width: 1350px) {
    display: grid;
    grid-template-columns: repeat(20, 2fr);
    grid-gap: 0.4rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(14, 2fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(8, 2fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(6, 2fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(4, 2fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(3, 2fr);
  }
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
`
