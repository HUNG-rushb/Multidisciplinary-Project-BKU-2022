import { useState } from "react";
import {
  Text,
  VStack,
  HStack,
  Switch,
  Box,
  Icon,
  IconButton,
} from "native-base";
import { MaterialCommunityIcons } from "@native-base/icons";

import postData from "../../store/actions/postData";
import axios from "axios";

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
  const [status, setStatus] = useState(props.status); // '0' '1'

  const onToggleHandler = (id, value) => {
    postData(id, value);

    await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/device/${props.id}`
        )
        .then((response) => setStatus(response.data.data[0].value));
  };

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
          <Text bold fontSize="lg" textAlign="left" isTruncated>
            {props.name}
          </Text>

          {/* <Text isTruncated>lorem</Text> */}
        </VStack>

        <HStack>
          <Switch
            defaultIsChecked={props.status !== "0" ? true : false}
            // defaultIsChecked={status !== "0" ? true : false}
            colorScheme="pink"
            // onToggle={console.log("ok")}
            onToggle={onToggleHandler(props.id, status === '0' ? 1 : 0)}
          />

          <IconButton
            icon={<Icon as={MaterialCommunityIcons} name="close" size="sm" />}
            borderRadius="full"
            _icon={{
              color: "pink.500",
              size: "md",
            }}
            _hover={{
              bg: "pink.600:alpha.20",
            }}
            _pressed={{
              bg: "pink.600:alpha.20",
            }}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default SwitchCard;
