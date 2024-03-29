import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --lighter-gray: #f4f4f4;
    --ligth-gray: #DDDDDD;
    --gray: #888888;
    --dark-gray: #333333;

    --radius-default: 0.8rem;
    --shadow-default: 1px 1px 3px var(--ligth-gray);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    font-family: 'Noto Sans JP', sans-serif;
  }
`

export default GlobalStyles
