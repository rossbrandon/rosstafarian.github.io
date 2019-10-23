import { graphql, useStaticQuery } from 'gatsby'

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/portfolio/" } }) {
        nodes {
          frontmatter {
            title
            slug
            author
            tags
            imageAlt
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          timeToRead
        }
      }
    }
  `)

  return data.allMdx.nodes
}

export default usePortfolio
