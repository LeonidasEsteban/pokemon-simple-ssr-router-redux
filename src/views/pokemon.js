import api from 'utils/api'
import body from 'utils/body'
import cache from 'memory-cache'
import renderMiddleware from 'utils/render-middleware'
import ColorThief from 'color-thief'
const https =  require('https')

const getPalette = (url) => {
  const colorThief = new ColorThief()

  return new Promise((done) => {
    https.get(url, function (res) {
      let buffers = [];

      res.on('data', (chunk) => {
        buffers.push(chunk);
      });

      res.on('end', () => {
        var image = Buffer.concat(buffers);
        const palette = colorThief.getPalette(image, 11)
        done(palette)
      });
    });
  })
}

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
  if (pokemonCache && pokemonCache.id.toString() === id) {
    const { content, styles } = renderMiddleware({ pokemon: pokemonCache }, req.url)
    config.html = content
    config.styles = styles,
      config.data = pokemonCache
    res.send(body(config))
  }

  let pokemon = await api.getPokemon(id)
  const palette = await getPalette(pokemon.sprites.front_default)
  console.log(palette)
  pokemon = { ...pokemon, palette }

  cache.put('pokemon', pokemon)
  const { content, styles } = renderMiddleware({ pokemon }, req.url)
  config.html = content
  config.styles = styles,
  config.data = pokemon
  res.send(body(config))

}

export default renderPokemonPage
