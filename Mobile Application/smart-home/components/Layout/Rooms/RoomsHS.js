import { Heading, HStack, ScrollView, Box } from "native-base";

import RoomCard from "./RoomCard";

const rooms = [
  {
    id: "0",
    name: "LIVINGROOM",
    image: "https://i.ibb.co/YZ0pKzj/livingroom.jpg",
  },
  {
    id: "1",
    name: "BEDROOM",
    image: "https://i.ibb.co/wrHDt4W/bedroom.jpg",
  },
  {
    id: "2",
    name: "KITCHEN",
    image: "https://i.ibb.co/hfKKFqZ/kitchen.jpg",
  },
  {
    id: "3",
    name: "BATHROOM",
    image: "https://i.ibb.co/Df9cpLf/bathroom.jpg",
  },
];

const Rooms = (props) => {
  return (
    <Box>
      <Heading size="xl" px="5" py="3" color="pink.400">
        Rooms
      </Heading>
      <ScrollView
        horizontal={true}
        px="3"
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={3} justifyContent="center">
          {rooms.map((itemData, index) => (
            <RoomCard
              name={itemData.name}
              image={itemData.image}
              key={index}
            ></RoomCard>
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default Rooms;
