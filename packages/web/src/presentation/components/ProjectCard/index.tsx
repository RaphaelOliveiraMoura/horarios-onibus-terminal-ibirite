import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart, AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'

import Tooltip from 'presentation/components/Tooltip'
import { Profile, Project } from 'domain/models'

import * as S from './styles'
import CommentsSection from './components/CommentsSection'
import { CommentNotFound, CommentReplyNotFound } from './errors'

export type ProjectCardProps = {
  handleLikeProject?: (isLiking: boolean) => void
  handleLikeComment?: (commentId: string, isLiking: boolean) => void
  handleLikeReplyComment?: (
    commentId: string,
    commentReplyId: string,
    isLiking: boolean
  ) => void
  project: Project
  profile: Profile
}

const ProjectCard = ({
  handleLikeProject = () => null,
  handleLikeComment = () => null,
  handleLikeReplyComment = () => null,
  project,
  profile
}: ProjectCardProps) => {
  const [commentsIsOpen, setCommentsOpen] = useState(false)

  const [commentsState, setCommentsState] = useState([...project.comments])
  const [selfProjectLike, setSelfProjectLike] = useState(project.liked)

  function onLikeProject() {
    const isLiking = !selfProjectLike
    setSelfProjectLike(isLiking)
    handleLikeProject(isLiking)
  }

  function onLikeComment(commentId: string) {
    const commentsDraft = [...commentsState]
    const findedComment = commentsDraft.find(({ id }) => id === commentId)

    if (!findedComment) throw new CommentNotFound()

    const isLiking = !findedComment.liked
    findedComment.liked = isLiking

    setCommentsState([...commentsDraft])
    handleLikeComment(commentId, isLiking)
  }

  function onLikeReplyComment(commentId: string, replyCommentId: string) {
    const commentsDraft = [...commentsState]
    const findedComment = commentsDraft.find(({ id }) => id === commentId)

    if (!findedComment) throw new CommentNotFound()

    const findedReplyComment = findedComment.replies.find(
      ({ id }) => id === replyCommentId
    )
    if (!findedReplyComment) throw new CommentReplyNotFound()

    const isLiking = !findedReplyComment.liked
    findedReplyComment.liked = isLiking

    setCommentsState([...commentsDraft])
    handleLikeReplyComment(commentId, replyCommentId, isLiking)
  }

  return (
    <S.Wrapper>
      <S.ProjectContainer>
        <S.CardHeader>
          <S.TechList>
            {project.techs.map((tech) => (
              <S.TechListItem key={tech.id}>{tech.name}</S.TechListItem>
            ))}
          </S.TechList>
          <S.LastUpdate>{project.lastUpdate}</S.LastUpdate>
        </S.CardHeader>

        <S.CardContent>
          <S.ProjectPicture src={project.picture} />
          <div>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
          </div>
        </S.CardContent>

        <S.CardFooter>
          <S.CardAction>
            <Tooltip text="Link do projeto">
              <AiFillGithub size={20} />
            </Tooltip>
          </S.CardAction>
          <S.CardAction onClick={() => setCommentsOpen((prev) => !prev)}>
            <Tooltip text="Comentários">
              <BiCommentDetail size={20} title="comments" />
            </Tooltip>
          </S.CardAction>
          <S.CardAction onClick={onLikeProject}>
            {selfProjectLike ? (
              <Tooltip text="Desfazer Like">
                <AiFillHeart size={20} title="filled-like" />
              </Tooltip>
            ) : (
              <Tooltip text="Gostei">
                <AiOutlineHeart size={20} title="outlined-like" />
              </Tooltip>
            )}
          </S.CardAction>
        </S.CardFooter>
      </S.ProjectContainer>

      <CommentsSection
        onLikeComment={onLikeComment}
        onLikeReplyComment={onLikeReplyComment}
        open={commentsIsOpen}
        profile={profile}
        project={project}
      />
    </S.Wrapper>
  )
}

export default ProjectCard
