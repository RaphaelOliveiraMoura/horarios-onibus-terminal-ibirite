import AsyncSelect from 'react-select'

import * as S from './styles'

export type AutoCompleteProps = {
  options: { value: string; label: string }[]
  label: string
  placeholder: string
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  label,
  placeholder
}) => {
  return (
    <S.Wrapper>
      <AsyncSelect
        options={options}
        aria-label={label}
        placeholder={placeholder}
        isSearchable
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </S.Wrapper>
  )
}

export default AutoComplete
