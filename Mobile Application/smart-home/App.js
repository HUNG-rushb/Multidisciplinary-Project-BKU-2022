import SmartHomeNavigator from "./navigation/SmartHomeNavigator";
import { NativeBaseProvider, extendTheme } from "native-base";

// import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import store from "./store/reducers/store";

// const rootReducer = combineReducers();

// const store = createStore(rootReducer);

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
  return (
    <Provider store={store}>
      <NativeBaseProvider config={nativebaseConfig} theme={theme}>
        <SmartHomeNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}

// https://bku-ces-iotsmarthouse.herokuapp.com/
