import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Login from '../screens/Login'
import { Store } from '../screens/Store'
import { Item } from '../screens/Item'
import { Order } from '../screens/Order'
import { Account } from '../screens/Account'

export const MainNavigator = TabNavigator({
  login: {
    screen: Login,
  },
  store: {
    screen: Store
  },
  items: {
    screen: Item
  }, 
  order: {
    screen: Order
  },
  account: {
    screen: Account
  }
})
