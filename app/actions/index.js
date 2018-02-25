import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  ON_LOGIN
 } from '../action-types'

export const emailChangeAction = email => ({ type: EMAIL_CHANGED, email })
export const passwordChangeAction = password => ({ type: PASSWORD_CHANGED, password })
export const onLoginAction = () => ({ type: ON_LOGIN })
