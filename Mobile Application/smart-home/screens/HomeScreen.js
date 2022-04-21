import { Divider } from "native-base";
import NavBar from "../components/Layout/NavBar";
import Rooms from "../components/Layout/Rooms/RoomsHS";
import Chart from "../components/Home/Chart";
import Clock from "../components/Home/Clock";
// import Devices from "../components/Layout/Devices/DevicesVS";

const HomeScreen = (props) => {
  // console.log(props);

  return (
    <>
      <NavBar />

      <Clock />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Rooms navigation={props.navigation} />

      <Divider my="3" bg="pink.200" thickness="2" />

      <Chart />

      {/* <Devices /> */}
    </>
  );
};

export default HomeScreen;
