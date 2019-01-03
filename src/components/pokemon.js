import React from 'react'
import styled from 'styled-components'

const PokemonStyled = styled.div`
  border: 1px solid red;
  .name {

  }
`

const Pokemon = ({ name, sprites, moves }) => (
  <PokemonStyled>
    <h2 className="name">Nombre: {name}</h2>
    <img src={sprites.front_default} alt="" />
    <img src={sprites.back_default} alt="" />
    <img src={sprites.front_shiny} alt="" />
    <img src={sprites.back_shiny} alt="" />
    <ol>
      {moves.map(({ move })=>(
        <li>{move.name}</li>
      ))}
    </ol>
  </PokemonStyled>
)

export default Pokemon
