import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { PlusButton } from '../components/PlusButton'
import { View, StyleSheet, Text } from 'react-native'
import { itemFetchAction } from '../actions'
import { Spinner } from '../components/Spinner'
import { ItemList } from '../components/ItemList'
import { connect } from 'react-redux'

class Item extends Component {
  
  componentDidMount() {
    this.props.fetchItems();
  }

  onAddButtonClicked = () => {
    this.props.navigation.navigate('form')
  }

  renderMessage = () => {
    const { storeInfo } = this.props
    return !storeInfo ? (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text>No items available.</Text>
        <Text>In order to create item, </Text>
        <Text>store must be created prior</Text>
      </View>
    ) : null
  }

  renderItems = () => {
    
    const { loaded, itemInfo } = this.props

    if(!loaded) {
      return(<Spinner />)
    }

    if(itemInfo) {
      return(<ItemList items={itemInfo} />)
    }

  }

  render() {
    const { storeInfo } = this.props
    return(
      <Container>
        <View style={styles.container}>
          <Header name="Items"/>
          { storeInfo ? (<PlusButton onButtonClick={this.onAddButtonClicked} />) : null }
        </View>
        <View>
          {this.renderMessage()}
          {this.renderItems()}
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const mapStateToProps = ({ store, item }) => {
  const { storeInfo } = store
  const { itemInfo, loaded } = item
   return { 
    storeInfo,
    itemInfo, 
    loaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(itemFetchAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
