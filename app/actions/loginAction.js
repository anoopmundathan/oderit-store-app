import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  STORE_FETCH, 
  ITEM_FETCH } from '../action-types'
import firebase from 'firebase'
import { fetchFromFirebase } from '../api'

export const emailChangeAction = email => ({ type: EMAIL_CHANGED, email })
export const passwordChangeAction = password => ({ type: PASSWORD_CHANGED, password })

export const onLoginAction = (email, password) => async dispatch => {
  
  dispatch({ type: LOGIN_START })
  let user
  try {
    user = await firebase.auth().signInWithEmailAndPassword(email, password)
    loginUserSuccess(dispatch, user)
    doFetch(dispatch)
  } catch(error) {
    try {
        user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        loginUserSuccess(dispatch, user)
        doFetch(dispatch)
      } catch(error) {
        loginUserFail(dispatch)
      }
  }
}

const doFetch = async dispatch => {
  await fetchFromFirebase('stores', dispatch, STORE_FETCH)
  await fetchFromFirebase('items', dispatch, ITEM_FETCH)
}

const loginUserFail = dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    error: 'Authentication failed'
  })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ 
    type: LOGIN_SUCCESS, 
    user 
  })
}
