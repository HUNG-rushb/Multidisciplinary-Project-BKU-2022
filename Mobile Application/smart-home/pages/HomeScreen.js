import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  //   return <View style={styles.header}></View>;
  return (
    <Button
      onPress={() => {
        props.navigation.navigate({ routeName: "Settings" });
      }}
    >
      {" "}
      Test{" "}
    </Button>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
});

export default HomeScreen;
