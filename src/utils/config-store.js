import { createStore } from 'redux'
import reducer from '../reducers/index'

function configStore(defaultState) {
  const store = createStore(reducer, defaultState)
  return store
}

export default configStore