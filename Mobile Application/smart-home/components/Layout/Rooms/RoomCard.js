import {
  Heading,
  HStack,
  Center,
  // ScrollView,
  VStack,
  Box,
  Divider,
  AspectRatio,
  Image,
} from "native-base";

const RoomCard = (props) => {
  return (
    <Box maxH={400} maxW={230} p="1">
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: props.image,
          }}
          alt="image"
          borderRadius="xl"
          opacity="0.7"
        />
      </AspectRatio>

      <Center
        _text={{
          color: "pink.300",
          fontWeight: "700",
          fontSize: "xl",
        }}
        borderRadius="md"
        position="absolute"
        bottom="0"
        px="3"
        py="3"
      >
        {props.name}
      </Center>
    </Box>
  );
};

export default RoomCard;
