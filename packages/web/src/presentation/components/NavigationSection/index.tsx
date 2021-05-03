import { AiOutlineTrophy, AiFillGithub } from 'react-icons/ai'

import { Profile } from 'domain/models'

import * as S from './styles'

export interface NavigationSectionProps {
  profile?: Profile
}

const NavigationSection = ({ profile }: NavigationSectionProps) => {
  function buildProfileHeader() {
    return (
      <>
        <S.ProfileImage src={profile?.picture} alt="Imagem de perfil" />
        <S.ProfileName>{profile?.name}</S.ProfileName>
        <S.ProfileAwards>
          <AiOutlineTrophy size={16} />
          <S.ProfilePontuation>
            {profile?.pontuation} pontos
          </S.ProfilePontuation>
        </S.ProfileAwards>
      </>
    )
  }

  function buildUnSignedProfileHeader() {
    return (
      <S.GithubSignInButton>
        <AiFillGithub size={20} />
        <span>Entrar com github</span>
      </S.GithubSignInButton>
    )
  }

  return (
    <S.Wrapper>
      <S.NavWrapper>
        <S.NavHeader>
          {profile ? buildProfileHeader() : buildUnSignedProfileHeader()}
        </S.NavHeader>
        <S.NavMenu>
          <S.NavItem active>
            <span>Explorar</span>
          </S.NavItem>
          <S.NavItem>
            <span>Meus projetos</span>
          </S.NavItem>
          <S.NavItem>
            <span>Ranking</span>
          </S.NavItem>
          <S.NavItem>
            <span>Sobre</span>
          </S.NavItem>
        </S.NavMenu>
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default NavigationSection
