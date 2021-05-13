import AsyncSelect from 'react-select'

import * as S from './styles'

export type Option = { value: string; label: string }

export type AutoCompleteProps = {
  id: string
  defaultValue?: string
  options: Option[]
  label: string
  placeholder: string
  onChange?: (input: Option | null) => void
  onFocus?: () => void
  onBlur?: () => void
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  id,
  defaultValue = '',
  onChange = () => '',
  onFocus,
  onBlur,
  options,
  label,
  placeholder
}) => {
  return (
    <S.Wrapper>
      <AsyncSelect
        inputId={id}
        defaultInputValue={defaultValue}
        onChange={onChange}
        options={options}
        aria-label={label}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        isSearchable
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </S.Wrapper>
  )
}

export default AutoComplete
