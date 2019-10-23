import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import { media } from '../utils/style'

const Base = styled.div`
  width: 40%;
  margin: 0 auto !important;
  padding: 0;
  overflow: hidden;
  padding-top: 40px;

  ${media.xs`
    width: 95%;
    margin-left: 0;
  `}
`

const Showcase = logos => {
  const images = logos.images.map(image => (
    <Box key={image.node.name} px={2} width={[1 / 2, 1 / 4]}>
      <Img sizes={image.node.childImageSharp.sizes} />
    </Box>
  ))
  return (
    <Base>
      <Flex flexWrap="wrap">{images}</Flex>
    </Base>
  )
}

export default Showcase
