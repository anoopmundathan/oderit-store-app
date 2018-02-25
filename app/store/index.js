import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'

const store = createStore(
  reducer, 
  {}, 
  applyMiddleware(createLogger())
)

export default store
