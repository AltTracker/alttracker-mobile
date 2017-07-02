import React from 'react'
import styled from 'styled-components/native'

export default styled.View`
  background-color: ${props => props.alt ? props.theme.palette.canvasAlt : props.theme.palette.canvas};
  border-color: lightgray;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  padding-left: 10px;
  padding-right: 10px;

  flex-direction: row;
`
