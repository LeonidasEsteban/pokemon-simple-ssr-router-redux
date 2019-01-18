import React, { Component } from "react";
import { connect } from 'react-redux'
import Pokemon from '../components/pokemon'
import api from '../utils/api'
import NProgress from 'nprogress'
import NotFound from '../pages/not-found'

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
    if (pokemon) {
      dispatch({
        type: 'SET_POKEMON',
        payload: {
          pokemon
        }
      })
    } else {
      dispatch({
        type: 'SET_EMPTY',
      })
    }
    NProgress.done()
  }
  render() {
    if(!this.props.pokemon.name) {
      return <NotFound />
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
