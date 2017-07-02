import styled from 'styled-components/native'

export default styled.Text`
  ${props => props.alt && `color: ${props.theme.palette.textAlt}`}
  font-size: 52px;
  font-weight: 300;
  margin-bottom: 4px;
`
