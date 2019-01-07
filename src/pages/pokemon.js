import React, { Component } from "react";
import { connect } from 'react-redux'
import Pokemon from '../components/pokemon'

class PokemonPage extends Component {
  render() {
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
