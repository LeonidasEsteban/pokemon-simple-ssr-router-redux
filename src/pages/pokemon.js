import React, { Component } from "react";
import { connect } from 'react-redux'
import Pokemon from '../components/pokemon'
import api from '../utils/api'

class PokemonPage extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      match: { params: { id } },
    } = this.props
    const {
      match: { params: { id: nextId } },
    } = nextProps

    if (nextId !== id) {
      this.searchPokemon(nextId)
    }

  }
  searchPokemon = async (id) => {
    const {
      dispatch,
    } = this.props
    const pokemon = await api.getPokemon(id)
    console.log(pokemon)
    dispatch({
      type: 'SET_POKEMON',
      payload: {
        pokemon
      }
    })
  }
  render() {
    return (
      <Pokemon {...this.props.pokemon} />
    )
  }
}

function mapStateToProps({ pokemon }) {
  console.log(pokemon)
  return {
    pokemon
  }
}

export default connect(mapStateToProps)(PokemonPage)
