import { 
  STORE_ADD,
  STORE_CHANGED,
} from '../action-types'

const INITIAL_STATE = { 
  name: '',
  mobile: '',
  address: ''
}

export const store = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STORE_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value }
    case STORE_ADD:
      return { 
        ...state, 
        name: action.store.name, 
        mobile: action.store.mobile,
        address: action.store.address
      } 
    default:
      return state
  }
}


