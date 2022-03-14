import { useState } from "react";
import { AppLoading } from "expo";

import * as Font from "expo-font";

import SmartHomeNavigator from "./navigation/SmartHomeNavigator";

// Load fonts
// const fetchFonts = () => {
//   return Font.loadAsync({
//     // "open-sans": require("./assets/fonts/a/ttf"),
//   });
// };

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

  return <SmartHomeNavigator />;
}
