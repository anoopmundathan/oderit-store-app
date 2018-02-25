import { combineReducers } from 'redux'
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../action-types'

const INITIAL_STATE = { 
  email: '',
  password: ''
}

const login = (state = INITIAL_STATE, action) => {
  const { type, email, password } = action
  switch(type) {
    case EMAIL_CHANGED: 
      return { ...state, email }
    case PASSWORD_CHANGED:
      return { ...state, password }
    default:
      return state
  }
  
}

export default combineReducers({ login })
