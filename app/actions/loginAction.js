import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_START,
  LOGIN_SUCCESS, 
  LOGIN_ERROR
} from '../action-types'

import firebase from 'firebase'
import store from '../store'

export const emailChangeAction = email => ({ type: EMAIL_CHANGED, email })
export const passwordChangeAction = password => ({ type: PASSWORD_CHANGED, password })

export const onLoginAction = (email, password) => async dispatch => {
  dispatch({ type: LOGIN_START })
  
  let user
  try {
    user = await firebase.auth().signInWithEmailAndPassword(email, password)
    loginUserSuccess(dispatch, user)
  } catch(error) {
    try {
      user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      loginUserSuccess(dispatch, user)
      } catch(error) {
        loginUserFail(dispatch)
      }
  }
}

const loginUserFail = (dispatch) => {
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
