import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import reducer from './reducers/index'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, {
  pokemon: window.data
})

hydrate(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>
  ,
  document.querySelector('#app')
)
