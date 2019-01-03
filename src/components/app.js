import React from 'react'
import { hydrate } from 'react-dom'
import Pokemon from './pokemon'

hydrate(<Pokemon sprites={{}} name="leonidas" />, document.querySelector('#app'))
