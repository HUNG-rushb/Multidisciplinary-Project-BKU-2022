import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const SmartHomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: { headerShown: false },
  }
);

export default createAppContainer(SmartHomeNavigator);
