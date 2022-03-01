import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: #c9bcbc 0em 2px 3px 0px;
  padding: 0 2rem;

  .content {
    width: 100%;
    height: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    div.input {
      max-width: 300px;
      width: 100%;
    }

    svg {
      cursor: pointer;
      margin-right: 8px;
    }
  }
`
