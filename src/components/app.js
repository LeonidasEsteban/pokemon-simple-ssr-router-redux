import React from 'react'
import { hydrate } from 'react-dom'
import Pokemon from './pokemon'

hydrate(<Pokemon {...window.data} />, document.querySelector('#app'))
