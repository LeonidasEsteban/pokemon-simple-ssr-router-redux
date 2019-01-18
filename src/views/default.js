const renderMiddleware = require('../utils/render-middleware')
const body = require('../utils/body')

const renderRouter = async (req, res) => {
  const { content, styles, context } = renderMiddleware({}, req.url)
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.send(body({
      title: 'Página generica',
      html: content,
      styles: styles,
    }))
  }
}
module.exports = renderRouter
