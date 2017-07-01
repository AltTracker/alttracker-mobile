import styled from 'styled-components/native'

export default styled.Text`
  ${props => props.negative && 'color: red;'}
  font-size: 15px;
  text-align: right;
`
