import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
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
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    imageAlt: post.frontmatter.imageAlt,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))
}

export default usePosts
