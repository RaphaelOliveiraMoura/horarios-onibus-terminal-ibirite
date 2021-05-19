import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.6rem;
`

export const BusLineTitle = styled.h2`
  text-align: center;
  margin-top: 1.6rem;
  font-weight: normal;

  strong {
    font-weight: bold;
  }
`

export const BusScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const UpdateButton = styled.button`
  cursor: pointer;
  padding: 6px 22px;
  background: #a0937d;
  border: none;
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: all 0.4s;

  &:hover {
    background: #8e9775;
  }

  &:focus {
    box-shadow: 1px 1px 3px #a0937d;
  }
`
