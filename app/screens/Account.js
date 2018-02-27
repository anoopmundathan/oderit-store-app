import React, { Component } from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import firebase from 'firebase'

class Account extends Component {
  
  render() {
    return(
      <Container>
        <Header name="Logout" />
        <Button title="Logout" 
          onButtonClick={() => firebase.auth().signOut()} />
      </Container>
    )
  }
}

export default Account
