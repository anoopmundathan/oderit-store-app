import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { connect } from 'react-redux'
import { 
  storeAddAction, 
  storeNameChangedAction,
  storeMobileChangedAction,
  storeAddressChangedAction
 } from '../actions'
import { View } from 'react-native'

class Store extends Component {
  
  onButtonClicked = () => {
    const { name, mobile, address } = this.props
    const { uid } = this.props.navigation.state.params.user
    this.props.addStore(uid, { name, mobile, address })
  }

  onNameChange = name => {
    this.props.nameChange(name)
  }

  onMobileChange = mobile => {
    this.props.mobileChange(mobile)
  }

  onAddressChange = address => {
    this.props.addressChange(address)
  }

  renderForm = () => {
      return(
        <View>
          <Input 
            label="Store Name"
            placeholder="Name"
            onChangeText={this.onNameChange}
            value={this.props.name} />
          <Input 
            label="Mobile"
            placeholder="Mobile number"
            onChangeText={this.onMobileChange}
            value={this.props.mobile} />
          <Input 
            label="Address"
            placeholder="Address"
            onChangeText={this.onAddressChange}
            value={this.props.address} />
          <Button 
            onButtonClick={this.onButtonClicked}
            title="Add store" />  
        </View>
      )
  }

  render() {
    
    return(
      <Container>
        <Header name="Store"/>
        {this.renderForm()}
      </Container>
    )
  }
}

const mapStateToProps = ({ store }) => {
  const { name, mobile, address } = store
  return {
    name,
    mobile,
    address
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStore: (uid, store) => dispatch(storeAddAction(uid, store)),
    nameChange: name => dispatch(storeNameChangedAction(name)),
    mobileChange: mobile => dispatch(storeMobileChangedAction(mobile)),
    addressChange: address => dispatch(storeAddressChangedAction(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
