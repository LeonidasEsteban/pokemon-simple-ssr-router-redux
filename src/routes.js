import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import PokemonPage from './pages/pokemon'
import HomePage from './pages/home'
import NotFound from './pages/not-found'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes
