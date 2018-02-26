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


export const onLoginAction = (email, password) => dispatch => {
  
  dispatch({ type: LOGIN_START })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS })
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch({ type: LOGIN_SUCCESS })
        })
        .catch((error) => {
          dispatch({ 
            type: LOGIN_ERROR,
            error: 'Authentication failed'
          })
        })
    })
}
