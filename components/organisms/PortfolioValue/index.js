/**
 * @providesModule PortfolioValue
 **/

import React, { Component } from 'react'
import Container from './Container'
import Flex from 'Flex'
import {
  Text,
  View
} from 'react-native'
import Label from 'Label'
import TextMain from './TextMain'
import GainValue from './GainValue'

export default class PortfolioValue extends Component {
  render () {
    return (
      <Container dir='ttb' just='c' align='c' w='100%'>
        <Label>Your portfolio</Label>
        <TextMain>$4,000</TextMain>
        <GainValue>+$965.00</GainValue>
      </Container>
    )
  }
}
