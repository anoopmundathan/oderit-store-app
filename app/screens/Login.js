import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Container } from '../components/Container'
import { Input } from '../components/Input'
import { Header } from '../components/Header'
import { connect } from 'react-redux'
import { emailChangeAction, passwordChangeAction } from '../actions'

class Login extends Component {

  render() {
    
    const { email, password } = this.props
    
    return(
      <Container>
        <Header name="Login" />
        <Input 
          label="email"
          placeholder="user@email.com"
          value={email}
          onChangeText={email => this.props.onEmailChange(email)} />
        <Input 
          label="Password"
          secure
          placeholder="password"
          value={password}
          onChangeText={password => this.props.onPasswordChange(password)} />
      </Container>
    )
  }

}

const mapStateToProps = ({ login }) => ({ 
  email: login.email,
  password: login.password
})

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (email) => dispatch(emailChangeAction(email)),
  onPasswordChange: (password) => dispatch(passwordChangeAction(password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
