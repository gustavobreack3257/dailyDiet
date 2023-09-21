import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";

import { Home } from "./src/Home";
export default function App() {
  const [fontsLoaded] = useFonts([NunitoSans_400Regular, NunitoSans_700Bold])
  return (
      <ThemeProvider theme={theme}>
          <Home/>
      </ThemeProvider>
  );
}