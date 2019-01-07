import PokemonPage from '../pages/pokemon'
import React from 'react'
import { renderToString } from 'react-dom/server'
import reducer from '../reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheet = new ServerStyleSheet()


module.exports = function render(pokemon) {
  const store = createStore(reducer, {
    pokemon
  })
  const styleTags = sheet.getStyleTags()
  const content = renderToString(
    <StyleSheetManager sheet = { sheet.instance } >
      <Provider store={store}>
        <PokemonPage />
      </Provider>
    </StyleSheetManager>
  )
  return {
    content,
    styles: styleTags
  }
}
