import { useState, useEffect } from "react";
import {
  View,
  Heading,
  VStack,
  HStack,
  ScrollView,
  Spinner,
} from "native-base";

import SwitchCard from "../../components/UI/SwitchCard";

import axios from "axios";

const LivingroomScreen = (props) => {
  const [devices, setDevices] = useState([]);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    console.log("Mounted (only once)");

    const getData = async () => {
      await axios
        .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/devices")
        .then((response) => setDevices(response.data));

      // const response = await fetch(
      //   "https://bku-ces-iotsmarthouse.herokuapp.com/api/devices"
      // );

      // const json = await response.json();

      // setDevices(json.data);
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  console.log(devices.length === 0);

  return (
    <View>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Livingrooms
      </Heading>

      {devices.length === 0 ? (
        <HStack space={2} justifyContent="center">
          <Spinner size="xl" color="pink.300" />
          <Heading color="pink.300" fontSize="lg" maxW="50%">
            Duma đang fetch data chờ tí đi pa...
          </Heading>
        </HStack>
      ) : (
        <ScrollView mb="60" showsVerticalScrollIndicator={false}>
          <VStack space={4} alignItems="center">
            {devices.map((item, index) => (
              <SwitchCard
                id={item._id}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </VStack>
        </ScrollView>
      )}
    </View>
  );
};

export default LivingroomScreen;
