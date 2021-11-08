import { extendTheme } from '@chakra-ui/react'

import { styles } from './styles'
import { config } from './config'

const colors = {
  brand: {
    highlight: '#FFBA08',
    text: '#47585B',
    info: '#999999',
  },
}

export const customTheme = extendTheme({ config, styles, colors })
