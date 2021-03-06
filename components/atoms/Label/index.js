/**
 * @providesModule Label
 **/

import styled from 'styled-components/native'

export default styled.Text`
  ${props => props.alt && `color: ${props.theme.palette.textAlt}`}
  font-size: 14px;
`
