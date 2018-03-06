import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Login from '../screens/Login'
import Main from '../screens/Main'
import Store from '../screens/Store'
import Item from '../screens/Item'
import ItemForm from '../screens/ItemForm'
import Order from '../screens/Order'
import Account from '../screens/Account'

export const MainNavigator = TabNavigator({
  main: { screen: Main },
  login: { screen: Login },
  other: {
    screen: TabNavigator({
      store: { screen: Store },
      item: { screen: StackNavigator({
        item: { 
          screen: Item
         },
        form: { screen: ItemForm }
      }, 
      {
        headerMode: 'none'
      }
    )},
      order: { screen: Order },
      account: { screen: Account }
    })
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  }
})
