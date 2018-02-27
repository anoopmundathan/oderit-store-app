import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const Button = ({ title, onButtonClick }) => {
  
  const { container, text } = styles
  
  return(
    <TouchableOpacity onPress={onButtonClick}>
      <View style={container}>
        <Text style={text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )

}

