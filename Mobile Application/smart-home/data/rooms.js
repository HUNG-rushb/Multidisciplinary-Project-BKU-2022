import axios from "axios";

let a;

const getData = async () => {
  try {
    a = await axios.get(
      "https://bku-ces-iotsmarthouse.herokuapp.com/api/devices"
    );
  } catch (err) {
    console.log(err);
  }
};

export default a;
