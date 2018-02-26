import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Login from './screens/Login'
import firebase from 'firebase'
import { config } from './config'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    return(
      <Provider store={store}>
        <Login />
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
