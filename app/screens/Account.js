import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

class Account extends Component {

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button 
          title="Logout"
          onPress={() => firebase.auth().signOut() }/>
      </View>
    )
  }
}

export default Account
