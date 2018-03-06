import { ITEM_ADD } from '../action-types'

const INITIAL_STATE = { 
  itemInfo: []
}

export const item = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ITEM_ADD:
      return { 
        ...state, 
        itemInfo: [...state.itemInfo, action.payload] 
      }
    default:
      return state
  }
}

