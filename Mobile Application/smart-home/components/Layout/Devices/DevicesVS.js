import { Heading, Center, HStack, Spinner, ScrollView } from "native-base";
import { useState, useEffect } from "react";

import DeviceCard from "./DeviceCard";
import axios from "axios";

const Devices = () => {
  const [types, setTypes] = useState([]);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    // console.log("Mounted (only once)");

    const getData = async () => {
      await axios
        .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/types")
        .then((response) => {
          // Update rooms state
          setTypes(
            // response.data.sort((a, b) => (a.room_id < b.room_id ? 1 : -1))
            response.data
          );
        });
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  // console.log(types);

  return (
    <>
      <Heading size="xl" px="5" py="3" color="pink.400">
        Devices
      </Heading>

      <Center>
        {types.length === 0 ? (
          <HStack space={2} justifyContent="center">
            <Spinner size="lg" color="pink.300" />
            <Heading color="pink.300" fontSize="lg" maxW="50%">
              Duma đang fetch data chờ tí đi pa...
            </Heading>
          </HStack>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={3} justifyContent="center" mx="1">
              {types.map((itemData, index) => (
                <DeviceCard type={itemData.name} key={index} />
              ))}
            </HStack>
          </ScrollView>
        )}
      </Center>
    </>
  );
};

export default Devices;
