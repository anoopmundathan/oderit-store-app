import { 
  STORE_ADD, 
  STORE_CHANGED 
} from '../action-types'

import firebase from 'firebase'

export const storeAddAction = (uid, store) => async dispatch => {
  const { name, mobile, address } = store
  try {
    await firebase.database().ref(`users/${uid}`).set({ name, mobile, address })
  } catch(error) {
    console.log(error)
  }
}
export const storeChangedAction = store => ({ type: STORE_CHANGED, payload: store })

