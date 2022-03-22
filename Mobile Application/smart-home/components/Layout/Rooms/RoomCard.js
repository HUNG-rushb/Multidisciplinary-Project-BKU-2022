import { Center, Box, Image, Pressable, Text } from "native-base";

const RoomCard = (props) => {
  const pressHandler = () => {
    props.navigation.navigate({ routeName: props.route });
  };

  return (
    <Box maxH={400} minW={275} minH={150} pr="5">
      <Pressable onPress={pressHandler} shadow="9">
        <Center>
          <Image
            source={{
              uri: props.image,
            }}
            alt={props.name}
            size="xl"
            opacity="0.6"
            borderRadius="xl"
            minW={275}
          />
        </Center>
        <Center
          _text={{
            color: "pink.400",
            fontWeight: "700",
            fontSize: "lg",
          }}
          borderRadius="md"
          position="absolute"
          bottom="0"
          px="3"
          py="3"
        >
          {props.name}
        </Center>
      </Pressable>
    </Box>
  );
};

export default RoomCard;
