import 'styled-components'
import { defaultTheme } from '../styles/theme'

declare module 'styled-components' {
  type default_theme = typeof defaultTheme
  export interface DefaultTheme extends default_theme { }
}