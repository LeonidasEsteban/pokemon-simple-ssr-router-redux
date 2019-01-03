const api = require('./api')
const body = require('./body')

const ssr = require('../../dist/ssr/utils/server-data')

const renderPokemonPage = async (req, res) => {
  const id = req.params.id
  const pokemon = await api.getPokemon(id)

  if (pokemon) {
    res.send(body({
      title: 'Quien es ese pokemon',
      html: ssr(pokemon).content,
      data: pokemon,
      css: 'styles',
      js: 'app'
    }))
  }

  res.send(body({
    html: 'no hay pokemon paila',
    css: 'styles',
    title: 'No hay Pokemon :('
  }))

}
module.exports = renderPokemonPage
