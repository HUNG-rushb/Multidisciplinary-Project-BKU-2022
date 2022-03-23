import { Heading, HStack, ScrollView, Box } from "native-base";

import RoomCard from "./RoomCard";

const rooms = [
  {
    id: "0",
    name: "LIVINGROOM",
    image: "https://i.ibb.co/YZ0pKzj/livingroom.jpg",
    route: "Livingroom",
  },
  {
    id: "1",
    name: "BEDROOM",
    image: "https://i.ibb.co/wrHDt4W/bedroom.jpg",
    route: "Bedroom",
  },
  {
    id: "2",
    name: "KITCHEN",
    image: "https://i.ibb.co/hfKKFqZ/kitchen.jpg",
    route: "Kitchen",
  },
  {
    id: "3",
    name: "BATHROOM",
    image: "https://i.ibb.co/Df9cpLf/bathroom.jpg",
    route: "Bathroom",
  },
];

const Rooms = (props) => {
  return (
    <Box>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Rooms
      </Heading>

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
              route={itemData.route}
              navigation={props.navigation}
              key={index}
            />
          ))}
        </HStack>
      </ScrollView>

      {/* <RoomCard></RoomCard> */}
    </Box>
  );
};

export default Rooms;
