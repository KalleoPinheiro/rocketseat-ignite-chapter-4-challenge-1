import Image from 'next/image'
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'

import * as S from './styles'

export type BannerProps = {
  srcImg: string
}

export const Banner = ({ srcImg }: BannerProps) => {
  const [isMobile] = useMediaQuery('(max-width: 376px)')

  return (
    <S.Wrapper srcImg={srcImg} isMobile={isMobile}>
      <Box maxW='425px' ml={['16px', '140px']} mt={['28px', '80px']}>
        <Heading
          as='h1'
          fontSize={['20px', '36px']}
          fontWeight={'medium'}
          lineHeight={['30px', '54px']}
          color='brand.lightText'
          whiteSpace='pre'
        >
          5 Continentes
          <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontSize={['14px', '20px']}
          mt={['8px', '20px']}
          lineHeight={['14px', '30px']}
          fontWeight={'normal'}
          color='brand.clearText'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {!isMobile && (
        <Box mr='140px' mt='85px'>
          <Image
            src='/img/airplane.png'
            width='417px'
            height='270px'
            alt='Imagem de um avião de cor amarela com pequenas nuvens brancas em volta'
          />
        </Box>
      )}
    </S.Wrapper>
  )
}
