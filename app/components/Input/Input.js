import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { styles } from './style'

export const Input = ({ label, placeholder, value, onChangeText, secure }) => {

  const { container, labelContainer, text, inputContainer, input } = styles

  return(
    <View style={container}>
      <Text style={text}>{label.toUpperCase()}</Text>
      <TextInput 
        underlineColorAndroid="transparent"
        style={input}
        secureTextEntry={secure}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} />
    </View>
  )

}
