import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    },
    'html, body, #__next': {
      width: '100vw',
      height: '100vh',
    },
    body: {
      fontFamily: "'Poppins', sans-serif",
      color: 'brand.text',
      bg: 'white',
      width: '100%',
      height: '100%',
    },
    '.swiper': {
      width: 'auto',
      height: 'auto',
    },
    '.swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
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
