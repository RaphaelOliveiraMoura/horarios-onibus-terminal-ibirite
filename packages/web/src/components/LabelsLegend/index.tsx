import { BusModifiers } from 'models'
import { modifiersMap } from 'components/ModifiersTooltip'

import * as S from './styles'

export type LabelsLegendProps = {
  labels: { [key in BusModifiers]?: string }
}

const LabelsLegend: React.FC<LabelsLegendProps> = ({ labels }) => {
  const labelsEntries = Object.entries(labels)

  if (labelsEntries.length === 0) return <></>

  return (
    <S.Wrapper>
      {labelsEntries.map(([modifier, text]) => (
        <S.LegendItem key={modifier}>
          {modifiersMap[modifier as BusModifiers](modifier)}
          <span>{text}</span>
        </S.LegendItem>
      ))}
    </S.Wrapper>
  )
}

export default LabelsLegend
