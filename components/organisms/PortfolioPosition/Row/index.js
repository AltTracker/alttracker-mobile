import React from 'react'
import styled from 'styled-components/native'

export default styled.View`
  background-color: ${props => props.theme.palette.canvas};
  border-color: lightgray;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;

  flex-direction: row;
`
