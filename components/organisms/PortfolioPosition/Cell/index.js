import styled from 'styled-components/native'

export default styled.View`
  ${props => props.full ? 'flex: 1' : ''};
  padding-horizontal: 5;
  padding-vertical: 10;
`
