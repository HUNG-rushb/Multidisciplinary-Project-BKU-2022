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
import DeviceCard from "./DeviceCard";

const devices = [];

const Devices = () => {
  return (
    <>
      <Heading size="xl" px="5" py="3" color="pink.400">
        Devices
      </Heading>

      <Center>
        <ScrollView
          _contentContainerStyle={{
            px: "10px",
            mb: "4",
            minW: "80",
            // maxH: "10%",
            showsVerticalScrollIndicator: "true",
          }}
        >
          <HStack space={10}>
            <VStack space={8} alignItems="center" flex="1">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </VStack>

            <VStack space={8} alignItems="center" flex="1">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </VStack>
          </HStack>
        </ScrollView>
      </Center>
    </>
  );
};

export default Devices;
