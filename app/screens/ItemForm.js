import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { NavigationActions } from 'react-navigation'
import { itemAddAction } from '../actions'
import { connect } from 'react-redux'

class ItemForm extends Component {

  onCancelButtonClick = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onAddButtonClick = () => {
    this.props.addItem({name: 'pc', price: 50}, this.onCancelButtonClick)
  }
  
  render() {

    return(
      <Container>
        <Header name="Items"/>
            <Input label="Name" placeholder="Item Name" />
            <Input label="Price" placeholder="Name" />
            <Button onButtonClick={this.onAddButtonClick} title="Add Item" />  
            <Button onButtonClick={this.onCancelButtonClick} title="Cancel" />  
      </Container>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  addItem: (item, fn) => dispatch(itemAddAction(item, fn))
})

export default connect(null, mapDispatchToProps)(ItemForm)
