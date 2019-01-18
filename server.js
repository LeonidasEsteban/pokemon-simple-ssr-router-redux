import express from 'express'
import pokemonView from 'views/pokemon'
import defaultView from 'views/default'
const app = express();

app.use('/public', express.static(`${__dirname}/static`))
app.use('/dist', express.static(`${__dirname}/dist/js`))
app.use('/modules', express.static(`${__dirname}/node_modules`))



app.get('/pokemon/:id', pokemonView)

app.get('*', defaultView)


app.listen(3002, () => {
  console.log('iniciando en el puerto 3002')
})
