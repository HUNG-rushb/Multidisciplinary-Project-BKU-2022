import { Center, Box, Text, HStack, IconButton, Icon } from "native-base";
import { Entypo } from "@native-base/icons";

import MenuNavBar from "./MenuNavBar";

const NavBar = (props) => {
  return (
    <>
      {/* <Center>
        <Box safeAreaTop bg="#ffffff" />

        <HStack
          bg={{
            linearGradient: {
              colors: ["primary.100", "primary.700"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="100%"
        >
          <HStack alignItems="center">
            <IconButton
              icon={<Icon size="sm" as={Entypo} name="menu" color="black" />}
              onPress={console.log(1)}
            />

            <MenuNavBar />

            <Text color="white" fontSize="20" fontWeight="bold">
              Home
            </Text>
          </HStack>

          <HStack>
            <IconButton
              icon={<Icon as={Entypo} name="users" size="sm" color="white" />}
            />

            <IconButton
              icon={
                <Icon
                  as={Entypo}
                  name="dots-three-vertical"
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
      </Center> */}

      <MenuNavBar />
    </>
  );
};

export default NavBar;
