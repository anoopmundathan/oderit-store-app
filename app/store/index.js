import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducers'

const store = createStore(
  reducer, 
  {}, 
  compose(applyMiddleware(thunk, createLogger()))
)

export default store
