import * as TextStyles from 'components/Text/styles'
import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > div {
    max-width: 180px;
  }

  div + div {
    margin-left: 16px;
  }
`

export const Wrapper = styled.footer`
  min-height: 100px;
  background: #000;
  padding: 32px 12px;
  margin: auto;

  ${TextStyles.Wrapper} {
    color: white;
    margin-bottom: 12px;
  }

  ${TextStyles.Wrapper}.title {
    text-align: center;
  }

  ${TextStyles.Wrapper}.link {
    margin-bottom: 8px;
  }

  @media (max-width: 400px) {
    text-align: center;

    ${Content} {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div {
        max-width: max-content;
      }

      div + div {
        margin: 0;
        margin-top: 24px;
      }
    }
  }
`
