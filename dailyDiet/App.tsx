import React from 'react'
import { Home } from '@screens/Home'
import { Details } from '@screens/Details'
import { MealAdd } from '@screens/MealAdd'
import { MealFeedback } from '@screens/MealFeedback'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'
import { StatusBar } from 'react-native'

import { Theme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={Theme}>
      {fontsLoaded ? <MealFeedback />: []}

      <StatusBar barStyle={'dark-content'}
      translucent
      backgroundColor='transparent'/>
    </ThemeProvider>
  )
}
