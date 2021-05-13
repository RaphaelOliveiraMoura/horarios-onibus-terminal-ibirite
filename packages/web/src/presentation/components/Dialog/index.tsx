import * as S from './styles'

type DialogProps = {
  isOpen: boolean
  close: () => void
}

export const Dialog: React.FC<DialogProps> = ({ children, isOpen, close }) => {
  return (
    <S.Dialog isOpen={isOpen} onClick={close}>
      <S.DialogContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.DialogContent>
    </S.Dialog>
  )
}
