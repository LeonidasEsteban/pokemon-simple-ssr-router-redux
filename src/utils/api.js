const BASE_API = 'https://pokeapi.co/api/v2/'
import 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
polyfill()

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
  async getImage(url) {
    const response = await fetch(url)
    const data = await response.blob()
    return data
  }
}

export default new api()
