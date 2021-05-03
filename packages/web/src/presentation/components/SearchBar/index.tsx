import { useState } from 'react'
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai'

import * as S from './styles'

import MultipleSelect from 'presentation/components/MultipleSelect'
import Tooltip from 'presentation/components/Tooltip'

enum SortTypes {
  relevance,
  date
}

const SearchBar = () => {
  const [detailedFiltersIsOpen, setDetailedFiltersOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.SearchHeader>
        <S.SearchInputWrapper>
          <S.SearchInput placeholder="Pesquise por projetos, usuários ou tecnologias" />
          <AiOutlineSearch size={20} />
        </S.SearchInputWrapper>

        <Tooltip
          text={detailedFiltersIsOpen ? 'Esconder filtros' : 'Mostrar filtros'}
          position="bottom"
        >
          <S.FiltersIconWrapper
            onClick={() => setDetailedFiltersOpen((prev) => !prev)}
          >
            <AiOutlineFilter size={20} title="filters" />
          </S.FiltersIconWrapper>
        </Tooltip>
      </S.SearchHeader>

      <S.SearchFilters
        aria-label="filters"
        aria-hidden={!detailedFiltersIsOpen}
        open={detailedFiltersIsOpen}
      >
        <MultipleSelect />
        <S.RadioGroup>
          <S.RadioTitle>Ordenar por</S.RadioTitle>
          <div>
            <S.RadioLabel>
              <S.Radio
                type="radio"
                name="sort"
                value={SortTypes.date}
                defaultChecked
              />
              Data de publicação
            </S.RadioLabel>

            <S.RadioLabel>
              <S.Radio type="radio" name="sort" value={SortTypes.relevance} />
              Relevância
            </S.RadioLabel>
          </div>
        </S.RadioGroup>
      </S.SearchFilters>
    </S.Wrapper>
  )
}

export default SearchBar
