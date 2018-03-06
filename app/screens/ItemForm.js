import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { NavigationActions } from 'react-navigation'

export default class ItemForm extends Component {
  onCancelButtonClicked = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return(
      <Container>
        <Header name="Items"/>
            <Input label="Name" placeholder="Item Name" />
            <Input label="Price" placeholder="Name" />
            <Button title="Add Item" />  
            <Button onButtonClick={this.onCancelButtonClicked} title="Cancel" />  
      </Container>
    )
  }
}
