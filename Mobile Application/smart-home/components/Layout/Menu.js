import { Box, Menu, Pressable, HamburgerIcon, Divider } from "native-base";

const Menu = () => {
  return (
    // <Box h="80%" w="90%" alignItems="flex-start">
    <Menu
      closeOnSelect={true}
      w="190"
      //   onOpen={() => console.log("opened")}
      //   onClose={() => console.log("closed")}
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <Menu.OptionGroup defaultValue="Arial" title="free" type="radio">
        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
        <Menu.ItemOption value="Nunito Sans">Nunito Sans</Menu.ItemOption>
        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
      </Menu.OptionGroup>

      <Divider mt="3" w="100%" />

      <Menu.OptionGroup title="paid" type="checkbox">
        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
        <Menu.ItemOption value="Helvetica">Helvetica</Menu.ItemOption>
      </Menu.OptionGroup>

      {/* <Menu.Group title="Free">
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
        </Menu.Group>
        <Divider mt="3" w="100%" />
        <Menu.Group title="Paid">
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
        </Menu.Group> */}
    </Menu>
    // </Box>
  );
};

export default Menu;
