import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
  const roomsID = useSelector((state) => state.roomsID);

  const [devices, setDevices] = useState([]);

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

  return (
    <View>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Livingroom
      </Heading>

      {devices.length === 0 ? (
        <HStack space={2} justifyContent="center">
          <Spinner size="lg" color="pink.300" />
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
