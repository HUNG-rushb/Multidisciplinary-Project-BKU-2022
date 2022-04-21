import axios from "axios";
import { useState, useEffect } from "react";
import {
  Heading,
  HStack,
  ScrollView,
  Box,
  Spinner,
  Icon,
  IconButton,
} from "native-base";
import RoomCard from "./RoomCard";

import { MaterialCommunityIcons } from "@native-base/icons";

const Rooms = (props) => {
  const [rooms, setRooms] = useState([]);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    // console.log("Mounted (only once)");

    const getData = async () => {
      await axios
        .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/rooms")
        .then((response) => {
          // Update rooms state
          setRooms(
            response.data.sort((a, b) => (a.room_id < b.room_id ? 1 : -1))
          );
        });
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  // console.log(rooms);

  const loadData = () => {
    setRooms([]);

    const getData = async () => {
      await axios
        .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/rooms")
        .then((response) => {
          // Update rooms state
          setRooms(
            response.data.sort((a, b) => (a.room_id < b.room_id ? 1 : -1))
          );
        });
    };

    getData();
  };

  return (
    <Box>
      <HStack space={2} justifyContent="space-between">
        <Heading size="xl" px="5" pb="3" color="pink.400">
          Rooms
        </Heading>

        <IconButton
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="refresh"
              size="md"
              color="pink.300"
            />
          }
          mr={2}
          mb={2}
          _pressed={{
            bg: "pink.100",
          }}
          onPress={loadData}
        />
      </HStack>

      {rooms.length === 0 ? (
        <HStack space={2} justifyContent="center">
          <Spinner size="lg" color="pink.300" />
          {/* <Heading color="pink.300" fontSize="lg" maxW="50%">
            Loading...
          </Heading> */}
        </HStack>
      ) : (
        <ScrollView
          horizontal={true}
          px="3"
          showsHorizontalScrollIndicator={false}
        >
          <HStack space={3} justifyContent="center" mx="1">
            {rooms.map((itemData, index) => (
              <RoomCard
                name={itemData.name}
                image={itemData.image}
                route={itemData.name}
                navigation={props.navigation}
                key={index}
                roomID={itemData.room_id}
              />
            ))}
          </HStack>
        </ScrollView>
      )}
    </Box>
  );
};

export default Rooms;
