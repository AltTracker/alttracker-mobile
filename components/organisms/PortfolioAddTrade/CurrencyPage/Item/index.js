import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Image from './Image'
import Container from './Container'

export default ({ Name, ImageUrl }) => (
  <Container>
    <Image source={{ uri: `https://cryptocompare.com${ImageUrl}` }} />
    <Text style={{ color: 'white' }}>{Name}</Text>
  </Container>
)
