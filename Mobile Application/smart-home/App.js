// import { useState } from "react";
// import { AppLoading } from "expo";

// import * as Font from "expo-font";

import SmartHomeNavigator from "./navigation/SmartHomeNavigator";
import { NativeBaseProvider, extendTheme } from "native-base";

// import { Entypo } from "@native-base/icons";

// Load fonts
// const fetchFonts = () => {
//   return Font.loadAsync({
//     // "open-sans": require("./assets/fonts/a/ttf"),
//   });
// };

// ! https://docs.nativebase.io/setup-provider
const nativebaseConfig = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

// const newColorTheme = {
//   primary: {
//     50: "#E3F2F9",
//     100: "#C5E4F3",
//     200: "#A2D4EC",
//     300: "#7AC1E4",
//     400: "#47A9DA",
//     500: "#0088CC",
//     600: "#007AB8",
//     700: "#006BA1",
//     800: "#005885",
//     900: "#003F5E",
//   },
// };

const theme = extendTheme({
  // colors: newColorTheme,
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   );
  // }

  return (
    <NativeBaseProvider config={nativebaseConfig} theme={theme}>
      <SmartHomeNavigator />
    </NativeBaseProvider>
  );
}
