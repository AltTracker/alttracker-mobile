/**
 * @providesModule PortfolioAddTrade
 **/

import React, { Component } from 'react'
import { Pages } from 'react-native-pages'
import dismissKeyboard from 'dismissKeyboard'

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

  setPagesRef = comp => {
    this.pages = comp
  }

  toAmountPage = () => {
    this.pages.scrollToPage(1)
  }

  toCostPage = () => {
    this.pages.scrollToPage(2)
  }

  onScrollEnd = (e) => {
    dismissKeyboard()
  }

  render () {
    const { setPagesRef, toAmountPage, toCostPage } = this
    const style = { backgroundColor: theme.palette.primary }

    return (
      <Pages style={style} ref={setPagesRef} onScrollEnd={dismissKeyboard}>
        <CurrencyPage onSubmit={toAmountPage} />
        <AmountObtainedPage onSubmit={toCostPage} />
        <CostPage />
      </Pages>
    )
  }
}
