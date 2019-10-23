import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import TimeAgo from 'react-timeago'
import Breadcrumb from '../components/breadcrumb'
import Bar from '../components/bar'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        tags
        date
      }
      body
      timeToRead
    }
  }
`

const Header = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
  position: relative;
  overflow: hidden;

  & > div {
    padding-top: 120px;
    margin: auto;
    max-width: 600px;
  }
`

const Tags = styled.ol`
  float: right;
  list-style: none;
  margin: 0;
  & li a,
  & li {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #222;
  }
  & > li + li:before {
    padding: 0 8px;
    font-weight: 400;
    color: #444;
    content: '|';
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 5vh;
  hr {
    margin: 0 0 40px;
  }
`

const Title = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
  color: #fff;
`

const Timestamp = styled.i`
  float: right;
`

const TimeToRead = styled.h5`
  text-transform: uppercase;
  margin-top: 0.5em;
  display: inline-block;
`

const PostTemplate = ({ data: { mdx: page }, location }) => {
  const crumbs = [
    { name: 'home', link: '/' },
    { name: 'portfolio', link: '/#portfolio' },
    { name: page.frontmatter.title, link: location.pathname },
  ]
  const tags = page.frontmatter.tags.map(function(tag) {
    return <li key={tag}>{tag}</li>
  })
  return (
    <div>
      <Header>
        <Flex flexWrap="wrap">
          <Box px={2} width={[1, 2 / 3, 1 / 3]}>
            <Title>{page.frontmatter.title}</Title>
          </Box>
          <Box px={2} width={[1, 2 / 3]}>
            <Breadcrumb crumbs={crumbs} />
          </Box>
          <Box px={2} width={[1]}>
            <Bar />
          </Box>
        </Flex>
      </Header>
      <Content>
        <TimeToRead>{page.timeToRead} min read</TimeToRead>
        <Tags>{tags}</Tags>
        <Bar />
        <MDXRenderer>{page.body}</MDXRenderer>
        <Timestamp>
          Posted: <TimeAgo date={page.frontmatter.date} />
        </Timestamp>
      </Content>
    </div>
  )
}

export default PostTemplate
