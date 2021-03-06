import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Octicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
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
      store: { 
        screen: Store,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons 
              color={tintColor}
              name='store' 
              size={28} />
          )
        }
      },
      item: { 
        screen: StackNavigator({
          item: { 
            screen: Item
          },
          form: { 
            screen: ItemForm 
          }
        }, 
      {
        headerMode: 'none'
      }
    ),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Entypo 
          color={tintColor}
          name='shopping-basket' 
          size={28} />
      )
    }
  },
    order: { 
      screen: Order,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Octicons 
            color={tintColor}
            name='list-unordered' 
            size={28} />
        )
      }
    },
    account: { 
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({ tintColor}) => (
          <MaterialCommunityIcons 
            color={tintColor}
            name='account' 
            size={28} />
        )
      }
    }
    }, 
    { 
      tabBarPosition: 'bottom',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#0080ff',
        inactiveTintColor: '#7f9eb2',
        style: {
          height: 56,
          backgroundColor: '#fff',
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
        }
      }
    }
  )
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  }
})
