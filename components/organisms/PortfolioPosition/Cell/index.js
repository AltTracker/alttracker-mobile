import styled from 'styled-components/native'

export default styled.View`
  ${props => props.full ? 'flex: 1' : ''};
  ${props => props.centered ? 'justify-content: center;' : ''};
  ${props => props.firstCell ? 'width: 60px' : ''};
  padding-horizontal: 5;
  padding-vertical: 5;
`
