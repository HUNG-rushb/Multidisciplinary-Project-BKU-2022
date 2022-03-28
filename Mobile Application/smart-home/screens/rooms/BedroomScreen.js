import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { View, Heading, VStack, HStack, Spinner } from "native-base";
import { RefreshControl, ScrollView } from "react-native";
import SwitchCard from "../../components/UI/SwitchCard";

import axios from "axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const BedroomScreen = (props) => {
  const roomsID = useSelector((state) => state.roomsID);

  const [devices, setDevices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    // console.log("Mounted (only once)");

    const getData = async () => {
      await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/room/${roomsID}/devices`
        )
        .then((response) => setDevices(response.data));
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Bedroom
      </Heading>

      {devices.length === 0 ? (
        <HStack space={2} justifyContent="center">
          <Spinner size="lg" color="pink.300" />
          <Heading color="pink.300" fontSize="lg" maxW="50%">
            Duma đang fetch data chờ tí đi pa...
          </Heading>
        </HStack>
      ) : (
        <ScrollView
          mb="60"
          showsVerticalScrollIndicator={false}
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
          <VStack space={4} alignItems="center">
            {devices.map((item, index) => (
              <SwitchCard
                id={item._id}
                description={item.description}
                name={item.name}
                key={index}
                status={item.data[0].value}
              />
            ))}
          </VStack>
        </ScrollView>
      )}
    </View>
  );
};

export default BedroomScreen;
