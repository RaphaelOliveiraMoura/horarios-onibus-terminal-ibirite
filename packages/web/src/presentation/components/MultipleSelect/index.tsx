import AsyncSelect from 'react-select/async'

import * as S from './styles'

const MultipleSelect = () => {
  async function loadOptions() {
    return [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'nextjs', label: 'NextJs' },
      { value: 'python', label: 'Python' }
    ]
  }

  return (
    <S.Wrapper>
      <AsyncSelect
        cacheOptions
        isMulti
        defaultOptions
        placeholder="Filtrar po Tecnologias"
        className="react-select-container"
        classNamePrefix="react-select"
        loadOptions={loadOptions}
      />
    </S.Wrapper>
  )
}

export default MultipleSelect
