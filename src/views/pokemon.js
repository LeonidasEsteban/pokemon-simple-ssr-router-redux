const api = require('../utils/api').default
const body = require('../utils/body')
const cache = require('memory-cache')
const ssr = require('../../dist/ssr/utils/server-data')

const renderPokemonPage = async (req, res) => {
  const id = req.params.id
  const pokemonCache = cache.get('pokemon')
  const config = {
    title: '¿Quién es ese pokemon?',
    html: '',
    data: {},
    css: 'styles',
    styles: '',
    js: 'client',
  }

  if(pokemonCache && pokemonCache.id.toString() === id) {
    config.html = ssr(pokemonCache).content
    config.styles = ssr(pokemonCache).styles,
    config.data = pokemonCache
    console.log('respondimos con cache')
    res.send(body(config))
  }

  const pokemon = await api.getPokemon(id)
  cache.put('pokemon', pokemon)

  if (pokemon) {
    config.html = ssr(pokemon).content
    config.styles = ssr(pokemon).styles,
    config.data = pokemon
    res.send(body(config))
  }

  config.html = 'No hay pokemon paila'
  config.js = ''
  config.title = 'Pokemon no encontrado'
  res.send(body(config))

}
module.exports = renderPokemonPage
