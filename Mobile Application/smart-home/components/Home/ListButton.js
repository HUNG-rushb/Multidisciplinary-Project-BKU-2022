const components = [
  {
    name: "Alert",
  },
  {
    name: "Avatar",
  },
  {
    name: "Badge",
  },
  {
    name: "Box",
  },
];

const ListButton = (props) => {
  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <List
        divider={
          <Divider ml={16} opacity={colorMode == "dark" ? "0.4" : "1"} />
        }
        px={3}
        // mt={12}
        py={0}
        // borderColor="red.200"
        borderWidth={0}
        borderRightWidth={0}
        w="100%"
      >
        {components.map((comp, index) => (
          <List.Item
            key={index}
            onPress={() =>
              navigation.navigate("component", { name: comp.name })
            }
            _hover={{ bg: "coolGray.300" }}
          >
            <HStack space={3} py={1} alignItems="center" w="100%">
              <Box mr={4}>
                <Entypo
                  name="circular-graph"
                  size={32}
                  color={colorMode === "dark" ? "white" : "black"}
                />
              </Box>

              <Text>{comp.name}</Text>

              <Box ml="auto">
                <Icon
                  mr={2}
                  size="sm"
                  as={<MaterialCommunityIcons name="chevron-right" />}
                  color="coolGray.500"
                />
              </Box>
            </HStack>
          </List.Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListButton;
