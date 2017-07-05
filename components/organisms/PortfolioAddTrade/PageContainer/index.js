import styled from 'styled-components/native'

export default styled.View`
  flex: 1;
  margin-horizontal: 10px;
  margin-vertical: 20px;
  padding-horizontal: 20px;
  ${props => !props.attachToTop && 'justify-content: center;'}
  ${props => props.attachToTop && 'padding-top: 10px;'}
`
