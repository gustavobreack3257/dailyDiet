import { Theme } from '@styles/theme'
import 'styled-components/native'

declare module 'styled-components/native' {
  type ThemeType = typeof Theme
  export interface DefaultTheme extends ThemeType {}
}


