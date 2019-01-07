import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import PokemonPage from './pages/pokemon'
import reducer from './reducers/index'
import { createStore } from 'redux'

const store = createStore(reducer, {
  pokemon: window.data
})

hydrate(
  <Provider store={store}><PokemonPage /></Provider>
  ,
  document.querySelector('#app')
)
