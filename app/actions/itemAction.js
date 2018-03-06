import { ITEM_ADD, ITEM_CHANGED, ITEM_FETCH } from '../action-types'
import firebase from 'firebase'

export const itemFetchAction = () => dispatch => {
  const { currentUser } = firebase.auth()
  firebase.database().ref(`/users/${currentUser.uid}/items`)
  .on('value', snapshot => {
    dispatch({ type: ITEM_FETCH, payload: snapshot.val() })
  })
}

export const itemAddAction = (item, fn) => dispatch => {
  const { name, price } = item
  const { currentUser } = firebase.auth()
  firebase.database().ref(`/users/${currentUser.uid}/items`)
    .push({ name, price })
    .then(() => {
      dispatch({ 
        type: ITEM_ADD,
        payload: item
      })
      fn();
    })

}

export const itemChangedAction = item => ({ type: ITEM_CHANGED, payload: item })
