import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const PlusButton = () => {
  const { text } = styles
  return(
    <TouchableOpacity>
      <View>
        <Text style={styles.text}> + </Text>
      </View>
    </TouchableOpacity>
  )
}
