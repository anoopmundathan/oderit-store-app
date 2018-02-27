import { 
  STORE_ADD,
  STORE_NAME_CHANGED, 
  STORE_MOBILE_CHANGED,
  STORE_ADDRESS_CHANGED
} from '../action-types'

const INITIAL_STATE = { 
  name: '',
  mobile: '',
  address: ''
}

export const store = (state = INITIAL_STATE, action) => {
  const { type, name, mobile, address } = action
  switch(type) {
    case STORE_NAME_CHANGED: 
      return { ...state, name }
    case STORE_MOBILE_CHANGED:
      return { ...state, mobile }
    case STORE_ADDRESS_CHANGED:
      return { ...state, address }
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


