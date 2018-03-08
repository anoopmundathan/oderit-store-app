import { ITEM_ADD, ITEM_CHANGED, ITEM_FETCH } from '../action-types'
import firebase from 'firebase'
import { fetchFromFirebase, saveItemDataToFirebase } from '../api'

export const itemFetchAction = () => dispatch => {
  fetchFromFirebase('items', dispatch, ITEM_FETCH)
}

export const itemAddAction = (item, fn) => dispatch => {
  saveItemDataToFirebase(dispatch, ITEM_ADD, item, fn)
}

export const itemChangedAction = item => ({ type: ITEM_CHANGED, payload: item })
