import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import PageContainer from '../PageContainer'
import Flex from 'Flex'
import FormItem from 'FormItem'
import FormLabel from '../Label'
import FormInput from '../Input'

const Label = styled.Text`
  color: rgba(255, 255, 255, ${props => props.active ? 1 : 0.25});
  margin-horizontal: 15px;
`

export default ({ children, progress, ...props }) => {
  const style = {
    transform: [{
      translateY: progress.interpolate({
        inputRange: [-0.5, 0, 0.5],
        outputRange: [250, 0, -250]
      })
    }]
  }

  return (
    <PageContainer>
      <FormLabel style={style}>COST</FormLabel>
      <FormInput placeholder='0' type='number' onChange={_ => {}} />
      <Flex dir='ltr'>
        <Label active>PER COIN</Label>
        <Label>TOTAL</Label>
      </Flex>
    </PageContainer>
  )
}
