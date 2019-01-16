const renderJS = (file) => {
  if (file) {
    return `<script src="/dist/${file}.js"></script>`
  }
  return ''
}

const body = ({title, html, css, js, data, styles = ''}) => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="/public/css/${css}.css" />
    <link rel="stylesheet" href="/modules/nprogress/nprogress.css" />
    <title>${title}</title>
    ${styles}
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.data = ${JSON.stringify(data)}
    </script>
    ${renderJS(js)}
    <noscript>
      <style>
        .image {
          visibility: visible !important;
          opacity: 1 !important;
        }
      </styled>
    </noscript>
  </body>
  </html>
`)

module.exports = body
