import { Box, Center, Divider, Heading } from '@chakra-ui/react'
import { Banner, Slider, TravelType } from 'components'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Box as='header' h='100px'>
        <Center h='100%'>
          <Image
            src='/img/world-trip-logo.svg'
            width='184'
            height='45'
            objectFit='cover'
            alt='World Trip logo'
          ></Image>
        </Center>
      </Box>
      <Box h='100%' as='main'>
        <Banner srcImg='/img/banner-bg.jpg' />
        <TravelType />
        <Center mt='80px' mb='52px'>
          <Divider maxW='90px' borderColor='brand.text' borderBottomWidth='2px' />
        </Center>
        <Center flexDirection='column' justifyContent='center' alignItems='center'>
          <Heading fontSize='36px' fontWeight='normal' lineHeight='54px'>
            Vamos nessa?
          </Heading>
          <Heading fontSize='36px' fontWeight='normal' lineHeight='54px'>
            Então escolha seu continente
          </Heading>
        </Center>
        <Slider />
      </Box>
    </>
  )
}

export default Home
