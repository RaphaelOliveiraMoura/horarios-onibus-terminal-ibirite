import { TextStyles } from 'components/Text'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;

  section {
    position: relative;
    margin-bottom: 24px;
    padding-bottom: 24px;
    text-align: center;

    ${TextStyles.Wrapper} {
      margin-bottom: 12px;
      padding: 0 12px;
    }

    ${TextStyles.Wrapper}.title {
      margin-bottom: 8px;
      padding: 0 8px;
    }

    span${TextStyles.Wrapper}, ${TextStyles.Wrapper}.subtitle {
      padding: 0;
      margin: 0;
    }

    ul {
      margin-bottom: 12px;
      font-size: 1.4rem;
      width: 100%;
      border: 2px dashed #ddd;
      color: #444;
      padding: 12px;

      li {
        list-style: none;
      }
    }
  }

  section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    border-radius: 4px;
    background-color: #eee;
  }

  section.updated-lines {
    padding-top: 64px;
  }
`

type BackgroundContainerProps = {
  $inputFocused: boolean
}

export const BackgroundContainer = styled.header<BackgroundContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;

  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 8px;
    z-index: 1;
    transition: all 0.4s;
    max-width: 600px;

    ${TextStyles.Wrapper}.title {
      margin-bottom: 16px;
      color: white;
      padding: 0 12px;
      text-align: center;
    }

    .react-select-container {
      font-size: 1.7rem;
    }

    .react-select__menu-list {
      max-height: 800px;
    }

    input {
      height: 40px;
    }

    ${(p) =>
      p.$inputFocused &&
      css`
        top: 8px;
        transform: translateY(0);
      `}
  }

  img.background {
    filter: blur(1px) brightness(45%);
    object-fit: cover;
    width: 100vw;
    height: 500px;
  }

  img.bus {
    position: absolute;
    object-fit: cover;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(30%);
    max-height: 200px;
  }
`
