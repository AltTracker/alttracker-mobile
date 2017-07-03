import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Navigator from './Navigator'

export default class Main extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, backgroundColor: theme.palette.canvas }}>
          <StatusBar barStyle='light-content' />
          <Navigator />
        </View>
      </ThemeProvider>
    )
  }
}
