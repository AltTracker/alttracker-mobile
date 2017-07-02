import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import Portfolio from 'Portfolio'

export default class Main extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Container style={{ backgroundColor: theme.palette.canvas }}>
          <Header>
            <Left>
              <Button transparent />
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          <Portfolio />
        </Container>
      </ThemeProvider>
    )
  }
}
