import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

export default class Store extends Component {
  render() {
    return(
      <Container>
        <Header name="Store"/>
        <Button 
          title="Add store" />
      </Container>
    )
  }
}
