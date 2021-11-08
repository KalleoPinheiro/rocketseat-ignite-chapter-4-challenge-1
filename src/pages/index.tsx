import type { NextPage } from 'next'

import { Container, Heading, Text } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Container>
      <Heading as="h1" size="4xl" color="brand.highlight">Hello World</Heading>
      <Text fontSize="md">In love with React & Next</Text>
    </Container>
  )
}

export default Home
