/**
 * @providesModule PortfolioPosition
 **/

import React from 'react'
import Flex from 'Flex'
import Cell from './Cell'
import TextMain from './TextMain'
import TextSub from './TextSub'
import {
  Image,
  Text,
  View
} from 'react-native'

export default ({ name, symbol, image, holdings, price }) => (
  <Flex dir='ltr' just='center' align='center'>
    <Cell>
      <Flex just='center' align='center' w='10%'>
        <Image style={{width: 30, height: 30}} source={{uri: image}} />
      </Flex>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{symbol}</Text>
    </Cell>
    <Cell full>
      <TextMain>{holdings.value}</TextMain>
      <TextSub>{holdings.value}</TextSub>
    </Cell>
    <Cell full>
      <TextMain>{holdings.value}</TextMain>
      <TextSub negative>-17.4%</TextSub>
    </Cell>
  </Flex>
)
