import { 
  STORE_ADD,
  STORE_CHANGED,
  STORE_FETCH,
  LOGOUT } from '../action-types'

import { item } from './itemReducer'
  
const INITIAL_STATE = { 
  name: '',
  mobile: '',
  address: '',
  storeInfo: '',
  loaded: false
}

export const store = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STORE_FETCH:
      return { ...state, storeInfo: action.payload, loaded: true }
    case STORE_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value }
    case STORE_ADD:
      return { ...state, name: '', mobile: '', address: '' }
    // case LOGOUT:
    //   return { ...INITIAL_STATE }
    default:
      return state
  }
}


