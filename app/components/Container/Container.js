import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { styles } from './style'

export const Container = ({ children }) => {
  
  const { container } = styles

  return(
    <View style={container}>
      { children }
    </View>
  )
  
}

Container.propTypes = {
  children: PropTypes.any
}
