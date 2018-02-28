import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { connect } from 'react-redux'
import { 
  storeAddAction, 
  storeChangedAction
 } from '../actions'
import { View } from 'react-native'

class Store extends Component {
  
  onButtonClicked = () => {
    const { name, mobile, address } = this.props
    const { uid } = this.props.navigation.state.params.user
    this.props.storeAdd(uid, { name, mobile, address })
  }

  renderForm = () => {
      return(
        <View>
          <Input 
            label="Store Name"
            placeholder="Name"
            onChangeText={value => this.props.storeChange({ prop: 'name', value })}
            value={this.props.name} />
          <Input 
            label="Mobile"
            placeholder="Mobile number"
            onChangeText={value => this.props.storeChange({ prop: 'mobile', value })}
            value={this.props.mobile} />
          <Input 
            label="Address"
            placeholder="Address"
            onChangeText={value => this.props.storeChange({ prop: 'address', value })}
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
    storeAdd: (uid, store) => dispatch(storeAddAction(uid, store)),
    storeChange: store => dispatch(storeChangedAction(store))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
