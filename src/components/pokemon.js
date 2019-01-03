import React from 'react'


const Pokemon = ({ name, sprites }) => (
  <div>
    <h2>Nombre: {name} x</h2>
    <img src={sprites.front_default} alt="" />
  </div>
)

export default Pokemon
