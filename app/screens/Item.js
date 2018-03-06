import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { PlusButton } from '../components/PlusButton'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

class Item extends Component {
  
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

  render() {
    const { storeInfo } = this.props
    return(
      <Container>
        <View style={styles.container}>
          <Header name="Items"/>
          { storeInfo ? (<PlusButton onButtonClick={this.onAddButtonClicked} />) : null }
        </View>
        {this.renderMessage()}
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

const mapStateToProps = ({ store }) => {
  const { storeInfo } = store
  return { 
    storeInfo
  }
}

export default connect(mapStateToProps)(Item)
