import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import GridView from 'react-native-super-grid'
import Item from '../Item'

export default class List extends Component {
  static defaultProps = {
    onSubmit: _ => {}
  }

  onSelectItem = props => {
    this.props.onSubmit(props)
  }

  render () {
    const { renderItem } = this
    const { data } = this.props

    return (
      <GridView
        enableEmptySections
        itemWidth={90}
        items={Object.keys(data).map(k => data[k])}
        renderItem={renderItem}
      />
    )
  }

  renderItem = ({ children, ...props }) => {
    return (
      <Item onPress={_ => this.props.onSubmit(props)} {...props}>{children}</Item>
    )
  }
}
