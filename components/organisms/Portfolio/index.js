/**
 * @providesModule Portfolio
 **/

import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import Flex from 'Flex'
import PortfolioValue from 'PortfolioValue'
import PortfolioPosition, { PortfolioHeader } from 'PortfolioPosition'
import {
  Image,
  ListView,
  Text,
  View
} from 'react-native'
import Button from 'CAButton'
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

  onAddTrade = () => {
    const action = NavigationActions.navigate({ routeName: 'PortfolioAddTrade' })

    this.props.navigation.dispatch(action)
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
        <Button onPress={this.onAddTrade} title='Add' />
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
