function pokemonReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_POKEMON': {
      return { ...state, ...action.payload.pokemon }
    }
    default: {
      return state
    }
  }
}

export default pokemonReducer
