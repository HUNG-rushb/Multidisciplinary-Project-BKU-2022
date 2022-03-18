// import { StyleSheet, StatusBar } from "react-native";

import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Divider } from "native-base";

import NavBar from "../components/Layout/NavBar";
import Rooms from "../components/Layout/Rooms/RoomsHS";
import Devices from "../components/Layout/Devices/DevicesVS";

const HomeScreen = (props) => {
  // const pressHandler = () => {
  // props.navigation.navigate({ routeName: "Settings" });
  // };

  // return <Button title="Test" style={styles.button} onPress={pressHandler} />;
  return (
    <>
      <NavBar />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Rooms />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Devices />
    </>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     width: "100%",
//     backgroundColor: "red",
//   },
// });

export default HomeScreen;
