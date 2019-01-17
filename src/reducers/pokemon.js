function pokemonReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_POKEMON': {
      return { ...state, ...action.payload.pokemon }
    }
    case 'SET_EMPTY': {
      return false
    }
    default: {
      return state
    }
  }
}

export default pokemonReducer
