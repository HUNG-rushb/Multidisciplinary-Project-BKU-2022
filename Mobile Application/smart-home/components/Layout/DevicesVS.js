import {
  Heading,
  Center,
  ScrollView,
  VStack,
  Box,
  Divider,
  AspectRatio,
  Image,
} from "native-base";

const Devices = () => {
  return (
    <>
      {/* <Heading size="lg" px="5" py="3" color="primary.400">
        Devices
      </Heading>
      <Center>
        <ScrollView
          maxW="300"
          h="80"
          _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "72",
          }}
        >
          <VStack space={4} alignItems="center" flex="1">
            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
          </VStack>
        </ScrollView>
      </Center> */}
      <ScrollView>
        <Center>
          <ScrollView
            maxW="300"
            h="80"
            _contentContainerStyle={{
              px: "20px",
              mb: "4",
              minW: "72",
            }}
          >
            <Center mt="3" mb="4">
              <Heading fontSize="xl">Cyan</Heading>
            </Center>
            <VStack flex="1">
              <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            </VStack>
            <Center mt="8" mb="4">
              <Heading fontSize="xl">Yellow</Heading>
            </Center>
            <VStack flex="1">
              <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            </VStack>
            <Center mt="8" mb="4">
              <Heading fontSize="xl"> Violet</Heading>
            </Center>
            <VStack flex="1">
              <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
            </VStack>
          </ScrollView>
        </Center>
      </ScrollView>
    </>
  );
};

export default Devices;
