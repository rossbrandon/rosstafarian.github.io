import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.a`
  font-size: 20pt;
  font-family: 'Pacifico', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  ${props =>
      props.dark &&
      css`
          color: #444;
      `}

  ${props =>
      props.block &&
      css`
          display: block;
      `}

  ${props =>
      props.small &&
      css`
          font-size: 1em;
      `}

  ${props =>
      props.big &&
      css`
          font-size: 2em;
      `}
`

const Name = props => {
    const { dark, small, big, block } = props
    return (
        <Base dark={dark} small={small} big={big} block={block} href="/">
            Ross Brandon
        </Base>
    )
}

export default Name
