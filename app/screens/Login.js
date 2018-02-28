import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Spinner } from '../components/Spinner'
import { Error  } from '../components/Error'
import { connect } from 'react-redux'

import {
  emailChangeAction, 
  passwordChangeAction,
  onLoginAction
 } from '../actions'

class Login extends Component {

  onLoginClicked = () => {
    const { email, password } = this.props
    if(email && password) {
      this.props.onLogin(email, password)
    }
  }

  renderError = () => {
    const { error } = this.props
    return error ? <Error error={error} /> : null
  }

  renderButton = () => {
    const { loading } = this.props
    return loading ? <Spinner /> : (
      <Button 
        title="Submit"
        onButtonClick={this.onLoginClicked} />
      )
  }

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
          {this.renderError()}
          {this.renderButton()}
      </Container>
    )
  }

}

const mapStateToProps = ({ login }) => {
  const { email, password, loading, error } = login
  return {
    email,
    password,
    loading,
    error
  }
}

const mapDispatchToProps = dispatch => ({
  onEmailChange: email => dispatch(emailChangeAction(email)),
  onPasswordChange: password => dispatch(passwordChangeAction(password)),
  onLogin: (email, password) => dispatch(onLoginAction(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
