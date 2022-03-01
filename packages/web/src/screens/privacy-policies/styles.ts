import { TextStyles } from 'components/Text'
import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;

  header {
    width: 100%;
    height: 60px;
    box-shadow: #c9bcbc 0em 2px 3px 0px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
  }

  .content {
    padding: 12px 26px;

    & ${TextStyles.Wrapper} {
      margin-bottom: 12px;
      text-align: justify;
    }

    ${TextStyles.Wrapper}.title {
      text-align: start;
    }

    ul {
      padding-left: 16px;
    }
  }
`
