import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Icon } from "native-base";
import { Entypo } from "@native-base/icons";

const HomeScreen = (props) => {
  const pressHandler = () => {
    // props.navigation.navigate({ routeName: "Settings" });
  };

  // return <Button title="Test" style={styles.button} onPress={pressHandler} />;
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Icon as={Entypo} name="user" />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "red",
  },
});

export default HomeScreen;
