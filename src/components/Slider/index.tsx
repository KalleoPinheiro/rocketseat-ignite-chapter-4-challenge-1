import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Heading, Text } from '@chakra-ui/react'

// import './styles.css'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

export const Slider = () => {
  return (
    <>
      <Swiper navigation pagination>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from Tour Eiffel, Paris'
              src='/img/europe.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              Europa
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              O continente mais antigo
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from Sidney, Australia'
              src='/img/australia.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              Oceania
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              O menor e mais isolado continente do planeta
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from New York, United States'
              src='/img/north-america.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              America do Norte
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              O mais badalado
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from Rio de Janeiro, Brazil'
              src='/img/south-america.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              América do sul
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              O continente com o melhor clima tropical
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from Tokio, Asia'
              src='/img/asia.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              Asia
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              A cultura mais peculiar
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            w={1240}
            h={450}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              alt='A image from beautiful place, Africa'
              src='/img/africa.jpg'
              layout='fill'
              objectFit='cover'
            />
            <Heading
              as='h1'
              fontSize='48px'
              fontWeight={'bold'}
              lineHeight={'72px'}
              color='brand.lightText'
            >
              África
            </Heading>
            <Text
              fontSize='24px'
              mt={'16px'}
              lineHeight={'36px'}
              fontWeight={'bold'}
              color='brand.clearText'
            >
              O continente com mais diversidade cultural
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
