import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid red;
`

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Quien es ese pokemon?</h1>
        <Link to="/pokemon/12" ><Button>ir la poke</Button></Link>
      </div>
    )
  }
}

export default Home
