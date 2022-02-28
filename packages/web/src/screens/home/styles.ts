import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;

  section {
    position: relative;
    margin-bottom: 24px;
    padding-bottom: 24px;
    text-align: center;

    h1 {
      font-size: 2.4rem;
      margin-bottom: 8px;
      padding: 0 8px;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 12px;
      color: #333;
      padding: 0 12px;
    }

    p.disclaimer {
      font-size: 1.6rem;
    }

    .sample {
      color: #888;
      font-size: 1.3rem;
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
    text-align: center;
    transition: all 0.4s;
    max-width: 600px;

    h1 {
      margin-bottom: 16px;
      font-size: 2.4rem;
      color: white;
      padding: 0 12px;
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
