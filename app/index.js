import React, { Component } from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Login from './screens/Login'
import firebase from 'firebase'
import { config } from './config'
import store from './store'
import { Provider } from 'react-redux'
import { MainNavigator } from './navigation'

class App extends Component {

  componentWillMount = () => {
    firebase.initializeApp(config)
  }

  render() {
    return(
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

EStyleSheet.build({
  $primaryBackground: '#fff',
  $primaryText: '#7f9eb2',
  $primaryButton: '#0080ff',
  $primaryError: '#fe4365',
})

export default App
