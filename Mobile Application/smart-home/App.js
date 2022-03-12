import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";

import { AppLoading } from "expo";

import SmartHomeNavigator from "./navigation/SmartHomeNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    // "open-sans": require("./assets/fonts/a/ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <SmartHomeNavigator />

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
