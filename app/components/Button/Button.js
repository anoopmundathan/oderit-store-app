import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

export const Button = () => {
  
  const { container, button } = styles

  return(
    <View style={container}>
      <Button
        title="Submit"
        color="#841584"
        accessibilityLabel="Login Button" />
    </View>
  )

}

