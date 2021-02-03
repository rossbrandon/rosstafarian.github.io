exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic('failed to create pages', result.errors)
    }

    const pages = result.data.allMdx.nodes

    pages.forEach(page => {
        actions.createPage({
            path: page.frontmatter.slug,
            component: require.resolve('./src/templates/page.js'),
            context: {
                slug: page.frontmatter.slug,
            },
        })
    })
}
