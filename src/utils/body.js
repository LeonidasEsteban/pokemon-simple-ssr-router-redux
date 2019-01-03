const renderJS = (file) => {
  if (file) {
    return `<script src="/public/js/${file}.js"></script>`
  }
  return ''
}

const body = ({title, html, css, js}) => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="/public/css/${css}.css" />
    <title>${title}</title>
  </head>
  <body>
    ${html}
    ${renderJS(js)}
  </body>
  </html>
`)

module.exports = body
