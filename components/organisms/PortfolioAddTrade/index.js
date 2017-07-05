/**
 * @providesModule PortfolioAddTrade
 **/

import React, { Component } from 'react'
import { Pages } from 'react-native-pages'

import CurrencyPage from './CurrencyPage'
import AmountObtainedPage from './AmountObtainedPage'
import CostPage from './CostPage'
import theme from '../../theme'

export default class PortfolioAddTrade extends Component {
  state = {
    number: '0'
  }

  onChangeNumber = (number) => {
    this.setState({ number })
  }

  render () {
    const style = { backgroundColor: theme.palette.primary }

    return (
      <Pages style={style}>
        <CurrencyPage />
        <AmountObtainedPage />
        <CostPage />
      </Pages>
    )
  }
}
