const renderMiddleware = require('../utils/render-middleware')
const body = require('../utils/body')

const renderRouter = async (req, res) => {
  const { content, styles } = renderMiddleware({}, req.url)

  res.send(body({
    title: 'Página generica',
    html: content,
    styles: styles,
  }))

}
module.exports = renderRouter
