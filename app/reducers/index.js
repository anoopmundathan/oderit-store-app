import { combineReducers } from 'redux'
import { login } from './loginReducer'
import { store } from './storeReducer'
import { item } from './itemReducer'

const appReducer = combineReducers({
  login,
  store,
  item
})

const rootReducer = (state, action) => {
  if(action.type === 'logout') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
