import React, { Component } from 'react'
import Main from './components/Main'
import {
  View
} from 'react-native'
import {
  setCustomText,
  setCustomTextInput
} from 'react-native-global-props'
import theme from 'theme'

export default () => {
  setCustomTextInput({
    style: {
      fontSize: 18,
      height: 40
    }
  })

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
