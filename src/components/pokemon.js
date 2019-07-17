import React from 'react'
import styled from 'styled-components'
import PokemonType from 'components/pokemon-type'
import Triangle from 'styled/triangle'
import { Link } from 'react-router-dom'
import Image from 'components/image'

const BackGround = styled.div`
  width: 380px;
  height: 500px;
  margin: 0 auto;
  background: rgba(0,0,0, .2);
  position: relative;
  img {
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
function color(rgb) {
  return `rgb(${rgb.toString()})`
}
const PokemonStyled = styled.div`
  background-image: linear-gradient( ${({ palette }) => color(palette[0])}, transparent ), linear-gradient( 90deg, ${({ palette }) => color(palette[1])}, transparent ), linear-gradient( -90deg, ${({ palette }) => color(palette[2])}, transparent );
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 50px 1fr;
  .details {
    max-height: 100vh;
    overflow: auto;
    padding-top: 20px;
  }
  .name {
    text-transform: uppercase;
    font-size: 150px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(${({ palette }) => palette[8].toString()}, .5);
    text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
  }
`
const ColorStyled = styled.div`
  width: 10vw;
  height: 50px;
  display: inline-flex;
  transition: 1s;
  background: rgba(${({ color }) => color});
  animation: color .3s;
  opacity: .5;
  position: relative;
  z-index: 2;
  @keyframes color {
    0% {
      opacity: 0;
    }
    100% {
      opacity: .5;
    }
  }
`

const NextButton = styled(Triangle)`
  background: rgba(0,0,0,.2);
  border: 1px solid red;
  &:before {
    right: 100%;
    top: 0;
    position: absolute;
  }
`

const Types = styled.div`
  background-image: url('/public/images/thunder.jpg');
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  mask-image: linear-gradient(black, black, transparent);
`
const TypesB = styled.div`
  background-image: url('/public/images/grass.jpg');
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  mask-image: linear-gradient(transparent 50%, black, black, black);
`

const Pokemon = ({ name, sprites, moves, types, id, palette }) => (
  <PokemonStyled palette={palette}>
    <Types />
    <TypesB />
    <div>
      <ColorStyled color={palette[0].toString()} />
      <ColorStyled color={palette[1].toString()} />
      <ColorStyled color={palette[2].toString()} />
      <ColorStyled color={palette[3].toString()} />
      <ColorStyled color={palette[4].toString()} />
      <ColorStyled color={palette[5].toString()} />
      <ColorStyled color={palette[6].toString()} />
      <ColorStyled color={palette[7].toString()} />
      <ColorStyled color={palette[8].toString()} />
      <ColorStyled color={palette[9].toString()} />
    </div>
    <div className="details">
      <BackGround>
        <RightSide type="left" width={500} color="rgba(0,0,0, .2)" height={130}/>
        <LeftSide type="right" width={500} color="rgba(0,0,0, .2)" height={130}/>
        <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3,'0')}.png`} />
      </BackGround>
      <Link to={`/pokemon/${id - 1}`}>
        <button>prev</button>
      </Link>
      <Link to={`/pokemon/${id + 1}`}>
        <NextButton>
          next
        </NextButton>
      </Link>
      <Link to={`/pokemon/sdasdas`}>
        <button>asdass</button>
      </Link>
      <h2 className="name">{name}</h2>
    </div>
    {/* <Image src={sprites.front_default} />
    <Image src={sprites.back_default} />
    <Image src={sprites.front_shiny} />
    <Image src={sprites.back_shiny} /> */}
    <ul>
      {types.map(({ type }) => (
        <PokemonType type={type.name} key={type.name} />
      ))}
    </ul>
    {/* <ol>
      {moves.map(({ move }) => (
        <li key={move.name} >{move.name}</li>
      ))}
    </ol> */}
  </PokemonStyled>
)

export default Pokemon
