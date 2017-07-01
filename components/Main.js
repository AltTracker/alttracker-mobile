import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import Portfolio from 'Portfolio'

export default class Main extends Component {
  render () {
    return (
      <Container>
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
    )
  }
}
