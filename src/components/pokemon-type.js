import React from 'react'
import styled from 'styled-components'

const types = {
  poison: '#aa60a1',
  normal: '#bebeb0',
  psychic: '#f868b2',
  grass: '#8cd157',
  ground: '#eece61',
  ice: '#99f1fe',
  fire: '#f75649',
  rock: '#ccbb75',
  dragon: '#8878fb',
  water: '#5bb0fc',
  bug: '#bfcd36',
  dark: '#8e6a58',
  fighting: '#a55547',
  ghost: '#7775cc',
  steel: '#c4c2d8',
  flying: '#7ba6fc',
  electric: '#fde650',
  fairy: '#fab1fd'
}
const PokemonTypeStyled = styled.div`
  background-color: ${({ type }) => types[type]};
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
`

const PokemonType = ({ type }) => (
  <PokemonTypeStyled type={type}>
    {type}
  </PokemonTypeStyled>
)

export default PokemonType
