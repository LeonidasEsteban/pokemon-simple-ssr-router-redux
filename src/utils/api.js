const BASE_API = 'https://pokeapi.co/api/v2/'
require('isomorphic-fetch')
require('es6-promise').polyfill()

class api {
  async getPokemon(id) {
    const response = await fetch(`${BASE_API}pokemon/${id}`)

    if (response.status === 404) {
      return false

    }
    const pokemon = await response.json()
    return pokemon
  }
}

module.exports = new api()
