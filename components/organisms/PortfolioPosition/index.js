/**
 * @providesModule PortfolioPosition
 **/

import React from 'react'
import Flex from 'Flex'
import Row from './Row'
import Cell from './Cell'
import TextMain from './TextMain'
import TextSub from './TextSub'
import {
  Image,
  Text,
  View
} from 'react-native'

const style = {
  text: {
    fontWeight: 'bold'
  }
}

export const PortfolioHeader = () => (
  <Row alt>
    <Cell firstCell>
    </Cell>
    <Cell full>
      <TextMain style={style.text}>Holdings</TextMain>
    </Cell>
    <Cell full>
      <TextMain style={style.text}>Price</TextMain>
    </Cell>
  </Row>
)

export default ({ name, symbol, image, holdings, price }) => (
  <Row>
    <Cell firstCell>
      <Flex just='c' align='c' w='100%'>
        <Image style={{width: 30, height: 30}} source={{uri: image}} />
      </Flex>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{symbol}</Text>
    </Cell>
    <Cell full centered>
      <TextMain>{holdings.value}</TextMain>
      <TextSub>{holdings.value}</TextSub>
    </Cell>
    <Cell full centered>
      <TextMain>{holdings.value}</TextMain>
      <TextSub negative>-17.4%</TextSub>
    </Cell>
  </Row>
)
