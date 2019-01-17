import ssr from '../../dist/ssr/utils/server-data'
import configStore from '../utils/config-store'

const renderMiddleware = (data, url) => {
  const store = configStore(data)
  const { content, styles, context } = ssr(store, url)
  return {
    content,
    styles,
    context,
  }


}
module.exports = renderMiddleware
