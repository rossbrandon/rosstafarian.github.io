import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import scrollToElement from 'scroll-to-element'
import Name from './name'
import Button from './button'
import SocialIcons from './socialIcons'
import useSiteMetadata from '../hooks/use-sitemetadata'

const Base = styled.div`
    height: fit-contents;
    padding: 0;
    background: #292929;
`

const FooterText = styled.div`
    padding-top: 6px;
    color: #fff;
    text-align: center;
    a {
        color: #9880dc;
    }
`

const SocialIconsStyled = styled(SocialIcons)`
    margin-left: -8px;
    text-align: left;
`

const CenteredButtonBox = styled(Box)`
    margin: 2em auto;
`

const Footer = () => {
    const { github, linkedin, email } = useSiteMetadata()
    return (
        <Base>
            <Flex flexWrap="wrap" justifyContent="space-around">
                <Box px={2} width={[1, 1 / 2, 1 / 3, 1 / 6]}>
                    <Flex flexDirection="column">
                        <Box>
                            <Name block />
                        </Box>
                    </Flex>
                </Box>
                <Box width={[1, 1 / 2, 1 / 3, 1 / 6]}>
                    <Flex justifyContent="center" flexDirection="column">
                        <Box>
                            <FooterText>
                                <h4>
                                    Made with{' '}
                                    <a
                                        href="https://www.gatsbyjs.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GatsbyJS
                                    </a>
                                </h4>
                            </FooterText>
                        </Box>
                        <CenteredButtonBox>
                            <Button
                                onClick={() => {
                                    scrollToElement('html')
                                }}
                                small="small"
                                dark="dark"
                                opaque="opaque"
                            >
                                Top
                            </Button>
                        </CenteredButtonBox>
                    </Flex>
                </Box>
                <Box width={[4 / 5, 1 / 2, 1 / 3, 1 / 6]} pt={2}>
                    <Flex
                        alignItems="center"
                        justifyContent="right"
                        css="padding-right: 25px;"
                    >
                        <SocialIconsStyled
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
                    </Flex>
                </Box>
            </Flex>
        </Base>
    )
}

export default Footer
