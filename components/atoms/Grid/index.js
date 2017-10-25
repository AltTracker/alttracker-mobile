/**
 * @providesModule Grid
 **/

// based on https://github.com/saleel/react-native-super-grid
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'

function chunkArray(array, size) {
  return array.reduce((acc, val) => {
    if (acc.length === 0) acc.push([]);
    const last = acc[acc.length - 1];
    if (last.length < size) {
      last.push(val);
    } else {
      acc.push([val]);
    }
    return acc;
  }, []);
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 10
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  item: {
    alignSelf: 'center'
  }
})

class SuperGrid extends Component {
  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.onLayout = this.onLayout.bind(this)
    this.getDimensions = this.getDimensions.bind(this)

    const dimensions = this.getDimensions()
    this.state = {
      dimensions,
      rows: chunkArray(props.items, dimensions.itemsPerRow)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.items !== nextProps.items) {
      const itemsPerRow = this.state.dimensions.itemsPerRow

      this.setState({
        rows: chunkArray(nextProps.items, itemsPerRow)
      })
    }
  }

  onLayout (e) {
    if (!this.props.staticWidth) {
      const { width } = e.nativeEvent.layout || {}

      const dimensions = this.getDimensions(width)
      this.setState({
        dimensions,
        rows: chunkArray(this.props.items, dimensions.itemsPerRow)
      })
    }
  }

  getDimensions (lvWidth) {
    const { items, itemWidth, spacing, fixed, staticWidth } = this.props
    const totalWidth = lvWidth || staticWidth || Dimensions.get('window').width
    const itemTotalWidth = itemWidth + spacing
    const availableWidth = totalWidth - spacing // One spacing extra
    const itemsPerRow = Math.floor(availableWidth / itemTotalWidth)
    const containerWidth = availableWidth / itemsPerRow

    return {
      itemWidth,
      spacing,
      itemsPerRow,
      containerWidth,
      fixed
    }
  }

  renderRow (data, sectionId, rowId) {
    const { spacing } = this.props
    const { itemWidth, containerWidth, fixed } = this.state

    const rowStyle = {
      paddingLeft: spacing,
      paddingBottom: spacing,
      marginBottom: spacing
    }

    const columnStyle = {
      width: containerWidth,
      paddingRight: spacing
    }

    let itemStyle = {}
    if (fixed) {
      itemStyle = { width: itemWidth }
    }

    return (
      <View style={[styles.row, rowStyle]}>
        {(data.item || []).map((item, i) => (
          <View key={rowId + '_' + i} style={[styles.column, columnStyle]}>
            <View style={[styles.item, itemStyle]}>
              {this.props.renderItem(item, i)}
            </View>
          </View>
        ))}
      </View>
    )
  }

  render () {
    const { state, props } = this

    console.log(state.rows)
        // renderItem={this.rnederRow}

    return (
      <FlatList
        {...props}
        data={state.rows}
        renderItem={this.renderRow}

        extraData={Math.random()}

        style={[{ paddingTop: props.spacing }, props.style]}
        onLayout={this.onLayout}
      />
    )
  }
}

SuperGrid.propTypes = {
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  itemWidth: PropTypes.number,
  fixed: PropTypes.bool,
  spacing: PropTypes.number,
  style: View.propTypes.style,
  staticWidth: PropTypes.number
}

SuperGrid.defaultProps = {
  fixed: false,
  itemWidth: 120,
  spacing: 10,
  style: {},
  data: [],
  staticWidth: undefined
}

export default SuperGrid
