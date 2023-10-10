import React from 'react'
import { Home } from '@screens/Home'
import { Details } from '@screens/Details'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'
import { Theme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={Theme}>
      {fontsLoaded ? <Details />: []}
    </ThemeProvider>
  )
}
