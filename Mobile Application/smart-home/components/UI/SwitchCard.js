import { Text, VStack, HStack, Switch, Box, Icon } from "native-base";
import { MaterialCommunityIcons } from "@native-base/icons";

const SwitchCard = (props) => {
  let icon;
  switch (props.description) {
    case "light":
      icon = "lightbulb";
      break;
    case "fan":
      icon = "fan";
      break;
    default:
      icon = "temperature-celsius";
      break;
  }

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
        color: "white",
        textAlign: "left",
      }}
    >
      <HStack justifyContent="space-between">
        <Icon as={MaterialCommunityIcons} name={icon} size="lg" color="white" />

        <VStack space={2}>
          <Text bold fontSize="lg">
            {props.name}
          </Text>

          <Text>lorem</Text>
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
