const api = require('../utils/api').default
const body = require('../utils/body')
const cache = require('memory-cache')
// const ssr = require('../../dist/ssr/utils/server-data')
const renderMiddleware = require('../utils/render-middleware')

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
    const { content, styles } = renderMiddleware({pokemon: pokemonCache}, req.url)
    config.html = content
    config.styles = styles,
    config.data = pokemonCache
    console.log('respondimos con cache')

    res.send(body(config))
  }

  const pokemon = await api.getPokemon(id)
  cache.put('pokemon', pokemon)

  if (pokemon) {
    const { content, styles } = renderMiddleware({pokemon}, req.url)

    config.html = content
    config.styles = styles,
    config.data = pokemon
    res.send(body(config))
  }

  config.html = 'No hay pokemon paila'
  config.js = ''
  config.title = 'Pokemon no encontrado'
  res.send(body(config))

}
module.exports = renderPokemonPage
