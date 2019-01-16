const express = require('express')
const pokemonView = require('./src/views/pokemon')
const routerView = require('./src/views/router')
const app = express();

app.use('/public', express.static(`${__dirname}/static`))
app.use('/dist', express.static(`${__dirname}/dist/js`))
app.use('/modules', express.static(`${__dirname}/node_modules`))


// app.get('/', (req, res) => {
//   res.write('hola mundo')
//   res.end()
// })
app.get('/pokemon/:id', pokemonView)

app.get('*', routerView)

// app.use((req, res, next) => {
//   res.status(404).send('Sorry cant find that!');
// });

app.listen(3002, () => {
  console.log('iniciando en el puerto 3002')
})
