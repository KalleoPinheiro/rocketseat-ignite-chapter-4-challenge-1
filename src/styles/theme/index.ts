import { extendTheme } from '@chakra-ui/react'

import { styles } from './styles'
import { config } from './config'
import { colors } from './colors'
import { fonts } from './fonts'

export const customTheme = extendTheme({ config, styles, colors, fonts })
