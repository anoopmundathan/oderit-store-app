import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  STORE_FETCH } from '../action-types'
import firebase from 'firebase'

export const emailChangeAction = email => ({ type: EMAIL_CHANGED, email })

export const passwordChangeAction = password => ({ type: PASSWORD_CHANGED, password })

export const onLoginAction = (email, password) => async dispatch => {
  
  dispatch({ type: LOGIN_START })
  let user
  try {
    user = await firebase.auth().signInWithEmailAndPassword(email, password)
    loginUserSuccess(dispatch, user)
    fetchStores(dispatch)
  } catch(error) {
    try {
        user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        loginUserSuccess(dispatch, user)
        fetchStores(dispatch)
      } catch(error) {
        loginUserFail(dispatch)
      }
  }
}

const fetchStores = dispatch => {
  const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/stores`)
    .on('value', snapshot => {
      dispatch({ type: STORE_FETCH, payload: snapshot.val() })
    })
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    error: 'Authentication failed'
  })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, user })
}
