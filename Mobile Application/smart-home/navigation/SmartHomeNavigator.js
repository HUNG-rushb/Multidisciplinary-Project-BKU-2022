import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../pages/HomeScreen";
import SettingsScreen from "../pages/SettingsScreen";

const SmartHomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: {},
  }
);

export default createAppContainer(SmartHomeNavigator);
