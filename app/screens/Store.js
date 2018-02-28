import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Spinner } from '../components/Spinner'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import { 
  storeAddAction, 
  storeChangedAction,
  storeFetchAction
 } from '../actions'

class Store extends Component {
  
  componentDidMount() {
    this.props.storeFetch()
  }


  onButtonClicked = () => {
    const { name, mobile, address } = this.props
    this.props.storeAdd({ name, mobile, address })
  }

  renderForm = () => {

    const { storeInfo } = this.props

    if(!this.props.loaded) {
      return(<Spinner size="large" />)
    } 

    if(!this.props.storeInfo) {
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
    } else {
      debugger;

      return Object.keys(storeInfo).map(id => {
        return(
          <View key={id}>
            <Text>{storeInfo[id].name}</Text>
            <Text>{storeInfo[id].mobile}</Text>
            <Text>{storeInfo[id].address}</Text>
          </View>
        )
      })
    }
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
  const { name, mobile, address, loaded, storeInfo } = store
  return {
    name,
    mobile,
    address,
    storeInfo,
    loaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeAdd: store => dispatch(storeAddAction(store)),
    storeChange: store => dispatch(storeChangedAction(store)),
    storeFetch: () => dispatch(storeFetchAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
