/**
 * @providesModule PortfolioValue
 **/

import React, { Component } from 'react'
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
      <Flex dir='ltr' just='b'>
        <View>
          <Label>Your portfolio</Label>
          <TextMain>$4,000</TextMain>
        </View>
        <View>
          <Label>Total Gain/Loss</Label>
          <GainValue>+$965.00</GainValue>
        </View>
      </Flex>
    )
  }
}
