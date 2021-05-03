import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

import * as S from './styles'

import Tooltip from 'presentation/components/Tooltip'

interface Profile {
  picture: string
}

interface Comment {
  id: string
  text: string
  profile: Profile
  liked: boolean
  replies: Array<Omit<Comment, 'replies'>>
}

interface Project {
  id: string
  title: string
  description: string
  picture: string
  lastUpdate: string
  liked: boolean
  techs: Array<{ id: string; name: string }>
  comments: Array<Comment>
}

type CommentsSectionProps = {
  profile: Profile
  project: Project
  onLikeComment: (commentId: string) => void
  onLikeReplyComment: (commentId: string, commentReplyId: string) => void
  open: boolean
}

const CommentsSection = ({
  profile,
  project,
  onLikeComment,
  onLikeReplyComment,
  open
}: CommentsSectionProps) => {
  const [answering, setAnswering] = useState('')

  function isAnswering(commentId: string, replyCommentId = '') {
    const [aCommentId, aReplyCommentId] = answering.split(':')
    return aCommentId === commentId && aReplyCommentId === replyCommentId
  }

  function handleOpenReplyComment(commentId: string, replyCommentId = '') {
    const key = `${commentId}:${replyCommentId}`
    if (answering === key) {
      setAnswering('')
    } else {
      setAnswering(key)
    }
  }

  return (
    <S.CommentsSection aria-label="comments" aria-hidden={!open} isOpen={open}>
      <S.CommentsHeader>
        <S.ProfilePicture src={profile.picture} />
        <S.CommentTextarea placeholder="Adicione um comentário" />
        <Tooltip text="Enviar comentário">
          <AiOutlineSend size={18} />
        </Tooltip>
      </S.CommentsHeader>
      <S.CommentsList>
        {project.comments.map((comment) => (
          <S.CommentWrapper key={comment.id}>
            <S.CommentItem>
              <S.CommentProfileImage src={comment.profile.picture} />
              <S.CommentText>{comment.text}</S.CommentText>
              <S.CommentActions>
                <S.CommentAction
                  liked={comment.liked}
                  onClick={() => onLikeComment(comment.id)}
                >
                  Curtir
                </S.CommentAction>
                <S.CommentAction
                  onClick={() => handleOpenReplyComment(comment.id)}
                >
                  Responder
                </S.CommentAction>
              </S.CommentActions>
            </S.CommentItem>
            <S.CommentReply replying={isAnswering(comment.id)}>
              <S.ProfilePicture src={profile.picture} />
              <S.CommentTextarea placeholder="Responder comentário" />
              <Tooltip text="Responder">
                <AiOutlineSend size={18} />
              </Tooltip>
            </S.CommentReply>
            <S.CommentReplies>
              {comment.replies.map((replyComment) => (
                <S.ReplyCommentItem key={replyComment.id}>
                  <S.CommentItem>
                    <S.CommentProfileImage src={replyComment.profile.picture} />
                    <S.CommentText>{replyComment.text}</S.CommentText>
                    <S.CommentActions>
                      <S.CommentAction
                        liked={replyComment.liked}
                        onClick={() =>
                          onLikeReplyComment(comment.id, replyComment.id)
                        }
                      >
                        Curtir
                      </S.CommentAction>
                      <S.CommentAction
                        onClick={() =>
                          handleOpenReplyComment(comment.id, replyComment.id)
                        }
                      >
                        Responder
                      </S.CommentAction>
                    </S.CommentActions>
                  </S.CommentItem>
                  <S.CommentReply
                    replying={isAnswering(comment.id, replyComment.id)}
                  >
                    <S.ProfilePicture src={profile.picture} />
                    <S.CommentTextarea placeholder="Responder comentário" />
                    <Tooltip text="Responder">
                      <AiOutlineSend size={18} />
                    </Tooltip>
                  </S.CommentReply>
                </S.ReplyCommentItem>
              ))}
            </S.CommentReplies>
          </S.CommentWrapper>
        ))}
      </S.CommentsList>
    </S.CommentsSection>
  )
}

export default CommentsSection
