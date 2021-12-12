import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Continent } from 'types'
import { Header } from 'components'
import Image from 'next/image'
import { Box, Center, Flex, Grid, Heading, Text, Tooltip } from '@chakra-ui/react'

const ContinentPage = () => {
  const router = useRouter()
  const [continent, setContinent] = useState<Continent | undefined>(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getContinent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/continent/${router.query.id}`)
        const continent: Continent = await response.json()
        setContinent(continent)
      } catch (error) {
        setError(error as any)
      }
    }

    !continent && getContinent()
  }, [])

  if (error)
    return (
      <>
        <Header />

        <Center minH='100%' minW='100%'>
          Failed to load continent
        </Center>
      </>
    )
  if (!continent)
    return (
      <Center minH='100%' minW='100%'>
        Carregando...
      </Center>
    )

  return (
    <>
      <Header />
      <Box h='100%' as='main'>
        <Box
          w='100%'
          h={['150px', '500px']}
          display='flex'
          flexDirection='column'
          justifyContent={['center', 'flex-end']}
          alignItems={['center', 'flex-start']}
          position='relative'
        >
          <Image
            alt={continent.image.alt}
            src={`/img/${continent.image.src}.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <Heading
            as='h1'
            fontSize={['28px', '48px']}
            fontWeight='bold'
            lineHeight={['42px', '72px']}
            color='brand.lightText'
            zIndex={1}
            ml={['0', '140px']}
            mb={['0', '90px']}
          >
            {continent.name}
          </Heading>
        </Box>
        <Box m={['0 16px', '0 140px']}>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            mt={['24px', '80px']}
            flexWrap='wrap'
          >
            <Text maxW='600px'>{continent?.description}</Text>
            <Box maxW='490px' display='flex' mt={['16px', '0']}>
              <Flex direction='column' m={['0 16px', '0 21px']} maxH='100px'>
                <Heading
                  as='h1'
                  fontSize={['24px', '48px']}
                  fontWeight='bold'
                  lineHeight={['36px', '72px']}
                  color='brand.highlight'
                >
                  {continent.countriesQuantity}
                </Heading>
                <Text
                  fontSize={['18px', '24px']}
                  lineHeight={['27px', '36px']}
                  fontWeight='bold'
                  color='brand.text'
                >
                  países
                </Text>
              </Flex>
              <Flex direction='column' m='0 21px' maxH='100px'>
                <Heading
                  as='h1'
                  fontSize={['24px', '48px']}
                  fontWeight='bold'
                  lineHeight={['36px', '72px']}
                  color='brand.highlight'
                >
                  {continent.languagesQuantity}
                </Heading>
                <Text
                  fontSize={['18px', '24px']}
                  lineHeight={['27px', '36px']}
                  fontWeight='bold'
                  color='brand.text'
                >
                  linguas
                </Text>
              </Flex>
              <Flex direction='column' m='0 21px' maxH='100px'>
                <Heading
                  as='h1'
                  fontSize={['24px', '48px']}
                  fontWeight='bold'
                  lineHeight={['36px', '72px']}
                  color='brand.highlight'
                >
                  {continent.citiesQuantity}
                </Heading>
                <Text
                  fontSize={['18px', '24px']}
                  lineHeight={['27px', '36px']}
                  fontWeight='bold'
                  color='brand.text'
                >
                  cidades
                </Text>
              </Flex>
              <Flex alignSelf='flex-end' maxH='16px'>
                <Tooltip label='cidades +100' fontSize='md' placement='bottom'>
                  <img alt='Info icon' src={`/img/info.svg`} width='16px' height='16px' />
                </Tooltip>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box m={['32px 16px 16px 32px', '80px 140px 40px 140px']}>
          <Heading
            as='h1'
            fontSize={['24px', '36px']}
            fontWeight='medium'
            lineHeight={['36px', '54px']}
            mb={['20px', '40px']}
            color='brand.text'
          >
            Cidades +100
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
            gap={['20px', '46px']}
            justifyItems='center'
            alignItems='center'
          >
            {continent.cities.map(city => (
              <Box
                bg='white'
                key={city.id}
                w='256px'
                minH='279px'
                height='100%'
                borderWidth='1px'
                borderRadius='4px'
                borderColor='rgba(255, 185, 8, 0.5)'
              >
                <Box
                  w='100%'
                  h='173px'
                  display='flex'
                  flexDirection='column'
                  justifyContent='flex-end'
                  alignItems='flex-start'
                  position='relative'
                  overflow='hidden'
                  borderTopLeftRadius='4px'
                  borderTopRightRadius='4px'
                >
                  <Image alt='City image' src={city.image} layout='fill' objectFit='cover' />
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' p='24px'>
                  <Box h='100%'>
                    <Heading
                      as='h1'
                      fontFamily='Barlow'
                      fontSize='20px'
                      fontWeight='semibold'
                      lineHeight='25px'
                      color='brand.text'
                    >
                      {city.name}
                    </Heading>
                    <Text
                      fontFamily='Barlow'
                      fontSize='16px'
                      lineHeight='26px'
                      fontWeight='medium'
                      color='brand.info'
                      pt='12px'
                    >
                      {city.country}
                    </Text>
                  </Box>
                  <Box
                    w='30px'
                    h='30px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-end'
                    alignItems='flex-start'
                    position='relative'
                    borderWidth='1px'
                    borderRadius='50%'
                    overflow='hidden'
                  >
                    <Image
                      alt='Country image'
                      src={city.countryFlag}
                      layout='fill'
                      objectFit='cover'
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ContinentPage
