import { extendTheme,  } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('brand.text', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
    },
  }),
}
