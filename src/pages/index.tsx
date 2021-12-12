import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { Box, Center, Divider, Heading } from '@chakra-ui/react'

import { Banner, Header, Slider, TravelType } from 'components'
import { Continent } from 'types'

const Home: NextPage = ({ continents }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header />
      <Box h='100%' as='main'>
        <Banner srcImg='/img/banner-bg.jpg' />
        <TravelType />
        <Center mt={['36px', '80px']} mb={['24px', '52px']}>
          <Divider maxW={['60px', '90px']} borderColor='brand.text' borderBottomWidth='2px' />
        </Center>
        <Center flexDirection='column' justifyContent='center' alignItems='center'>
          <Heading
            fontSize={['20px', '36px']}
            fontWeight='medium'
            lineHeight={['30px', '54px']}
            whiteSpace='pre'
            textAlign='center'
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Heading>
        </Center>
        <Slider data={continents} />
      </Box>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await fetch('http://localhost:3000/api/continents')
  const continents: Continent[] = await response.json()

  return {
    props: {
      continents,
    },
  }
}
