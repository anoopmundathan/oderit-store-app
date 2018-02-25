import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Login from './screens/Login'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return(
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

EStyleSheet.build({
  $primaryBlue: '#84B1ED',
  $primaryWhite: '#FFFFF2'
})

export default App
