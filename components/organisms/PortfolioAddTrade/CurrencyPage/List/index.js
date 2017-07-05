import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import GridView from 'react-native-super-grid'
import Item from '../Item'

export default class List extends Component {
  constructor (props) {
    super()
  }

  render () {
    const { data } = this.props

    return (
      <GridView
        enableEmptySections
        itemWidth={90}
        items={Object.keys(data).map(k => data[k])}
        renderItem={Item}
      />
    )
  }
}
