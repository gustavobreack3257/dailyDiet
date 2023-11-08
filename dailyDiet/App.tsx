import React from 'react'
import { StatusBar } from 'react-native'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'


import { Theme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'

import {Loading} from '@components/Loading'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={Theme}>
      {fontsLoaded ? <Routes />: <Loading/>}

      <StatusBar barStyle={'dark-content'}
      translucent
      backgroundColor='transparent'/>
    </ThemeProvider>
  )
}
