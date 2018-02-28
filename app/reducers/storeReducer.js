import { 
  STORE_ADD,
  STORE_CHANGED,
  STORE_FETCH
} from '../action-types'

const INITIAL_STATE = { 
  name: '',
  mobile: '',
  address: '',
  storeInfo: null,
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
    default:
      return state
  }
}


