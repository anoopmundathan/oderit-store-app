import { combineReducers } from 'redux'
import { login } from './loginReducer'
import { store } from './storeReducer'

export default combineReducers({ 
  login, 
  store 
})
