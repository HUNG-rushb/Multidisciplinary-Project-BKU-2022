
import { Divider } from "native-base";

import NavBar from "../components/Layout/NavBar";
import Rooms from "../components/Layout/Rooms/RoomsHS";
import Devices from "../components/Layout/Devices/DevicesVS";

// import { MaterialCommunityIcons } from "@native-base/icons";

import { useState, useCallback } from "react";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = (props) => {
  // console.log(props);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="mistyrose"
            size="large"
            colors={["aqua", "greenyellow", "tomato"]}
          />
        }
      >
        <NavBar />

        <Divider my="3" bg="pink.200" thickness="2" />

        <Rooms navigation={props.navigation} />

        <Divider my="3" bg="pink.200" thickness="2" />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Devices />

    </>
  );
};

export default HomeScreen;
