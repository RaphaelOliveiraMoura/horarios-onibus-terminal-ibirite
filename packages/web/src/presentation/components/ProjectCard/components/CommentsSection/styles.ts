import styled, { css } from 'styled-components'

type CommentsSectionProps = {
  isOpen: boolean
}

export const CommentsSection = styled.section<CommentsSectionProps>`
  margin-top: 2rem;
  padding-top: 2rem;
  position: relative;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      overflow: hidden;
      max-height: 0;
      margin-top: 0;
      padding-top: 0;
    `};

  &::before {
    ${({ isOpen }) =>
      isOpen &&
      css`
        content: '';
      `}

    width: 80%;
    height: 1px;
    background-color: var(--ligth-gray);
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const CommentsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    cursor: pointer;
    transition: color 0.4s;
    color: var(--dark-gray);
  }

  & svg:hover {
    color: #000;
  }
`

export const ProfilePicture = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 100%;
`

export const CommentTextarea = styled.textarea`
  padding: 0.6rem 1rem;
  border: 1px solid var(--ligth-gray);
  border-radius: var(--radius-default);
  outline: none;
  font-size: 1rem;
  margin: 0 0.8rem;
  width: 100%;
  resize: none;

  &:focus {
    box-shadow: var(--shadow-default);
  }
`

export const CommentsList = styled.ul`
  margin-top: 1.2rem;
`

export const CommentWrapper = styled.li`
  list-style: none;
`

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.8rem;
  position: relative;
  padding-bottom: 1.6rem;
`

export const CommentProfileImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 100%;
`

export const CommentText = styled.p`
  margin-left: 0.8rem;
  background-color: var(--lighter-gray);
  border-radius: var(--radius-default);
  align-self: stretch;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.4rem 0.8rem;
  color: var(--dark-gray);
  overflow-wrap: anywhere;
`

export const CommentActions = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`

type CommentActionProps = {
  liked?: boolean
}

export const CommentAction = styled.p<CommentActionProps>`
  margin-left: 0.8rem;
  cursor: pointer;
  color: var(--dark-gray);
  transition: color 0.4s;
  user-select: none;

  ${({ liked }) =>
    liked &&
    css`
      font-weight: bold;
    `}

  &:hover {
    color: #000;
  }
`
export const CommentReplies = styled.ul`
  list-style: none;
`

export const ReplyCommentItem = styled.li`
  margin-left: 4rem;
`

type CommentReplyProps = {
  replying: boolean
}

export const CommentReply = styled.div<CommentReplyProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.8rem;
  margin-bottom: 1.2rem;

  display: ${({ replying }) => (replying ? 'flex' : 'none')};

  & svg {
    cursor: pointer;
    transition: color 0.4s;
    color: var(--dark-gray);
  }

  & svg:hover {
    color: #000;
  }
`
