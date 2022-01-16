import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Flex } from '@chakra-ui/react'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="homepage" />

      <Flex pos="relative" justifyContent="center" alignItems="center">
        <StaticImage
          layout="constrained"
          placeholder="dominantColor"
          src="../images/banner.jpeg"
          alt="איילה אירועים "
        />
        <Box
          pos="absolute"
          w="100%"
          textAlign="center"
          bg="#293e3eb3"
          py={[2, 10, 10]}
          mt={['-2rem', '-12rem']}
        >
          {/*<StaticImage*/}
          {/*  layout="constrained"*/}
          {/*  placeholder="blurred"*/}
          {/*  src="../images/ayala-text.png"*/}
          {/*  width={100}*/}
          {/*  alt="איילה השכרת ציוד "*/}
          {/*/>*/}
          <Box
            as="h1"
            fontSize={['1rem', '3rem', '3rem']}
            fontWeight="700"
            color="white"
          >
            איילה - השכרת ציוד לאירועים
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
