import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'

export default class Item extends Component {
  render() {
    return(
      <Container>
        <Header name="Items"/>
      </Container>
    )
  }
}
