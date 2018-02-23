import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Login from './screens/Login'

const App = () => {
  return(
    <Login />
  )
}

EStyleSheet.build({
  $primaryBlue: '#84B1ED',
  $primaryWhite: '#FFFFF2'
})

export default App
