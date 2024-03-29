import * as React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'

function Logo() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box width={[50, 100]}>
        <StaticImage
          layout="constrained"
          placeholder="blurred"
          src="../images/logo-minimal.png"
          width={80}
          // height={50}
          // quality={95}
          alt="איילה אירועים לוגו"
        />
      </Box>
    </Flex>
  )
}

export default Logo
