import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Image from './Image'
import Container from './Container'

export default ({ onPress = () => {}, Name, ImageUrl }) => (
  <TouchableHighlight onPress={onPress} underlayColor='rgba(255, 255, 255, 0.3)' style={{ borderRadius: 10 }}>
    <Container>
      <Image source={{ uri: `https://cryptocompare.com${ImageUrl}` }} />
      <Text style={{ color: 'white' }}>{Name}</Text>
    </Container>
  </TouchableHighlight>
)
