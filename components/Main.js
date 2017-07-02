import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container } from 'native-base'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Portfolio from 'Portfolio'

export default class Main extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Container style={{ backgroundColor: theme.palette.canvas }}>
          <StatusBar barStyle='light-content' />
          <Portfolio />
        </Container>
      </ThemeProvider>
    )
  }
}
