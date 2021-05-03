import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  max-width: 26rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

export const NavWrapper = styled.nav`
  max-width: 26rem;
  height: 100vh;
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 3.2rem 0;
  color: var(--dark-gray);
`

export const NavHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProfileImage = styled.img`
  height: 12.4rem;
  border-radius: 100%;
`

export const ProfileName = styled.h3`
  font-size: 1.4rem;
  margin-top: 0.8rem;
`

export const ProfileAwards = styled.div`
  display: flex;
  align-items: center;
`

export const GithubSignInButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #2f2653;
  border-radius: var(--radius-default);
  background: #fff;
  color: #2f2653;
  padding: 0.8rem 1.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.4s;
  outline: none;

  &:hover {
    background: #2f2653;
    color: #fff;
  }

  &:focus {
    box-shadow: 1px 1px 3px #2f2653;
  }

  & > span {
    margin-left: 0.8rem;
  }
`

export const ProfilePontuation = styled.span`
  font-size: 1.2rem;
  margin-top: 4px;
`

export const NavMenu = styled.ul`
  margin-top: 4rem;
  list-style: none;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
`

type NavItemProps = {
  active?: boolean
}

const activeModifiers = {
  active: css`
    border: 1px solid var(--ligth-gray);
    border-radius: var(--radius-default);
    transform: translateX(2rem);
    box-shadow: var(--shadow-default);

    & > span {
      transform: translateX(-2rem);
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 2rem;
      height: 100%;
      background: #fff;
      border-top-right-radius: var(--radius-default);
      border-bottom-right-radius: var(--radius-default);
    }
  `,
  inactive: css`
    background: #f9f9f9;
  `
}

export const NavItem = styled.li<NavItemProps>`
  width: 100%;
  height: 4rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ active }) => active && activeModifiers.active};
  ${({ active }) => !active && activeModifiers.inactive};

  &:hover {
    ${activeModifiers.active}
    background: ${({ active }) => !active && '#f3f2f2'};
  }

  &,
  & > span {
    transition: background, transform 0.2s;
  }

  & + & {
    margin-top: 0.8rem;
  }
`
