import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScrenn from "../pages/HomeScreen";
import SettingsScreen from "../pages/SettingsScreen";

const SmartHomeNavigator = createStackNavigator({
  Home: HomeScrenn,
  Settings: {
    screen: SettingsScreen,
  },
});

export default createAppContainer(SmartHomeNavigator);
