import * as React from 'react'
import Logo from './logo'
import { Box, Button, Flex, List, ListItem } from '@chakra-ui/react'
import Container from './container'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <Container
      as="header"
      justifyContent="space-between"
      alignItems="center"
      display="grid"
      gridAutoFlow="column"
      gridTemplateColumns="1fr 1fr 1fr"
      mb={4}
    >
      <Box as="nav">
        <List display={['none', 'none', 'flex']}>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              אודות
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              צור קשר
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              לקוחות
            </Button>
          </ListItem>
        </List>
      </Box>
      <Link to="/">
        <Logo />
      </Link>
      <Flex alignItems="center" justifyContent="end">
        <a href="https://wa.me/972532481519">
          <BsWhatsapp color="#25D366" size={24} />
        </a>
        <Box mr={4} display={['none', 'none', 'block']}>
          054-4565454
        </Box>
      </Flex>
    </Container>
  )
}

export default Header