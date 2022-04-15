import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";

import LivingroomScreen from "../screens/rooms/LivingroomScreen";
import KitchenScreen from "../screens/rooms/KitchenScreen";
import BedroomScreen from "../screens/rooms/BedroomScreen";
import BathroomScreen from "../screens/rooms/BathroomScreen";

import SettingsScreen from "../screens/SettingsScreen";

const SmartHomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },

    // Livingroom: {
    //   screen: LivingroomScreen,
    // },
    Kitchen: {
      screen: KitchenScreen,
    },
    Bedroom: {
      screen: BedroomScreen,
    },
    Bathroom: {
      screen: BathroomScreen,
    },

    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: { headerShown: true },
  }
);

export default createAppContainer(SmartHomeNavigator);
