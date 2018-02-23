import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from '../components/Container'
import { Input } from '../components/Input'
import { Header } from '../components/Header'

class Login extends Component {
  
  state = {
    email: ""
  }

  onChangeText = (email) => {
    this.setState({ email })
  }

  render() {
    return(
      <Container>
        <Header name="Login" />
        <Input 
          label="email"
          placeholder="user@email.com"
          value={this.state.email}
          onChangeText={this.onChangeText} />
      </Container>
    )
  }

}

export default Login
