import Image from 'next/image'
import { Box, Heading, Text, Button, HStack } from '@chakra-ui/react'

import * as S from './styles'

export type BannerProps = {
  srcImg: string
}

export const Banner = ({ srcImg }: BannerProps) => (
  <S.Wrapper srcImg={srcImg}>
    <Box maxW='425px' ml='140px' mt='80px'>
      <Heading
        as='h1'
        fontSize='36px'
        fontWeight={'medium'}
        lineHeight={'54px'}
        color='brand.lightText'
      >
        5 Continentes, infinitas possibilidades.
      </Heading>
      <Text
        fontSize='20px'
        mt={'20px'}
        lineHeight={'30px'}
        fontWeight={'normal'}
        color='brand.clearText'
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
    <Box mr='140px' mt='85px'>
      <Image
        src='/img/airplane.png'
        width='417px'
        height='270px'
        alt='Imagem de um avião de cor amarela com pequenas nuvens brancas em volta'
      />
    </Box>
  </S.Wrapper>
)
