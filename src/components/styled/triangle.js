import styled from 'styled-components'

function setCoords(type) {
  switch (type) {
    case 'top':
      return ['left', 'right']
    case 'bottom':
      return ['left', 'right']
    case 'left':
      return ['top', 'bottom']
    default:
      return ['top', 'bottom']
  }
}

function fancyThing({ type, width }) {

  const coords = setCoords(type)

  let border = ''
  const isArray = Array.isArray(width)

  coords.forEach((coord, index) => {
    const size = isArray ? width[index] / 2 : width / 2
    border += `border-${coord}: ${size}px solid transparent;`
  })

  return border
}

const TriangleTooltip = styled.div`
  &:before {
    ${fancyThing};
    ${({ type, color, height }) => `border-${type}: ${height}px solid ${color}`};
    content: '';
    width: 0;
    height: 0;
  }
`

export default TriangleTooltip
