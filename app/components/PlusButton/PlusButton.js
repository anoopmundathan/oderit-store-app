import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const PlusButton = ({ onButtonClick }) => {
  const { text } = styles
  return(
    <TouchableOpacity onPress={onButtonClick} >
      <View>
        <Text style={styles.text}> + </Text>
      </View>
    </TouchableOpacity>
  )
}
