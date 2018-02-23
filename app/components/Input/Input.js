import React from 'react';
import { View, Text, TextInput } from 'react-native'
import { styles } from './style'

export const Input = ({ label, placeholder, value, onChangeText }) => {

  const { container, labelContainer, text, inputContainer, input } = styles

  return(
    <View style={container}>
      <Text style={text}>{label.toUpperCase()}</Text>
      <TextInput 
        style={input}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} />
    </View>
  )

}
