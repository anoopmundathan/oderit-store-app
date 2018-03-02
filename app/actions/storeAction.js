import { 
  STORE_ADD, 
  STORE_CHANGED,
  STORE_FETCH,
  LOGOUT } from '../action-types'

import firebase from 'firebase'

export const storeFetchAction = () => dispatch => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/stores`)
    .on('value', snapshot => {
      dispatch({ type: STORE_FETCH, payload: snapshot.val() })
    })
}

export const storeAddAction = store => dispatch => {
    const { name, mobile, address } = store

    // Retrieve currently authenticated user information
    const { currentUser } = firebase.auth()
    // Save store information into firebase realtime datastore
    firebase.database().ref(`/users/${currentUser.uid}/stores`)
    .push({ name, mobile, address })
    .then(() => {
      dispatch({ type: STORE_ADD })
    })
}

export const storeChangedAction = store => ({ type: STORE_CHANGED, payload: store })

export const logOutAction = () => async dispatch => {
  await firebase.auth().signOut()
  dispatch({ type: LOGOUT })
}
