import { Divider } from "native-base";
import NavBar from "../components/Layout/NavBar";
import Rooms from "../components/Layout/Rooms/RoomsHS";
import Devices from "../components/Layout/Devices/DevicesVS";

const HomeScreen = (props) => {
  // console.log(props);

  return (
    <>
      <NavBar />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Rooms navigation={props.navigation} />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Devices />
    </>
  );
};

export default HomeScreen;
