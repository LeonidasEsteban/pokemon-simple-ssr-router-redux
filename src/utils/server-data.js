import Routes from '../routes'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'


function render(store, url) {
  const sheet = new ServerStyleSheet()
  const context = {}
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  )
  const styleTags = sheet.getStyleTags()
  return {
    content,
    styles: styleTags,
    context,
  }
}


export default render
