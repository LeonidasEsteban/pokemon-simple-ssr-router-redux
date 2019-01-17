import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>Contenido no encontrado</h1>
    <Link to="/pokemon/25/">
      ir a pikachu
    </Link>
  </div>
)

export default NotFound