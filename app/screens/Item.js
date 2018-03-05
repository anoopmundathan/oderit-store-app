import React, { Component } from 'react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { PlusButton } from '../components/PlusButton'
import { View, StyleSheet } from 'react-native'

export default class Item extends Component {
  render() {
    return(
      <Container>
        <View style={styles.container}>
          <Header name="Items"/>
          <PlusButton />
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
