import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './style'

const Container = ({ children }) => {
  return(
    <View style={styles.container}>
      { children }
    </View>
  )
}

Container.propTypes = {
  children: PropTypes.element
}

export default Container
