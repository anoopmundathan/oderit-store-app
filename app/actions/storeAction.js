import { 
  STORE_ADD, 
  STORE_CHANGED,
  STORE_FETCH,
  LOGOUT } from '../action-types'

import firebase from 'firebase'
import { fetchFromFirebase, saveStoreDataToFirebase } from '../api'

export const storeFetchAction = () => dispatch => {
  fetchFromFirebase('stores', dispatch, STORE_FETCH)
}
  
export const storeAddAction = store => dispatch => {
  saveStoreDataToFirebase(dispatch, STORE_ADD, store)
}

export const storeChangedAction = store => ({ type: STORE_CHANGED, payload: store })

export const logOutAction = () => async dispatch => {
  await firebase.auth().signOut()
  dispatch({ type: LOGOUT })
}
