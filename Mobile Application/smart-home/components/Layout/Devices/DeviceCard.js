import { Button, Icon, Text } from "native-base";

import { MaterialCommunityIcons } from "@native-base/icons";

const DeviceCard = (props) => {
  let icon;
  switch (props.description) {
    case "light":
      icon = "lightbulb";
      break;
    case "fan":
      icon = "fan";
      break;
    case "humi":
      icon = "water";
      postfix = "%";
      break;
    case "gas":
      icon = "fire";
      postfix = "BPM";
      break;
    default:
      icon = "temperature-celsius";
      postfix = "℃";
      break;
  }

  return (
    <Button
      leftIcon={
        <Icon
          as={MaterialCommunityIcons}
          name={icon}
          size="lg"
          color="pink.300"
        />
      }
      bgColor="white"
      shadow="9"
      py="3"
      m="3"
    >
      <Text fontSize="xl" bold color="pink.500">
        Light
      </Text>
      <Text color="pink.300">lorem</Text>
    </Button>
  );
};

export default DeviceCard;
