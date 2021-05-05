import AsyncSelect from 'react-select'

import * as S from './styles'

export type AutoCompleteProps = {
  defaultValue?: string
  onChange?: (input: { value: string; label: string } | null) => void
  options: { value: string; label: string }[]
  label: string
  placeholder: string
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  defaultValue = '',
  onChange = () => '',
  options,
  label,
  placeholder
}) => {
  return (
    <S.Wrapper>
      <AsyncSelect
        defaultInputValue={defaultValue}
        onChange={onChange}
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
