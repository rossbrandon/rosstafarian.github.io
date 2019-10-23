import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import scrollToElement from 'scroll-to-element'
import Name from './name'
import { media } from '../utils/style'

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li button,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li button {
    font-family: 'Raleway';
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${props =>
    props.dark &&
    css`
      background: #fff;
      & ul > li button,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li button:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${props =>
    props.main &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${media.xs`
    & ul {
      display: none;
    }
  `}
`

const ButtonLink = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;

  :hover,
  :focus {
    text-decoration: none;
  }
`

const NavBar = ({ children, dark, main }) => {
  const linkMap = children
    .map(el => {
      if (el.props.id)
        return { name: el.props.children, href: `#${el.props.id}` }
    })
    .filter(n => n !== undefined)
    .reverse()
  const links = linkMap.map(link => {
    return (
      <li key={link.name}>
        <ButtonLink
          onClick={() => {
            scrollToElement(link.href)
          }}
          onKeyDown={() => {
            scrollToElement(link.href)
          }}
          type="button"
          tabIndex="0"
        >
          {link.name}
        </ButtonLink>
      </li>
    )
  })
  return (
    <Base dark={dark} main={main}>
      <Flex>
        <Box px={2} width={[1, 1 / 3, 2 / 6]}>
          <Name />
        </Box>
        <Box px={2} width={[0, 2 / 3, 4 / 6]}>
          <ul>{links}</ul>
        </Box>
      </Flex>
    </Base>
  )
}

export default NavBar
