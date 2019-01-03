import React from 'react'
import styled from 'styled-components'
import PokemonType from './pokemon-type'
import leftPath from '../utils/left-path'
import Triangle from './styled/triangle'

const BackGround = styled.div`
  width: 380px;
  height: 500px;
  margin: 0 auto;
  background: rgba(0,0,0, .2);
  position: relative;
  img {
    opacity: .9;
    position: relative;
    left: -50px;
  }
`

const RightSide = styled(Triangle)`
  &:before {
    left: 100%;
    top: 0;
    position: absolute;
  }
`
const LeftSide = styled(Triangle)`
  &:before {
    right: 100%;
    top: 0;
    position: absolute;
  }
`

const PokemonStyled = styled.div`
  border: 1px solid red;
  .name {

  }
`

const Pokemon = ({ name, sprites, moves, types, id }) => (
  <PokemonStyled>
    <a href={`/pokemon/${id-1}`}>prev</a>
    <a href={`/pokemon/${id+1}`}>next</a>
    <BackGround>
      <RightSide type="left" width={500} color="rgba(0,0,0, .2)" height={100}/>
      <LeftSide type="right" width={500} color="rgba(0,0,0, .2)" height={100}/>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leftPath(id, 3, 0)}.png`} alt=""/>
    </BackGround>
    <h2 className="name">Nombre: {name}</h2>
    <hr/>
    <img src={sprites.front_default} alt="" />
    <img src={sprites.back_default} alt="" />
    <img src={sprites.front_shiny} alt="" />
    <img src={sprites.back_shiny} alt="" />
    <ul>
      {types.map(({ type })=>(
        <PokemonType type={type.name} />
      ))}
    </ul>
    <ol>
      {moves.map(({ move })=>(
        <li>{move.name}</li>
      ))}
    </ol>
  </PokemonStyled>
)

export default Pokemon
