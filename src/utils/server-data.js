import Pokemon from '../components/pokemon'
import React from 'react'
import { renderToString } from 'react-dom/server'

module.exports = function render(pokemon) {
  const content = renderToString(<Pokemon {...pokemon} />)
  return {
    content
  }
}
