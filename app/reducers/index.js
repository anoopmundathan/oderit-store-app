import { combineReducers } from 'redux'
import { login } from './loginReducer'
import { store } from './storeReducer'
import { item } from './itemReducer'

export default combineReducers({ 
  login, 
  store,
  item 
})
