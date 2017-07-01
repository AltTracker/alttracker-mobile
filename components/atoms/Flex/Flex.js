import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

export default styled(
  ({
    children,
    h,
    w,
    justifyContent,
    flexDirection,
    flexGrow,
    flexWrap,
    alignContent,
    alignItems,
    alignSelf,
    ...props
  }) => (
    <View {...props}>{children}</View>
  )
)`
  height: ${props => props.h};
  width: ${props => props.w};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
`
