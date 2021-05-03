import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 40rem;
  border-radius: var(--radius-default);
  border: 1px solid var(--ligth-gray);
  padding: 1.6rem 2.4rem;
`

export const ProjectContainer = styled.article`
  position: relative;
`

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-gray);
`

export const TechList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  max-width: 25rem;
  flex-wrap: wrap;
`

export const TechListItem = styled.li`
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.4rem;

  & + li {
    margin-left: 0.4rem;
  }
`

export const LastUpdate = styled.div`
  color: var(--gray);
`

export const CardContent = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  & > div {
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
  }
`

export const ProjectPicture = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
`

export const ProjectTitle = styled.h1`
  overflow-wrap: anywhere;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const ProjectDescription = styled.p`
  margin-top: 0.8rem;
  color: var(--dark-gray);

  overflow-wrap: anywhere;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 1.6rem;

  & > div + div {
    margin-left: 0.8rem;
  }
`

export const CardAction = styled.div`
  cursor: pointer;

  svg {
    transition: color 0.4s;
    color: var(--dark-gray);
  }

  &:hover svg {
    color: #000;
  }
`
