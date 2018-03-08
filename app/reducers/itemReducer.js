import { ITEM_ADD, ITEM_CHANGED, ITEM_FETCH } from '../action-types'

const INITIAL_STATE = { 
  name: '',
  price: '',
  loaded: false,
  itemInfo: ''
}

export const item = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ITEM_FETCH:
      return { ...state, itemInfo: action.payload, loaded: true }
    case ITEM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ITEM_ADD:
      return { ...state, name: '', price: '' }
    default:
      return state
  }
}

