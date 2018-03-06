import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR } from '../action-types'
  
const INITIAL_STATE = { 
  user: '',
  email: '',
  password: '',
  loading: null,
  error: null
}

export const login = (state = INITIAL_STATE, action) => {
  const { type, email, password, error, user } = action
  switch(type) {
    case EMAIL_CHANGED: 
      return { ...state, email, error: null }
    case PASSWORD_CHANGED:
      return { ...state, password, error: null }
    case LOGIN_START:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user }
    case LOGIN_ERROR:
      return { ...state, loading: false, error }  
    default:
      return state
  }
}


