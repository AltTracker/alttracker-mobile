import React, { Component } from 'react'
import Main from './components/Main'
import {
  View
} from 'react-native'
import {
  setCustomText
} from 'react-native-global-props'
import theme from 'theme'

export default () => {
  setCustomText({
    style: {
      fontSize: 18,
      color: theme.palette.text
    }
  })

  class App extends Component {
    state = {
      loaded: false
    }

    async componentWillMount () {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      })
      this.setState({ loaded: true })
    }

    render () {
      if (!this.state.loaded) {
        return <View />
      } else {
        return <Main />
      }
    }
  }

  return <App />
}
