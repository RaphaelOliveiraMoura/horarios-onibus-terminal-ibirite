import * as S from './styles'

type AlertBannerProps = {
  text: string
  className?: string
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  text,
  className
}) => {
  return <S.Wrapper className={className}>{text}</S.Wrapper>
}
