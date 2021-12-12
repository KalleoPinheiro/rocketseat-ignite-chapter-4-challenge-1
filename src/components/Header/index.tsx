import { useMemo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Center, useMediaQuery } from '@chakra-ui/react'

export const Header = () => {
  const router = useRouter()
  const isHomePage = useMemo(() => router.pathname === '/', [])
  const [isMobile] = useMediaQuery('(max-width: 376px)')

  const renderLogo = () => (
    <Box as='header' h={isMobile ? '50px' : '100px'} px={isMobile ? ['0', '50px'] : ['0', '100px']}>
      <Center h='100%'>
        <Image
          src='/img/world-trip-logo.svg'
          width={isMobile ? 81 : 184}
          height={isMobile ? 20 : 45}
          objectFit='cover'
          alt='World Trip logo'
        ></Image>
      </Center>
    </Box>
  )

  return (
    <>
      {!isHomePage ? (
        <Box
          as='header'
          display='grid'
          gridTemplateColumns={isMobile ? '16px 1fr' : '32px 1fr'}
          gridTemplateRows={isMobile ? '50px' : '100px'}
          px={isMobile ? ['0', '50px'] : ['0', '100px']}
        >
          <button onClick={() => router.back()}>
            <Image
              src='/img/arrow-left.svg'
              width={isMobile ? 16 : 32}
              height={isMobile ? 16 : 32}
              alt='Arrow left image'
            />
          </button>
          {renderLogo()}
        </Box>
      ) : (
        renderLogo()
      )}
    </>
  )
}
