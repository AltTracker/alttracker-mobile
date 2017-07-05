import React, { Component } from 'react'
import Fuse from 'fuse.js'

import { Text, View } from 'react-native'
import Flex from 'Flex'
import PageContainer from '../PageContainer'
import FormItem from 'FormItem'
import FormLabel from '../Label'
import FormInput from '../Input'
import List from './List'
import data from '../data'

const dataArray = Object.keys(data).map(k => data[k])

class CurrencyPage extends Component {
  state = {
    searchString: 'a',
    currencyFuzzy: new Fuse(dataArray, {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['Name', 'CoinName']
    })
  }

  onChange = (searchString) => {
    this.setState({ searchString })
  }

  getRelevantCurrencies = () => {
    const { searchString, currencyFuzzy } = this.state
    const results = currencyFuzzy.search(searchString)

    return results
  }

  render () {
    const { getRelevantCurrencies } = this
    const { children, progress, ...props } = this.props

    const style = {
      transform: [{
        translateY: progress.interpolate({
          inputRange: [-0.5, 0, 0.5],
          outputRange: [250, 0, -250]
        })
      }]
    }

    return (
      <PageContainer attachToTop>
        <FormItem
          label={<FormLabel style={style}>CURRENCY</FormLabel>}
          input={<FormInput onChange={this.onChange} noMarginBottom />}
        />
        <List
          data={getRelevantCurrencies()}
        />
      </PageContainer>
    )
  }
}

export default CurrencyPage
