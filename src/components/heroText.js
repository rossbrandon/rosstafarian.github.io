import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  position: absolute;
  top: 50%;
  left: 45%;
  ${media.md`
    left: 10%;
    top: 40%;
  `}
  ${media.xs`
    left: 3%;
    top: 15%;
    letter-spacing: 12px;
  `}
`

const HeroText = props => {
  if (props.text) {
    return (
      <Typist>
        <StyledTypist>
          <strong>
            {props.text.split(' ').slice(0, 1)}
            <br />
          </strong>
          {props.text
            .split(' ')
            .slice(1)
            .join(' ')}
        </StyledTypist>
      </Typist>
    )
  }
  return (
    <StyledTypist cursor={{ show: false }}>
      <Typist.Delay ms={1000} />
      <strong>I Make</strong> Clever APIs
      <Typist.Backspace count={11} delay={300} />
      <span> Efficient Microservices</span>
      <Typist.Backspace count={23} delay={300} />
      <span> Fast Web Apps</span>
      <Typist.Backspace count={13} delay={300} />
      <strong>.</strong>
      <Typist.Delay ms={200} />
      <strong>.</strong>
      <Typist.Delay ms={300} />
      <strong>.</strong>
      <Typist.Delay ms={10} />
      <br />
      <span>Awesome Stuff</span>
    </StyledTypist>
  )
}

export default HeroText
