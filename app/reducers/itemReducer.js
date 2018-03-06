import { ITEM_ADD, ITEM_CHANGED } from '../action-types'

const INITIAL_STATE = { 
  name: '',
  price: '',
  itemInfo: []
}

export const item = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ITEM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ITEM_ADD:
      return { 
        ...state, 
        name: '',
        price: '',
        itemInfo: [...state.itemInfo, action.payload] 
      }
    default:
      return state
  }
}

