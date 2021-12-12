import Image from 'next/image'
import {
  Box,
  Flex,
  Grid,
  HStack,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from '@chakra-ui/react'
import MarkerIcon from 'Icons/marker'

export const TravelType = () => {
  const [isMobile] = useMediaQuery('(max-width: 376px)')

  return (
    <HStack
      as='section'
      display={'flex'}
      justify={'space-around'}
      align={'center'}
      marginTop={['36px', '80px']}
      padding={['0 50px', '0 140px']}
    >
      {!isMobile ? (
        <>
          <Box
            w='100%'
            h='145px'
            display={'flex'}
            flexDirection={'column'}
            justify='center'
            align='center'
          >
            <Image
              src={'/img/cocktail.svg'}
              alt='A picture of an drink'
              width={'85px'}
              height={'85px'}
            />
            <Text fontSize='24px' color='#47585B' fontWeight={'bold'} lineHeight={'36px'} mt='24px'>
              vida noturna
            </Text>
          </Box>
          <Box
            w='100%'
            h='145px'
            display={'flex'}
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
          >
            <Image
              src={'/img/surf.svg'}
              alt='A picture of a surfboard'
              width={'85px'}
              height={'85px'}
            />
            <Text fontSize='24px' color='#47585B' fontWeight={'bold'} lineHeight={'36px'} mt='24px'>
              praia
            </Text>
          </Box>
          <Box
            w='100%'
            h='145px'
            display={'flex'}
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
          >
            <Image
              src={'/img/building.svg'}
              alt='A picture of a building'
              width={'85px'}
              height={'85px'}
            />
            <Text fontSize='24px' color='#47585B' fontWeight={'bold'} lineHeight={'36px'} mt='24px'>
              moderno
            </Text>
          </Box>
          <Box
            w='100%'
            h='145px'
            display={'flex'}
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
          >
            <Image
              src={'/img/museum.svg'}
              alt='A picture of an museum'
              width={'85px'}
              height={'85px'}
            />
            <Text fontSize='24px' color='#47585B' fontWeight={'bold'} lineHeight={'36px'} mt='24px'>
              clássico
            </Text>
          </Box>
          <Box
            w='100%'
            h='145px'
            display={'flex'}
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
          >
            <Image src={'/img/earth.svg'} alt='A picture of earth' width={'85px'} height={'85px'} />
            <Text fontSize='24px' color='#47585B' fontWeight={'bold'} lineHeight={'36px'} mt='24px'>
              e mais...
            </Text>
          </Box>
        </>
      ) : (
        <Grid
          templateColumns='repeat(2, 1fr)'
          gap='20px'
          justifyContent='center'
          alignItems='center'
        >
          <Box display='flex' justifyContent='center' alignItems='center'>
            <MarkerIcon />
            <Text
              whiteSpace='nowrap'
              fontSize='18px'
              fontWeight='medium'
              lineHeight='27px'
              ml='8px'
            >
              vida noturna
            </Text>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <MarkerIcon />
            <Text
              whiteSpace='nowrap'
              fontSize='18px'
              fontWeight='medium'
              lineHeight='27px'
              ml='8px'
            >
              praia
            </Text>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <MarkerIcon />
            <Text
              whiteSpace='nowrap'
              fontSize='18px'
              fontWeight='medium'
              lineHeight='27px'
              ml='8px'
            >
              moderno
            </Text>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <MarkerIcon />
            <Text
              whiteSpace='nowrap'
              fontSize='18px'
              fontWeight='medium'
              lineHeight='27px'
              ml='8px'
            >
              clássico
            </Text>
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <MarkerIcon />
            <Text
              whiteSpace='nowrap'
              fontSize='18px'
              fontWeight='medium'
              lineHeight='27px'
              ml='8px'
            >
              e mais...
            </Text>
          </Box>
        </Grid>
      )}
    </HStack>
  )
}
