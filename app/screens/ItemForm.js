import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { NavigationActions } from 'react-navigation'
import { itemAddAction, itemChangedAction } from '../actions'
import { connect } from 'react-redux'

class ItemForm extends Component {

  onCancelButtonClick = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onAddButtonClick = () => {
    const { name, price } = this.props
    if(name && price) {
      this.props.addItem({ name, price }, this.onCancelButtonClick)
    }
  }
  
  render() {

    return(
      <Container>
        <Header name="Items"/>
        <Input 
          label="Name"
          placeholder="Item Name"
          onChangeText={value => this.props.itemChange({ prop: 'name', value })}
          value={this.props.name} />
        <Input 
          label="Price"
          placeholder="Item Price"
          onChangeText={value => this.props.itemChange({ prop: 'price', value })}
          value={this.props.price} />
          <Button onButtonClick={this.onAddButtonClick} title="Add Item" />  
          <Button onButtonClick={this.onCancelButtonClick} title="Cancel" />  
      </Container>
    )
  }

}

const mapStateToProps = ({ item }) => {
  const { name, price } = item
  return {
    name,
    price
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (item, fn) => dispatch(itemAddAction(item, fn)),
  itemChange: item => dispatch(itemChangedAction(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
