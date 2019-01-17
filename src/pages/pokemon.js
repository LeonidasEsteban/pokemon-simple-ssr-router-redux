import React, { Component } from "react";
import { connect } from 'react-redux'
import Pokemon from '../components/pokemon'
import api from '../utils/api'
import NProgress from 'nprogress'

class PokemonPage extends Component {
  state = {
    loading: false
  }
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
  componentDidMount() {
    const {
      match: { params: { id } },
    } = this.props
    this.searchPokemon(id)
  }
  searchPokemon = async (id) => {
    const {
      dispatch,
    } = this.props
    NProgress.start()
    const pokemon = await api.getPokemon(id)
    dispatch({
      type: 'SET_POKEMON',
      payload: {
        pokemon
      }
    })
    NProgress.done()
  }
  render() {
    if(!this.props.pokemon.name) {
      return null
    }
    return (
      <Pokemon {...this.props.pokemon} />
    )
  }
}

function mapStateToProps({ pokemon }) {
  return {
    pokemon
  }
}

export default connect(mapStateToProps)(PokemonPage)
