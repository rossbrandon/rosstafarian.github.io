import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'

const GlobalStyle = createGlobalStyle`
  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;

  img {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  flex: 1;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Body>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Content>{children}</Content>
    </Body>
  )
}

export default Layout
