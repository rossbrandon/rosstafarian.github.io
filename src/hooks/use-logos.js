import { graphql, useStaticQuery } from 'gatsby'

const useLogos = () => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp: allFile(
                filter: { sourceInstanceName: { eq: "logos" } }
                sort: { order: ASC, fields: [name] }
            ) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            sizes(maxWidth: 300) {
                                ...GatsbyImageSharpSizes_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `)

    return data
    /*
  return data.allImageSharp.edges.map(edge => ({
    ...edge.node.childImageSharp,
    id: edge.node.id,
    name: edge.node.name,
  }))
  */
}

export default useLogos
