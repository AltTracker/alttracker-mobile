/**
 * @providesModule PortfolioAddTrade
 **/

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FormItem from 'FormItem'
import FormLabel from 'FormLabel'
import FormInput from 'FormInput'

export default class PortfolioAddTrade extends Component {
  state = {
    number: '0'
  }

  onChangeNumber = (number) => {
    this.setState({ number })
  }

  render () {
    const { onChangeNumber } = this
    const { number } = this.state

    return (
      <View>
        <FormItem
          label={<FormLabel>Currency</FormLabel>}
          input={<FormInput />}
        />
        <FormItem
          label={<FormLabel>Amount</FormLabel>}
          input={<FormInput type='number' value={number} onChange={onChangeNumber} />}
        />
      </View>
    )
  }
}
