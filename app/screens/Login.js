import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { LoginButton } from '../components/LoginButton'
import { connect } from 'react-redux'
import { 
  emailChangeAction, 
  passwordChangeAction,
  onLoginAction
 } from '../actions'

class Login extends Component {

  render() {
    
    const { 
      email, 
      password, 
      onEmailChange, 
      onPasswordChange, 
      onLogin 
    } = this.props
    
    return(
      <Container>
        <Header name="Login" />
        <Input 
          label="email"
          placeholder="user@email.com"
          value={email}
          onChangeText={email => onEmailChange(email)} />
        <Input 
          label="Password"
          secure
          placeholder="password"
          value={password}
          onChangeText={password => onPasswordChange(password)} />
        <LoginButton 
          title="Submit"
          onButtonClick={onLogin} />
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
  onPasswordChange: (password) => dispatch(passwordChangeAction(password)),
  onLogin: () => dispatch(onLoginAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
