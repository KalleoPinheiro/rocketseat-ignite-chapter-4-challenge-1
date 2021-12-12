import Image from 'next/image'
import { useRouter } from 'next/router'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Continent } from 'types'

SwiperCore.use([Navigation, Pagination])

type SliderParams = {
  data: Continent[]
}

export const Slider = ({ data }: SliderParams) => {
  const router = useRouter()
  const [isMobile] = useMediaQuery('(max-width: 376px)')
  console.log(isMobile)

  return (
    <>
      <Swiper
        navigation
        pagination
        style={{
          margin: `${!isMobile ? '52px 100px 40px' : '20px 0'}`,
        }}
      >
        {data.map(continent => {
          return (
            <SwiperSlide
              key={continent.id}
              onClick={() => router.push(`/continent/${continent.id}`)}
            >
              <Box
                w='1240px'
                h='450px'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Image
                  alt={continent.image.alt}
                  src={`/img/${continent.image.src}.jpg`}
                  layout='fill'
                  objectFit='cover'
                />
                <Heading
                  as='h1'
                  fontWeight='bold'
                  fontSize={['24px', '48px']}
                  lineHeight={['36px', '72px']}
                  color='brand.lightText'
                >
                  {continent.name}
                </Heading>
                <Text
                  fontWeight='bold'
                  fontSize={['14', '24px']}
                  lineHeight={['21px', '36px']}
                  mt={['12px', '16px']}
                  color='brand.clearText'
                >
                  {continent.shortDescription}
                </Text>
              </Box>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
