import { View, Text, VStack, HStack, Switch, Box, Icon } from "native-base";
import { Entypo } from "@native-base/icons";

const SwitchCard = (props) => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["pink.200", "pink.400"],
          start: [1, 0],
          end: [0, 0],
        },
      }}
      py="8"
      px="5"
      m="1"
      rounded="xl"
      minW="85%"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "white",
        textAlign: "left",
      }}
    >
      <HStack justifyContent="space-between">
        <Icon as={Entypo} name="light-bulb" size="lg" color="white" />

        <VStack space={2}>
          <Text>The Garden City</Text>

          <Text>The Silicon Valley of India.</Text>
        </VStack>

        {/* <Switch
          defaultIsChecked={false}
          isChecked={console.log("ok")}
        /> */}
        <Switch defaultIsChecked colorScheme="pink" />
      </HStack>
    </Box>
  );
};

export default SwitchCard;
