import { useState } from "react";

import { Text, VStack, HStack, Switch, Box, Icon } from "native-base";

import { MaterialCommunityIcons } from "@native-base/icons";

import axios from "axios";

const SwitchCard = (props) => {
  let icon;
  let postfix = "";
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

  const [status, setStatus] = useState(props.status);

  const onChangeHandler = async (id) => {
    let value;
    if (icon === "fan") {
      if (status === "0") {
        setStatus("30");
        value = "30";
      } else {
        setStatus("0");
        value = "0";
      }
    } else if (icon === "lightbulb") {
      value = 100 - parseInt(status);
      value = value.toString();
      // console.log(value);
      setStatus(value);
    }

    const body = {
      value: value,
    };
    console.log(body);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(
      `https://bku-ces-iotsmarthouse.herokuapp.com/api/device/${id}/data`,
      body,
      config
    );

    // console.log(request);
    // console.log(status);
  };


  // const deleteDevice = () => {
  //   console.log("ok");
  // };


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
        </VStack>

        {icon === "lightbulb" || icon === "fan" ? (
          <HStack>
            <Switch
              // defaultIsChecked={props.status !== "0" ? true : false}
              defaultIsChecked={
                status !== "0" &&
                status !== "45" &&
                status !== "46" &&
                status !== "47"
                  ? true
                  : false
              }
              colorScheme="pink"
              // onToggle={onToggleHandler(props.id, status === "0" ? 1 : 0)}
              onChange={() => {
                onChangeHandler(props.device_id);
              }}
              // onValueChange={status === "0" ? "1" : "0"}
            />

            {/* <IconButton

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
              onClick={deleteDevice}

            /> */}

          </HStack>
        ) : (
          <HStack>
            <Text
              bold
              fontSize="xl"
              textAlign="left"
              isTruncated
              color="pink.500"
            >
              {status} {postfix}
            </Text>
          </HStack>
        )}
      </HStack>
    </Box>
  );
};

export default SwitchCard;
