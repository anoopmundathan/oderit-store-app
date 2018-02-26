import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './style'

export const Spinner = ({ size }) => {
  
  const { container } = styles

  return(
    <View style={container}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}
