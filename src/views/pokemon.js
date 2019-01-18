import api from 'utils/api'
import body from 'utils/body'
import cache from 'memory-cache'
import renderMiddleware from 'utils/render-middleware'

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
    res.send(body(config))
  }

  const pokemon = await api.getPokemon(id)
  cache.put('pokemon', pokemon)
  const { content, styles } = renderMiddleware({ pokemon }, req.url)
  config.html = content
  config.styles = styles,
  config.data = pokemon
  res.send(body(config))

}

export default renderPokemonPage
