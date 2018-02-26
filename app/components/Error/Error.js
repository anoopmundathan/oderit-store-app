import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

export const Error = ({ error }) => {
  const { container, text } = styles
  return(
    <View style={container}>
      <Text style={text}>{error}</Text>
    </View>
  )
}
