const api = require('../utils/api').default
const body = require('../utils/body')
const cache = require('memory-cache')
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
  console.log('pokemon', pokemon)
  // if(!pokemon) {
  //   const { context } = renderMiddleware({}, req.url)

  //   res.writeHead(302, {
  //     Location: context.url
  //   });
  //   res.end();
  // }
  const { content, styles } = renderMiddleware({ pokemon }, req.url)
  config.html = content
  config.styles = styles,
  config.data = pokemon
  res.send(body(config))

}
module.exports = renderPokemonPage
