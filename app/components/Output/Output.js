import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './style'

export const Output = ({ label, value }) => {

  const { container, text, output } = styles

  return(
    <View style={container}>
      <Text style={text}>{label}</Text>
      <Text style={output}>{value}</Text>
    </View>
  )

}
