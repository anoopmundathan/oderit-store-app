import { 
  STORE_ADD, 
  STORE_NAME_CHANGED, 
  STORE_MOBILE_CHANGED, 
  STORE_ADDRESS_CHANGED } from '../action-types'

export const storeAddAction = (store) => ({ type: STORE_ADD, store })
export const storeNameChangedAction = name => ({ type: STORE_NAME_CHANGED, name })
export const storeMobileChangedAction = mobile => ({ type: STORE_MOBILE_CHANGED, mobile })
export const storeAddressChangedAction = address => ({ type: STORE_ADDRESS_CHANGED, address })
