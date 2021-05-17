import styled from 'styled-components'
import Tooltip from '../Tooltip'

type WidgetProps = {
  color?: string
  background?: string
}

export const Widget = styled(Tooltip)<WidgetProps>`
  background: ${({ background }) => background || '#333'};
  color: ${({ color }) => color || '#fff'};
  border-radius: 100%;
  padding: 4px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -4px;

  & > div {
    display: flex;
    cursor: pointer;
  }

  span {
    font-size: 0.7rem;
  }
`
