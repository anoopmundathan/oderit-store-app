import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

export const Header = ({ name }) => {
  
  const { container, text } = styles

  return(
    <View style={container}>
      <Text style={text}>{name}</Text>
    </View>
  )
}
