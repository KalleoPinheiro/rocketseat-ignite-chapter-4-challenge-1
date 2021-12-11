import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: "'Poppins', sans-serif",
      color: mode('brand.text', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
    },
    '.swiper': {
      width: 'auto',
      height: '100%',
      margin: '52px 100px 40px',
    },
    '.swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
      },
    },
    '.swiper-button-prev': {
      color: '#FFBA08',
    },
    '.swiper-button-next': {
      color: '#FFBA08',
    },
    '.swiper-pagination-bullet-active': {
      background: '#FFBA08',
    },
  }),
}
