import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { config } from '../config'

class Main extends Component {
  
  componentWillMount() {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.props.navigation.navigate('store', { user })
      } else {
        this.props.navigation.navigate('login')
      }
    })
  }

  render() {
    return(<View />)
  }
}

export default Main
