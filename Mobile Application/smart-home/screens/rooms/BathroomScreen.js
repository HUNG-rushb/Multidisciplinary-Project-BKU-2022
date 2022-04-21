import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { View, Heading, VStack, HStack, Spinner } from "native-base";
import { RefreshControl, ScrollView } from "react-native";
import SwitchCard from "../../components/UI/SwitchCard";

import axios from "axios";

const BathroomScreen = (props) => {
  const roomsID = useSelector((state) => state.roomsID);

  const [devices, setDevices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    setRefreshing(true);

    const getData = async () => {
      await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/room/${roomsID}/devices`
        )
        .then((response) => {
          setDevices(response.data);
          setRefreshing(false);
        });
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  // console.log(devices);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setDevices([]);

    const getData = async () => {
      await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/room/${roomsID}/devices`
        )
        .then((response) => {
          setDevices(response.data);
          setRefreshing(false);
        });
    };

    getData();
  }, []);

  return (
    <View>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Bathroom
      </Heading>

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
              device_id={item.device_id}
              description={item.description}
              name={item.name}
              key={index}
              status={item.data[0].value}
            />

          ))}
        </VStack>

        <Heading></Heading>
      </ScrollView>

    </View>
  );
};

export default BathroomScreen;
