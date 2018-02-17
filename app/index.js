import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/Home'

const App = () => {
  return(
    <Home />
  )
}

EStyleSheet.build({
  $primaryBlue: '#4F6D7A'
})

export default App
