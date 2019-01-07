const api = require('./api')
const body = require('./body')
const cache = require('memory-cache')


const ssr = require('../../dist/ssr/utils/server-data')

const renderPokemonPage = async (req, res) => {
  const id = req.params.id

  const pokemonCache = cache.get('pokemon')
  if(pokemonCache && pokemonCache.id.toString() === id) {
    console.log('respondimos con cache')
    res.send(body({
      title: 'Quien es ese pokemon',
      html: ssr(pokemonCache).content,
      data: pokemonCache,
      css: 'styles',
      js: 'app'
    }))
    res.end()
  }

  const pokemon = await api.getPokemon(id)
  cache.put('pokemon', pokemon)

  if (pokemon) {
    res.send(body({
      title: 'Quien es ese pokemon',
      html: ssr(pokemon).content,
      data: pokemon,
      css: 'styles',
      js: 'app'
    }))
    res.end()
  }
  res.send(body({
    html: 'no hay pokemon paila',
    css: 'styles',
    title: 'No hay Pokemon :('
  }))
  res.end()

}
module.exports = renderPokemonPage
