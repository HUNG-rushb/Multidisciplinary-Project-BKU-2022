import {
  Button,
  Heading,
  Center,
  ScrollView,
  VStack,
  HStack,
  Box,
  Divider,
  AspectRatio,
  Image,
  Icon,
  Text,
} from "native-base";

import { Entypo } from "@native-base/icons";

const DeviceCard = (props) => {
  return (
    <Button
      leftIcon={
        <Icon as={Entypo} name="light-bulb" size="lg" color="pink.300" />
      }
      bgColor="white"
      shadow="9"
      py="3"
    >
      <Text fontSize="xl" bold color="pink.500">
        Light
      </Text>
      <Text color="pink.300">lorem</Text>
    </Button>
  );
};

export default DeviceCard;
