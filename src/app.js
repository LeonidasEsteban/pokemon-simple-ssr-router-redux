import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PokemonPage from './pages/pokemon'
import HomePage from './pages/home'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pokemon/:id" component={PokemonPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
