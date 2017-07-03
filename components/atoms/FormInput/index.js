/**
 * @providesModule FormInput
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import styled, { withTheme } from 'styled-components/native'

const Styled = styled.TextInput`
  border-color: ${props => props.focused ? props.theme.palette.primary : '#d1d1d1'};
  border-radius: 7;
  border-width: 1;
  padding: 10px;
  margin-bottom: 18px;
`

class FormInput extends Component {
  static defaultProps = {
    type: 'text'
  }

  state = {
    focused: false
  }

  onFocus = _ => {
    this.setState({ focused: true })
  }

  onBlur = _ => {
    this.setState({ focused: false })
  }

  onChangeText = text => {
    const { type } = this.props

    if (type === 'number') {
      if (isNaN(text)) {
        return false
      }
    }

    this.props.onChange(text)
  }

  render () {
    const { onFocus, onBlur, onChangeText } = this
    const { focused } = this.state
    const { children, theme, type, onChange: omitA, onChangeText: omitB, ...props } = this.props

    return (
      <Styled
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        underlineColorAndroid='rgba(0,0,0,0)'
        focused={focused}
        onFocus={onFocus}
        onBlur={onBlur}
        selectionColor={theme.palette.primary}
        onChangeText={onChangeText}
        {...props}
      >
        {children}
      </Styled>
    )
  }
}

export default withTheme(FormInput)
