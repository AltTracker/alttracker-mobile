/**
 * @providesModule Portfolio
 **/

import React, { Component } from 'react'
import Flex from 'Flex'
import PortfolioValue from 'PortfolioValue'
import PortfolioPosition, { PortfolioHeader } from 'PortfolioPosition'
import {
  Image,
  ListView,
  Text,
  View
} from 'react-native'
import Container from './Container'
import theme from 'theme'

export default class Portfolio extends Component {
  constructor () {
    super()

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      trades: ds.cloneWithRows([
        { name: 'Bitcoin', symbol: 'BTC', image: 'https://www.cryptocompare.com/media/19633/btc.png', holdings: { value: '$300.00', amount: '1,395.00' }, price: { value: '$30' } },
        { name: 'Bitcoin', symbol: 'BTC', image: 'https://www.cryptocompare.com/media/19633/btc.png', holdings: { value: '$300.00', amount: '1,395.00' }, price: { value: '$30' } },
      ])
    }
  }

  render () {
    return (
      <View>
        <Container
          h='180px'
          align='e'
        >
          <PortfolioValue />
        </Container>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Flex h='100%' w='100%'>
            <ListView
              dataSource={this.state.trades}
              renderSectionHeader={PortfolioHeader}
              renderRow={PortfolioPosition}
            />
          </Flex>
        </View>
      </View>
    )
  }
}
