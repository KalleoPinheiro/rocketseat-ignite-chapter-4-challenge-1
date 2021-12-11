import Image from 'next/image'
import { Box, HStack, Text } from '@chakra-ui/react'

export const TravelType = () => (
  <HStack
    display={'flex'}
    justify={'space-around'}
    align={'center'}
    marginTop={'80px'}
    padding={'0 140px'}
  >
    <Box
      w='100%'
      h='145px'
      display={'flex'}
      flexDirection={'column'}
      justify='center'
      align='center'
    >
      <Image src={'/img/cocktail.svg'} alt='A picture of an drink' width={'85px'} height={'85px'} />
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
      <Image src={'/img/surf.svg'} alt='A picture of a surfboard' width={'85px'} height={'85px'} />
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
      <Image src={'/img/museum.svg'} alt='A picture of an museum' width={'85px'} height={'85px'} />
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
  </HStack>
)
