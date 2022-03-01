import { useRouter } from 'next/router'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import * as S from './styles'

export interface ToolbarProps {
  setLoading?: (loading: boolean) => void
}

export const Toolbar: React.FC<ToolbarProps> = ({
  children,
  setLoading = () => null
}) => {
  const router = useRouter()

  function handleBackNavigation() {
    setLoading(true)
    router.push(`/`).finally(() => setLoading(false))
  }

  return (
    <S.Wrapper>
      <S.Content>
        <IoMdArrowBack size={24} onClick={handleBackNavigation} />
        {children}
      </S.Content>
    </S.Wrapper>
  )
}
