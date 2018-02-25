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
  $primaryBackground: '#fff',
  $primaryText: '#7f9eb2',
  $primaryButton: '#0080ff'
})

export default App
