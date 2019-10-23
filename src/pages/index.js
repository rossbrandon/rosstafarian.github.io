import React from 'react'
import Unsplash from 'react-unsplash-wrapper'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Layout from '../components/layout'
import { media } from '../utils/style'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'
import Footer from '../components/footer'
import useSiteMetadata from '../hooks/use-sitemetadata'
import usePortfolio from '../hooks/use-portfolio'
import useLogos from '../hooks/use-logos'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

const Hero = styled.div`
  width: 100vw;
  height: 100vh;
`

export default () => {
  const { github, linkedin, email } = useSiteMetadata()
  const portfolio = usePortfolio()
  const logos = useLogos()
  const collectionId = 8807226

  const content = (
    <Content>
      <Hero>
        <Unsplash expand collectionId={collectionId} />
      </Hero>
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: 'github-alt',
            href: github,
          },
          {
            name: 'linkedin',
            href: linkedin,
          },
          {
            name: 'envelope-o',
            href: email,
          },
        ]}
      />
      <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
              Full-stack software engineer, with a passion for application
              architecture and development. <br /> In 2011 I started working as
              a full-stack developer at Hewlett-Packard in Austin, TX working
              with Java, Javascript, SQL Server, and Linux. <br /> In 2017, I
              took a new opportunity working with the e-commerce platform{' '}
              <a
                href="https://magento.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Magento
              </a>{' '}
              writing backend PHP REST APIs. <br /> I currently work as a senior
              software engineer with{' '}
              <a
                href="https://adobe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adobe
              </a>{' '}
              and work across various domains including developing Spring Boot
              microservices, data driven Magento extensions in PHP, and service
              oriented modern Javascript.
            </p>
          </Box>
        </Flex>
      </Section>
      <a id="portfolio">Portfolio</a>
      <Title small>Portfolio</Title>
      <Portfolio items={portfolio} />
      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>
        <span>Where I've worked.</span>
        <Item>
          <span>JUL 2018 - PRESENT</span>
          <h6>ADOBE</h6>
          <p>Senior Software Engineer</p>
        </Item>
        <Item>
          <span>AUG 2017 - JUL 2018</span>
          <h6>Magento</h6>
          <p>Software Engineer</p>
        </Item>
        <Item>
          <span>AUG 2015 - AUG 2017</span>
          <h6>HP, INC</h6>
          <p>Software Development Specialist</p>
        </Item>
        <Item>
          <span>JAN 2011 - AUG 2015</span>
          <h6>Hewlett-Packard</h6>
          <p>Full Stack Developer</p>
        </Item>
      </Section>
      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.</span>
        <Showcase
          images={logos.allImageSharp ? logos.allImageSharp.edges : []}
        />
      </Section>
      <Footer />
    </Content>
  )
  return (
    <Layout>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}
