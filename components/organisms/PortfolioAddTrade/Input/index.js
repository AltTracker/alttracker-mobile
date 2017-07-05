import React from 'react'
import styled from 'styled-components/native'
import FormInput from 'FormInput'

export default styled(props => <FormInput selectionColor='white' {...props} />)`
  color: white;
  height: 74px;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 18px;

  border-color: white;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  padding: 10px;
  margin-bottom: ${props => props.noMarginBottom ? '0' : '18px'};
`
