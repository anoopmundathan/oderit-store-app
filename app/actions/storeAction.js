import { 
  STORE_ADD, 
  STORE_NAME_CHANGED, 
  STORE_MOBILE_CHANGED, 
  STORE_ADDRESS_CHANGED } from '../action-types'

import firebase from 'firebase'

export const storeAddAction = (uid, store) => async dispatch => {
  const { name, mobile, address } = store
  try {
    await firebase.database().ref(`users/${uid}`).set({ name, mobile, address })
  } catch(error) {
    console.log(error)
  }
}
export const storeNameChangedAction = name => ({ type: STORE_NAME_CHANGED, name })
export const storeMobileChangedAction = mobile => ({ type: STORE_MOBILE_CHANGED, mobile })
export const storeAddressChangedAction = address => ({ type: STORE_ADDRESS_CHANGED, address })
