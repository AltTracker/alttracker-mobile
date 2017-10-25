import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import GridView from 'Grid'
import Item from '../Item'

export default class List extends Component {
  state = {
    items: []
  }

  static defaultProps = {
    onSubmit: _ => {}
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        items: Object
          .keys(nextProps.data)
          .map(k => nextProps.data[k])
      })
    }
  }

  onSelectItem = props => {
    this.props.onSubmit(props)
  }

  addId = (a, b) => a.Id + b.Id

  keyExtractor = (item, index) => item.reduce(this.addId, '')

  render () {
    const { renderItem } = this
    const { data } = this.props

    return (
      <GridView
        enableEmptySections
        itemWidth={90}
        items={this.state.items}
        renderItem={renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }

  renderItem = ({ children, ...props }) => {
    return (
      <Item onPress={_ => this.props.onSubmit(props)} {...props}>{children}</Item>
    )
  }
}
