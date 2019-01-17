const BASE_API = 'https://pokeapi.co/api/v2/'
import 'isomorphic-fetch'
// require('es6-promise').polyfill()

class api {
  async getPokemon(id) {
    try {
      const response = await fetch(`${BASE_API}pokemon/${id}/`)
      const pokemon = await response.json()
      return pokemon
    } catch {
      return false
    }
  }
}

export default new api()
