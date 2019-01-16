import React, { PureComponent } from "react"
import styled from 'styled-components'

const ImgStyled = styled.div`
  .image {
    transition: 1s;
    ${({ loaded }) => loaded ? `
      opacity: 1;
      visibility: visible;
    `: `
      opacity: 0;
      visibility: hidden;
    `}
  }
`

class Img extends PureComponent {
  state = {
    loaded: false
  }
  loaded = () => {
    this.setState({
      loaded: true
    })
  }
  setRef = (img) => {
    if (!img) { return; }
    img.onload = this.loaded
    if (img.complete) {
      this.loaded();
    }
  }
  render() {
    return (
      <ImgStyled loaded={this.state.loaded}>
        <img
          src={this.props.src}
          ref={this.setRef}
          onLoad={this.loaded}
          className="image"
        />
      </ImgStyled>
    )
  }
}

export default Img
