import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Icon = ({ name, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <FontAwesome name={name} />
  </a>
)

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin: 5px;
    color: #fff;
  }
  & a span {
    transition: color 0.2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-envelope-o {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`

const SocialIcons = props => {
  const icons = props.icons.map(icon => {
    return <Icon key={icon.name} name={icon.name} href={icon.href} />
  })
  return <Base {...props}>{icons}</Base>
}

export default SocialIcons
