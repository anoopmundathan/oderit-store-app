import React, { Component } from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { connect } from 'react-redux'
import { logOutAction } from '../actions/storeAction'

class Account extends Component {
  
  render() {
    return(
      <Container>
        <Header name="Logout" />
        <Button title="Logout" 
          onButtonClick={() => this.props.logOutAction()} />
      </Container>
    )
  }
}

export default connect(null, { logOutAction })(Account)
