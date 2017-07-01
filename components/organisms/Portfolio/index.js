/**
 * @providesModule Portfolio
 **/

import React, { Component } from 'react'
import Flex from 'Flex'
import PortfolioPosition from 'PortfolioPosition'
import {
  Text,
  Image,
  ListView,
  View
} from 'react-native'

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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '95%' }}>
          <ListView
            dataSource={this.state.trades}
            renderRow={PortfolioPosition}
          />
        </View>
      </View>
    )
  }
}