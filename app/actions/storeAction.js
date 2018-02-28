import { 
  STORE_ADD, 
  STORE_CHANGED,
  STORE_FETCH
} from '../action-types'

import firebase from 'firebase'

export const storeFetchAction = () => async dispatch => {
  const { currentUser } = firebase.auth()
  await firebase.database().ref(`/users/${currentUser.uid}/stores`)
  .on('value', snapshot => {
    dispatch({ type: STORE_FETCH, payload: snapshot.val() })
  })
}

export const storeAddAction = store => async dispatch => {
  try {
    const { name, mobile, address } = store

    // Retrieve currently authenticated user information
    const { currentUser } = firebase.auth()

    // Save store information into firebase realtime datastore
    await firebase.database().ref(`/users/${currentUser.uid}/stores`)
    .push({ name, mobile, address })
    dispatch({ type: STORE_ADD })
  } catch(error) {
    console.log(error)
  }
}

export const storeChangedAction = store => ({ type: STORE_CHANGED, payload: store })

