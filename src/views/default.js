const renderMiddleware = require('../utils/render-middleware')
const body = require('../utils/body')
// const sendTo404 = require('../utils/send-to-404')

const renderRouter = async (req, res) => {
  const { content, styles, context } = renderMiddleware({}, req.url)
  console.log('el contexto es', context.url)
  if (context.url) {
    // sendTo404(context)
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
